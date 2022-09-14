import { myDataSource } from "../config/database";
import { User } from "../entity/user.entity";

export class UserService {
	private readonly userRepository = myDataSource.getRepository(User);

	async findById(id: string) {
		const user = await this.userRepository.findOneBy({ id: id });
		return user;
	}
}
