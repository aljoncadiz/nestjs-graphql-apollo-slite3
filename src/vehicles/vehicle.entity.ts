import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Vehicle {

	@Field(type => Int)
	id: number;

	@Field()
	vin: string;

	@Field()
	make: string;

	@Field()
	year: string;

	@Field()
	model: string;
}
