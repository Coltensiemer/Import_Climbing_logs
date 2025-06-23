import VerticalBarChart, { options } from "@/components/charts/verticalBarChart";
import { deriveBoulderGradesInOrder } from "@/utils/DataHelper";
import fakeKayaLogs from "@/utils/data/fake_kaya_log.json";


export default function Home() {

  const chartData = deriveBoulderGradesInOrder(fakeKayaLogs);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1> Hello World</h1>
      {chartData && <VerticalBarChart options={options} data={chartData} />}
    </div>
  );
}
