import dotenv from 'dotenv';
import express from 'express';
import router from './libs/express/router.js';
const app = express();
dotenv.config({ path: '.env' });

const port = process.env.HTTP_PORT || 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
