import express, {Application, Request, Response} from "express" ; 

import carRoutes from './routes/cars';

 

const PORT = process.env.PORT || 3120; 

 

const app: Application = express(); 

 

app.get("/ping", async (_req : Request, res: Response) => { 

  res.json({ 

  message: "hello from David"  

  }); 

});

 

app.listen(PORT, () => { 

  console.log("Server is running on port", PORT); 
  }); 
  app.get('/bananas', async (_req : Request, res: Response) => { 
  res.json({ 
  message: "this is bananas", 
  }); 
}); 

app.listen(PORT, () => { 

  console.log("Server is running on port", PORT); 
  }); 
  app.get('/crazy', async (_req : Request, res: Response) => { 
  res.json({ 
  message: "this is crazy", 
  }); 
}); 

app.use((req, _res, next) => {  

  console.log(`${req.method} ${req.originalUrl}`); 
  next(); 
});    






app.use(express.json());

app.use('/api/v1/cars', carRoutes)


