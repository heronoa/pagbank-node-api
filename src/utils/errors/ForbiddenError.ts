import { ApiError } from "./ApiError";

export class ForbiddenError extends ApiError {
  constructor(message: string) {
    super(message, 403);
  }
}
