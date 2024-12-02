/**
 * Controller for handling the homepage.
 */
class AppController {
  /**
   * Sends a simple welcome message.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
