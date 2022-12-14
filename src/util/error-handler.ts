import { Response as ExResponse, Request as ExRequest, NextFunction } from "express";
import { ValidateError } from "tsoa";
import HttpException from "./http-Exception";

export function errorHandler(err: unknown, req: ExRequest, res: ExResponse, next: NextFunction): ExResponse | void {
	if (err instanceof ValidateError) {
		console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
		return res.status(422).json({
			message: "Validation Failed",
			details: err?.fields,
		});
	}
	if (err instanceof HttpException) {
		return res.status(err.statusCode).json({
			statusCode: err.statusCode,
			error: err.error,
		});
	}

	if (err instanceof Error) {
		console.log(err);
		return res.status(500).json({
			message: "Internal Server Error",
		});
	}

	next();
}
