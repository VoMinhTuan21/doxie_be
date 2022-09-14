import { Response as ExResponse, Request as ExRequest, NextFunction } from "express";

export function notFoundHandler(_req: ExRequest, res: ExResponse) {
	res.status(404).send({
		message: "Not Found",
	});
}
