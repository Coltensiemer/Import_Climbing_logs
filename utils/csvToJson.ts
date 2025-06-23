import * as fs from 'fs';
import csvToJson from 'convert-csv-to-json';


const csvPath = '../csv-data/fake_kaya_log.csv';
// const mockCsvPath = '../csv-data/MOCK_Data.csv';
// const csvString = fs.readFileSync(csvPath, 'utf8');
const jsonPath = './data/fake_kaya_log.json';

const dataFolder = './data';
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
}


export default function convertCsvToJson(input: string) {
	//converted into json but not correctly'
	//Need to loop over items and convert to correct types
	try {
		const results = csvToJson.fieldDelimiter(',').formatValueByType(true).getJsonFromCsv(input);
		console.log('CSV to JSON conversion successful');
		return results;
	} catch (error) {
		console.error('Error converting CSV to JSON:', error);
	}
}

// convertCsvToJson(csvPath);

export function convertCsvToJsonFileCreator(csvFilePath: string, outputJsonPath: string) {
	try {
		csvToJson.fieldDelimiter(',').formatValueByType(true).generateJsonFileFromCsv(csvFilePath, outputJsonPath);
		console.log(`Converted CSV to JSON and saved to ${outputJsonPath}`);
	} catch (error) {
		console.error('Error converting CSV file to JSON:', error);
	}
}

convertCsvToJsonFileCreator(csvPath, jsonPath);