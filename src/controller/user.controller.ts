import { Post, Route, FormField, UploadedFiles, UploadedFile, Controller, Get, Tags, Path } from "tsoa";
import { NOT_FOUND } from "../constant/error-code";
import { HttpStatus } from "../constant/status-code";
import { UserDto } from "../dto/response";
import handleResponse, { IResponse } from "../dto/response/response.dto";
import { User } from "../entity/user.entity";
import { userProfile } from "../mapping";
import { mapper } from "../mapping/mapper";
import { UserService } from "../service";
import { UUID } from "../util/uuid-type";

@Route("users")
@Tags("Users")
export class UserController extends Controller {
	private readonly userService = new UserService();
	private readonly userMapper = userProfile(mapper);

	@Get("{userId}")
	public async getUser(@Path() userId: UUID): Promise<IResponse<UserDto>> {
		const user = await this.userService.findById(userId);

		if (!user) {
			return handleResponse({
				statusCode: HttpStatus.NOT_FOUND,
				error: NOT_FOUND,
			});
		}

		const respUser = mapper.map(user, User, UserDto);

		return handleResponse<UserDto>({
			message: "data user",
			data: respUser,
		});
	}

	@Post("uploadFile")
	public async uploadFile(
		@FormField() title: string,
		@FormField() description: string,
		@UploadedFiles("files") files: Express.Multer.File
	): Promise<void> {
		console.log(files);
	}
}
