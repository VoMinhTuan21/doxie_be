import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm";
import { AutoMap } from "@automapper/classes";

@Entity("user")
export class User {
	@PrimaryGeneratedColumn()
	@Generated("uuid")
	@AutoMap()
	id: string;

	@Column({
		name: "first_name",
		type: "varchar",
		length: 100,
	})
	@AutoMap()
	firstName: string;

	@Column({
		name: "last_name",
		type: "varchar",
		length: 100,
	})
	@AutoMap()
	lastName: string;
}
