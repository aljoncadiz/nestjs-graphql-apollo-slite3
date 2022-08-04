import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Vehicle {

	@PrimaryGeneratedColumn()
	@Field(type => Int)
	id: number;

	@Column()
	@Field()
	vin: string;

	@Column()
	@Field()
	make: string;

	@Column()
	@Field()
	year: string;

	@Column()
	@Field()
	model: string;

	@Column({nullable: true})
	@Field({nullable: true})
	description?: string;
}
