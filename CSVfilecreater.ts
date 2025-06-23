import fs from 'fs';
import path from 'path';
import { generateFakeKayaLogEntries } from './lib/CSVGeneratorKaya.ts'; 
import { KayaLogBookHeaders } from './types/types.ts';

function createCsvFolderWithData(folderName: string, fileName:string, headers:string[], data: KayaLogBookHeaders[]) {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }

  const filePath = path.join(folderName, fileName);
  const headerLine = headers.join(',') + '\n';
  const rows = data.map(row =>
    headers.map(h => (row[h as keyof KayaLogBookHeaders] !== undefined ? row[h as keyof KayaLogBookHeaders] : '')).join(',')
  );
  fs.writeFileSync(filePath, headerLine + rows.join('\n'), { flag: 'w' });
}

// Usage example:
const folderName = 'csv-data';
const fileName = 'fake_kaya_log.csv';
const fakeEntries = generateFakeKayaLogEntries(20);

// Get headers from the keys of the first entry
const headers = fakeEntries.length > 0 ? Object.keys(fakeEntries[0]) : [];

createCsvFolderWithData(folderName, fileName, headers, fakeEntries);