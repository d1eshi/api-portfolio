import { Request, Response, NextFunction } from 'express'

export function logErrors(err: Error, req: Request, res: Response, next: NextFunction) {
  next(err)
}

export function errorHanlder(err: Error, req: Request, res: Response, next: NextFunction) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}
