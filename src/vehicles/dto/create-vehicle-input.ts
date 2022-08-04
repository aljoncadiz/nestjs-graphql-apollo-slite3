import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class CreateVehicleInput {

	@IsAlpha()
	@Field()
	vin: string;

	@Field()
	make: string;

	@Field()
	year: string;

	@Field()
	model: string;

	@Field({nullable: true})
	description?: string;
}