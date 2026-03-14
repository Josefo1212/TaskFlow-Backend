import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import dotenv from 'dotenv';
import { taskController } from './controller/task.controller';

dotenv.config();

interface LoadedTaskPackage {
	task: {
		TaskService: {
			service: grpc.ServiceDefinition<grpc.UntypedServiceImplementation>;
		};
	};
}

export function createGrpcServer(): grpc.Server {
	const protoPath = path.resolve(__dirname, '../proto/task.proto');

	const packageDefinition = protoLoader.loadSync(protoPath, {
		keepCase: true,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true,
	});

	const loadedProto = grpc.loadPackageDefinition(packageDefinition) as unknown as LoadedTaskPackage;

	const server = new grpc.Server();
	server.addService(loadedProto.task.TaskService.service, taskController);

	return server;
}
