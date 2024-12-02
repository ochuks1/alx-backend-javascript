import readDatabase from '../utils.js';

/**
 * Controller for handling student routes.
 */
class StudentsController {
  /**
   * Retrieves all students grouped by fields.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async getAllStudents(req, res) {
    try {
      const filePath = process.argv[2];
      const students = await readDatabase(filePath);

      let output = 'This is the list of our students\n';
      Object.keys(students)
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
        .forEach((field) => {
          const names = students[field].join(', ');
          output += `Number of students in ${field}: ${students[field].length}. List: ${names}\n`;
        });

      res.status(200).send(output.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  /**
   * Retrieves all students in a specific field.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (!['CS', 'SWE'].includes(major)) {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const filePath = process.argv[2];
      const students = await readDatabase(filePath);
      const fieldStudents = students[major] || [];

      res.status(200).send(`List: ${fieldStudents.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
