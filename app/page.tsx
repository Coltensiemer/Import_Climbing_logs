"use client";
"use client";

import { useState, useEffect, use} from "react";
import { useRouter } from "next/navigation";
import DragAndDrop from "@/components/ui/dragAndDrop";
import { DataTable } from "@/components/dataTables/DataTable";
import { KayaLogBookHeaders } from "@/types/types";
import { generateColumnHeadersbyCSV } from "@/utils/DataHelper";
import VerticalBarChart from "@/components/charts/verticalBarChart";


export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) {
  const router = useRouter();
  const params = use(searchParams);
  const currentView = params.view || "None";
export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) {
  const router = useRouter();
  const params = use(searchParams);
  const currentView = params.view || "None";

  const [parsedData, setParsedData] = useState<KayaLogBookHeaders[]>([]);
  const columns = generateColumnHeadersbyCSV(parsedData);

  const handleFileParseSuccess = (data: KayaLogBookHeaders[]) => {
    setParsedData(data);
    localStorage.setItem('parsedData', JSON.stringify(data));
    router.push('?view=table');
  };

  useEffect(() => {
  const saved = localStorage.getItem('parsedData');
  if (saved) {
    setParsedData(JSON.parse(saved));
  }
}, []);

  const handleFileParseSuccess = (data: KayaLogBookHeaders[]) => {
    setParsedData(data);
    localStorage.setItem('parsedData', JSON.stringify(data));
    router.push('?view=table');
  };

  useEffect(() => {
  const saved = localStorage.getItem('parsedData');
  if (saved) {
    setParsedData(JSON.parse(saved));
  }
}, []);

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {parsedData.length === 0 && <DragAndDrop onFileParsedAction={handleFileParseSuccess} />}
      <div className="flex items-center justify-center w-full">
        {currentView === "table" && <DataTable data={parsedData} columns={columns} />}
      </div>
      {/* {currentView === "graph" && <VerticalBarChart />} */}
    </div>
  );
}
