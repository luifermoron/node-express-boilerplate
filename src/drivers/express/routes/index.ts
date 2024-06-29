import teamsRouter from './teams';

import { Express } from 'express';

export default function routes(app: Express) {
    app.use('/api/teams', teamsRouter());
}
