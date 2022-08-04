import { Injectable } from '@nestjs/common';
import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehiclesService {
	async findAll(): Promise<Vehicle[]> {
		const vehicle = new Vehicle();

		vehicle.id = 1;
		vehicle.vin = 'ABCDEFGHI123';
		vehicle.make = 'Ford';
		vehicle.model = 'Ranger';
		vehicle.year = '2022';

		return [vehicle];
	}
}
