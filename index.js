import express from 'express';
import mysql from 'mysql';
import routes from './routes'


 const connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
    port: process.env.db_port
 })
 connection.connect(()=>{
     console.log("connected to database")
 })
 const app = express();
 const applicationRoutes = routes(app);
 app.use(applicationRoutes);

 
 
 app.listen(8000,()=>{
     console.log('listening to port 8000')
 })
 module.exports = app;