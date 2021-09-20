const error = require('./src/constants.js');
const File = require('./src/file.js');
const { rejects, deepStrictEqual } = require('assert');

; (async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv';
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath);
        await rejects(result, rejection);
    }
    {
        const filePath = './mocks/fourItems-invalid.csv';
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath);
        await rejects(result, rejection);
    }
    {
        const filePath = './mocks/invalid-header.csv';
        const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
        const result = File.csvToJson(filePath);
        await rejects(result, rejection);
    }
    {
        const filePath = './mocks/threeItems-valid.csv';
        const result = await File.csvToJson(filePath);
        const expected = [
            {
                "name": "Maria",
                "id": 123,
                "profession": "Developer Php",
                "birthday": 1999
            },
            {
                "name": "James",
                "id": 333,
                "profession": "Engennier",
                "birthday": 1986
            },
            {
                "name": "Marcos",
                "id": 001,
                "profession": "Uber",
                "birthday": 1994
            }
        ]
        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
    }
})();