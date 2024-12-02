import fs from 'fs/promises';

/**
 * Reads the database file and parses it.
 * @param {string} filePath - Path to the database file.
 * @returns {Promise<Object>} - A promise that resolves to an object with student fields and their first names.
 */
async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim().length > 0);
    const header = lines.shift(); // Remove the header row

    const studentsByField = {};
    for (const line of lines) {
      const [firstname, , , field] = line.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    }

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
