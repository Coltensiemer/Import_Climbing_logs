import { KayaLogBookHeaders, KayaLogBookHeadersRawData, Rating} from '@/types/types';

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



// export const valuesConverter = (data): KayaLogBookHeaders[] => {
//   return data.map((e) => ({
//     ...e,
//     stiffness: e.stiffness !== undefined ? Number(e.stiffness) : undefined,
//     rating: e.rating !== undefined ? Number(e.rating) as Rating : undefined,

//   }));
// };



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