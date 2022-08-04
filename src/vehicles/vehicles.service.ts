import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleInput } from './dto/create-vehicle-input';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
	constructor(@InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>){}
	
	async findAll(): Promise<Vehicle[]> {
		return this.vehicleRepository.find();
	}

	async createVehicle(createVehicleRequest: CreateVehicleInput): Promise<Vehicle> {
		const newVehicle = this.vehicleRepository.create(createVehicleRequest);
		return this.vehicleRepository.save(newVehicle);
	}

	async findOne(id: number): Promise<Vehicle> {
		return this.vehicleRepository.findOneOrFail({where: {id: id}});
	}
}
