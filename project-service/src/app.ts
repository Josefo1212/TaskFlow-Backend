import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import dotenv from 'dotenv';
import { projectController } from './controller/project.controller';

dotenv.config();

interface LoadedProjectPackage {
	project: {
		ProjectService: {
			service: grpc.ServiceDefinition<grpc.UntypedServiceImplementation>;
		};
	};
}

export function createGrpcServer(): grpc.Server {
	const protoPath = path.resolve(__dirname, '../proto/project.proto');

	const packageDefinition = protoLoader.loadSync(protoPath, {
		keepCase: true,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true,
	});

	const loadedProto = grpc.loadPackageDefinition(packageDefinition) as unknown as LoadedProjectPackage;

	const server = new grpc.Server();
	server.addService(loadedProto.project.ProjectService.service, projectController);

	return server;
}
