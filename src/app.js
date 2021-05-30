/********************************************
/               Modules                 /
********************************************/

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import MainRoutes from './routes/MainRoutes';
import UsersRoutes from './routes/UsersRoutes';
import ReposRoutes from './routes/ReposRoutes';

/********************************************
/               Settings                    /
********************************************/

const app = express();
app.set('port', process.env.PORT || 3000); 

/********************************************
/               Middlewares                 /
********************************************/

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/********************************************
/               Routes                      /
********************************************/

app.use('/', MainRoutes);
app.use('/api/users', UsersRoutes);
app.use('/api/repos', ReposRoutes);

export default app;