'use client';

import React, { useState } from "react";
import { Button } from "./button";
import { csvStringToJson} from "@/utils/csvToJson";
import { KayaLogBookHeaders } from "@/types/types";

interface DragAndDropProps {
  onFileParsedAction: (data: KayaLogBookHeaders[]) => void;
}

export default function DragAndDrop({ onFileParsedAction }: DragAndDropProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const jsonData = csvStringToJson(text);
        onFileParsedAction(jsonData as KayaLogBookHeaders[]);
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
		<div>
			<div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-600 rounded-lg">
			<Button>
      <input type="file" accept=".csv,.txt" onChange={handleChange} />
			</Button>
			</div>
      <p>{file ? `File name: ${file.name}` : "No files uploaded yet"}</p>
    </div>
  );
}