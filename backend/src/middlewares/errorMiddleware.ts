import { NextFunction, Response, Request } from "express"
import ErrorHandler from "../errors/ErrorHandler"

interface inError extends Error {
  statusCode: number
}

export default (
  error: inError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ErrorHandler) {
    res.json({ statusCode: error.statusCode, message: error.message })
  } else {
    res.json({ statusCode: 500, message: "server(I guess) error" })
  }
}
