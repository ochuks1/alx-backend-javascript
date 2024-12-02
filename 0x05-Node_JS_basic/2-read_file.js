#!/usr/bin/node
const fs = require('fs');

/**
 * Count students in a CSV file
 * @param {string} path - The file path
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8' }).trim();
    const lines = data.split('\n').slice(1);
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
