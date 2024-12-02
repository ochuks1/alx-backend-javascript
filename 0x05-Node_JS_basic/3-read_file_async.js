#!/usr/bin/node
const fs = require('fs').promises;

/**
 * Count students in a CSV file asynchronously
 * @param {string} path - The file path
 * @returns {Promise<void>}
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });
    const lines = data.trim().split('\n').slice(1);
    const students = lines.filter(line => line);
    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach(student => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
