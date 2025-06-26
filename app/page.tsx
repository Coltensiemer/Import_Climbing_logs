'use client';

import { useState } from "react";
import DragAndDrop from "@/components/ui/dragAndDrop";
import { DataTable } from "@/components/dataTables/DataTable";

// import fake_kaya_log  from "@/utils/data/fake_kaya_log.json";

import { columns } from "@/components/dataTables/columns";
import { KayaLogBookHeaders } from "@/types/types";
export default function Home() {
  const [parsedData, setParsedData] = useState<KayaLogBookHeaders[]>([]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1> Hello World</h1>
      {parsedData.length === 0 ? (
        <DragAndDrop onFileParsedAction={setParsedData} />
      ) : (
        <p className="text-gray-500">File parsed successfully!</p>
      )}
      <p className="text-gray-500">Parsed Data Length: {parsedData.length}</p>
      {parsedData.length > 0 && <DataTable data={parsedData} columns={columns} />}
    </div>
  );
}
