import { createMap, MappingProfile } from "@automapper/core";
import { UserDto } from "../dto/response";
import { User } from "../entity/user.entity";

export const userProfile: MappingProfile = (mapper) => {
	createMap(mapper, User, UserDto);
};
