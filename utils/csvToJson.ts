// import * as fs from 'fs';
// import csvToJson from 'convert-csv-to-json';


// const csvPath = '../csv-data/fake_kaya_log.csv';
// const mockCsvPath = '../csv-data/MOCK_Data.csv';
// const csvString = fs.readFileSync(csvPath, 'utf8');
// const jsonPath = './data/fake_kaya_log.json';

export function csvStringToJson(csv: string): object[] {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');

  return lines.slice(1).map(line => {
    const values = line.split(',');
    const entry: { [key: string]: string } = {};
    
    headers.forEach((header, i) => {
      entry[header.trim()] = values[i]?.trim() ?? "";
    });

    return entry;
  });
}

// export function convertCsvToJson(input: string) {
// 	try {
// 		const results = csvToJson.fieldDelimiter(',').formatValueByType(true).getJsonFromCsv(input);
// 		console.log('CSV to JSON conversion successful');
// 		return results;
// 	} catch (error) {
// 		console.error('Error converting CSV to JSON:', error);
// 	}
// }

// convertCsvToJson(csvPath);

// export function convertCsvToJsonFileCreator(csvFilePath: string, outputJsonPath: string) {
// 	try {
// 		csvToJson.fieldDelimiter(',').formatValueByType(true).generateJsonFileFromCsv(csvFilePath, outputJsonPath);
// 		console.log(`Converted CSV to JSON and saved to ${outputJsonPath}`);
// 	} catch (error) {
// 		console.error('Error converting CSV file to JSON:', error);
// 	}
// }

// convertCsvToJsonFileCreator(csvPath, jsonPath);