import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
	GraphQLModule.forRoot<ApolloDriverConfig>({
		driver: ApolloDriver,
		autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
	}),
    VehiclesModule,
  ],
})
export class AppModule {}
