import HttpException from "../../util/http-Exception";

export interface IResponse<T> {
	message?: string;
	data?: T;
	error?: string;
	statusCode?: number;
}

export default function handleResponse<T>(data: IResponse<T>) {
	if (data.data) {
		return {
			message: data.message,
			data: data.data,
		};
	}
	throw new HttpException(data.statusCode, data.error);
}
