import { Resolver, Query } from '@nestjs/graphql';
import { Vehicle } from './vehicle.entity';
import { VehiclesService } from './vehicles.service';

@Resolver(of => Vehicle)
export class VehiclesResolver {
	constructor(private vehicleService: VehiclesService) {}

	@Query(returns => [Vehicle])
	vehicles(): Promise<Vehicle[]> {
		return this.vehicleService.findAll();
	}
}
