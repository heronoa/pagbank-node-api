import { ApiError } from "./ApiError";

export class UnprocessableEntityError extends ApiError {
  constructor(message: string) {
    super(message, 422);
  }
}
