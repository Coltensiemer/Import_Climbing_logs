'use client';

import { useState } from "react";
import DragAndDrop from "@/components/ui/dragAndDrop";
import { DataTable } from "@/components/dataTables/DataTable";
import { KayaLogBookHeaders } from "@/types/types";
import { generateColumnHeadersbyCSV } from "@/utils/DataHelper";


export default function Home() {
  const [parsedData, setParsedData] = useState<KayaLogBookHeaders[]>([]);
  const columns = generateColumnHeadersbyCSV(parsedData);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"> 
      {parsedData.length === 0 ? (
        <DragAndDrop onFileParsedAction={setParsedData} />
      ) : (
        <p className="text-gray-500">File parsed successfully!</p>
      )}
      {parsedData.length > 0 && <DataTable data={parsedData} columns={columns} />}
    </div>
  );
}
