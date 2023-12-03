import { ApiError } from "./ApiError";

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}
