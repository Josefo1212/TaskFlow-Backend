import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import dotenv from 'dotenv';
import { userController } from './controller/user.controller';

dotenv.config();

interface LoadedUserPackage {
	user: {
		UserService: {
			service: grpc.ServiceDefinition<grpc.UntypedServiceImplementation>;
		};
	};
}

export function createGrpcServer(): grpc.Server {
	const protoPath = path.resolve(__dirname, '../proto/user.proto');

	const packageDefinition = protoLoader.loadSync(protoPath, {
		keepCase: true,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true,
	});

	const loadedProto = grpc.loadPackageDefinition(packageDefinition) as unknown as LoadedUserPackage;

	const server = new grpc.Server();
	server.addService(loadedProto.user.UserService.service, userController);

	return server;
}
