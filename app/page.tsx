'use client';

import { useState } from "react";
import DragAndDrop from "@/components/ui/dragAndDrop";
import { DataTable } from "@/components/dataTables/DataTable";
import { KayaLogBookHeaders } from "@/types/types";
import { generateColumnHeadersbyCSV } from "@/utils/DataHelper";
import VerticalBarChart from "@/components/charts/verticalBarChart";


export default function Home({ searchParams }: { searchParams: { view?: string } }) {
  const currentView = searchParams.view || "None";

  const [parsedData, setParsedData] = useState<KayaLogBookHeaders[]>([]);
  const columns = generateColumnHeadersbyCSV(parsedData);

  return (
<<<<<<< Updated upstream
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"> 
      {parsedData.length === 0 ? (
        <DragAndDrop onFileParsedAction={setParsedData} />
      ) : (
        <p className="text-gray-500">File parsed successfully!</p>
      )}
      {currentView === "table" && <DataTable data={parsedData} columns={columns} />}
=======
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {parsedData.length === 0 && <DragAndDrop onFileParsedAction={handleFileParseSuccess} />}
      <div className="flex items-center justify-center w-full">
        {currentView === "table" && <DataTable data={parsedData} columns={columns} />}
      </div>
>>>>>>> Stashed changes
      {/* {currentView === "graph" && <VerticalBarChart />} */}
    </div>
  );
}
