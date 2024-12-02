import express from 'express';
import router from './routes/index.js';

const app = express();

// Use the routes
app.use('/', router);

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
