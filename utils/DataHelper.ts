import { KayaLogBookHeaders, KayaLogBookHeadersRawData, Rating} from '@/types/types';
import { ColumnDef } from '@tanstack/react-table';
import { kayaHeaderConfigs, desiredOrderforKayaHeaders } from './ColumnHeadersConfig';

export const deriveGradeCounts = (data: KayaLogBookHeaders[]): Record<string, number> => { 
  const deriveGradeCounts: Record<string, number> = {};

    data.forEach((e) => {
    const grade = e.grade ?? 'Unknown';
    deriveGradeCounts[grade] = (deriveGradeCounts[grade] || 0) + 1;
  });

  return deriveGradeCounts;
}
export const deriveBoulderGradesInOrder = (data: KayaLogBookHeaders[]) => {
  if (!data || !Array.isArray(data)) {
    return null;
	}
	

  const counts = deriveGradeCounts(data);

  const sortedGrades = Object.keys(counts).sort((a, b) => {
    const getNum = (grade: string) => {
      if (grade.startsWith('v')) return parseInt(grade.slice(1), 10);
      return 1000;
    };
    return getNum(a) - getNum(b);
  });

  return {
    labels: sortedGrades,
    datasets: [
      {
        label: 'Number of Climbs',
        data: sortedGrades.map((grade) => counts[grade]),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
}




// 2. Generate columns, using custom config if header matches KayaLogBookHeaders
export function generateColumnHeadersbyCSV(data: object[]): ColumnDef<object>[] {
  if (!data || data.length === 0) return [];
  const headers = Object.keys(data[0]);
  const kayaKeys = Object.keys(kayaHeaderConfigs);

  const orderedHeaders = [
    ...desiredOrderforKayaHeaders.filter(h => headers.includes(h)),
    ...headers.filter(h => !desiredOrderforKayaHeaders.includes(h as keyof KayaLogBookHeaders)),
  ];

  return orderedHeaders.map(header => {
    if (kayaKeys.includes(header)) {
      return {
        accessorKey: header,
        ...kayaHeaderConfigs[header as keyof KayaLogBookHeaders],
      };
    }
    // Default column config
    return {
      accessorKey: header,
      header: header.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      enableSorting: true,
    };
  });
}



export function convertKayaLogBookHeaders(data: KayaLogBookHeadersRawData): KayaLogBookHeaders {
	return {
		date: data.date ? new Date(data.date) : undefined,
		stiffness: data.stiffness !== undefined ? Number(data.stiffness) : undefined,
		rating: data.rating !== undefined ? Number(data.rating) as Rating : undefined,
		ascent_type: data.ascent_type,
		grade: data.grade,
		color: data.color,
		climb_name: data.climb_name,
		gym: data.gym,
		location: data.location,
		country: data.country,
	}
}