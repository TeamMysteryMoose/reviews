let csvToJson = require('convert-csv-to-json');
let fileInputName = './reviews.csv';
let fileOutputName = 'jsonReviews.json';

let jsonReviews = csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName, fileOutputName);

