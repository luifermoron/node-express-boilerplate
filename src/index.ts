import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
const app = express();
const port = process.env.PORT || 3000;
import routes from './drivers/express/routes';
const { scopePerRequest, loadControllers } = require('awilix-express');

import container from './drivers/dependecyinjection/container';


app.use(helmet());

app.disable('x-powered-by');

// Remove or change the X-Powered-By header
app.use((req: Request, res: Response, next: NextFunction) => {
  res.removeHeader('X-Powered-By');
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use(scopePerRequest(container));
app.use(loadControllers('../src/drivers/express/routes/teams/**-**/**-**.**', { cwd: __dirname }));
routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});