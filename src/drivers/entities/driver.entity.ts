import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Driver {

	@PrimaryGeneratedColumn()
	@Field(type => Int)
	id: number

	@Column()
	@Field()
	name: string
	
	@OneToMany(() => Vehicle, Vehicle => Vehicle.driver)
	@Field(type => [Vehicle], {nullable: true})
	vehicles?: Vehicle[]
}
