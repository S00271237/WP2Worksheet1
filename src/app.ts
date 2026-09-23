import express, {Application, Request, Response} from "express" ; 

import carRoutes from './routes/cars';

import { env } from "./config/env";

import { connectDB } from "./config/database";
 

//const PORT = process.env.PORT || 3120; 

const port = env.port

const app: Application = express(); 



app.get("/ping", async (_req : Request, res: Response) => { 

  res.json({ 

  message: "hello from David"  

  }); 

});

 

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

};

startServer();



app.use((req, _res, next) => {  

  console.log(`${req.method} ${req.originalUrl}`); 
  next(); 
});    






app.use(express.json());

app.use('/api/v1/cars', carRoutes)


