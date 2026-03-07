import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ReflectionService } from '@grpc/reflection';
import dotenv from 'dotenv';
import { authController } from './controller/auth.controller';

dotenv.config();

interface LoadedAuthPackage {
	auth: {
		AuthService: {
			service: grpc.ServiceDefinition<grpc.UntypedServiceImplementation>;
		};
	};
}

export function createGrpcServer(): grpc.Server {
	const protoPath = path.resolve(__dirname, '../proto/auth.proto');

	const packageDefinition = protoLoader.loadSync(protoPath, {
		keepCase: true,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true,
	});

	const loadedProto = grpc.loadPackageDefinition(packageDefinition) as unknown as LoadedAuthPackage;

	const server = new grpc.Server();
	server.addService(loadedProto.auth.AuthService.service, authController);
	new ReflectionService(packageDefinition).addToServer(server);

	return server;
}