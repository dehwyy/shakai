class ErrorHandler extends Error {
  constructor(public message: string = "error", public statusCode: number = 400) {
    super(message)
  }
  static BadRequest(message?: string) {
    return new ErrorHandler(message, 400)
  }

  static Unauthorized(message?: string) {
    return new ErrorHandler(message, 401)
  }

  static Forbidden(message?: string) {
    return new ErrorHandler(message, 403)
  }

  static NotFound(message?: string) {
    return new ErrorHandler(message, 404)
  }
  static Conflict(message?: string) {
    return new ErrorHandler(message, 409)
  }
}

export default ErrorHandler
