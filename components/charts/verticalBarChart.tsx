'use client'; 


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartOptions, ChartData } from 'chart.js/auto';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type VerticalBarChartProps = {
  options: ChartOptions<'bar'>;
  data: ChartData<'bar'>;
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};


export default function VerticalBarChart({ options, data }: VerticalBarChartProps) {
  
  return (
    <div className="w-1/2 h-1/2">
      <Bar options={options} data={data} />
    </div>
  );
}
