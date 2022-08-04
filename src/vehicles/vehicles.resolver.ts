import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateVehicleInput } from './dto/create-vehicle-input';
import { Vehicle } from './vehicle.entity';
import { VehiclesService } from './vehicles.service';

@Resolver(of => Vehicle)
export class VehiclesResolver {
	constructor(private vehicleService: VehiclesService) {}

	@Query(returns => [Vehicle]) //decorator Query should be from @nestjs/graphql
	vehicles(): Promise<Vehicle[]> {
		return this.vehicleService.findAll();
	}

	@Mutation(returns => Vehicle)
	createVehicle(@Args('createVehicleInput') createVehicleInput: CreateVehicleInput): Promise<Vehicle> {
		return this.vehicleService.createVehicle(createVehicleInput);
	}
}
