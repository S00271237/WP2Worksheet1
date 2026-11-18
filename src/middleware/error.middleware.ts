import { NextFunction, Request, Response } from "express";
import { AppError, ValidationError } from "../apperrors/apperrors";

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  

  console.error(`Custom middleware: ${err}`);


        if (err instanceof ValidationError) {
  res.status(400).json({
    success: false,
    message: err.message,
    errors: err.details
  });

  return;
}

    if (err instanceof AppError) {
 
        res.status(err.statusCode).json({
        error: err.name,
        message: err.message
    });



  return;
}
  

  res.status(500).json({ error: 'error',
        message: 'Server Error' });
};
export class UserAlreadyExistsError extends AppError {
  constructor() {
    super('User already exists', 409);
  }
}

export class UnauthorizedError  extends AppError {
  constructor(message: string) {
    super(message, 401);
  }
}
