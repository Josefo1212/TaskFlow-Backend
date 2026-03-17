import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import dotenv from 'dotenv';
import { tagController } from './controller/tag.controller';

dotenv.config();

interface LoadedTagPackage {
	tag: {
		TagService: {
			service: grpc.ServiceDefinition<grpc.UntypedServiceImplementation>;
		};
	};
}

export function createGrpcServer(): grpc.Server {
	const protoPath = path.resolve(__dirname, '../proto/tag.proto');

	const packageDefinition = protoLoader.loadSync(protoPath, {
		keepCase: true,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true,
	});

	const loadedProto = grpc.loadPackageDefinition(packageDefinition) as unknown as LoadedTagPackage;

	const server = new grpc.Server();
	server.addService(loadedProto.tag.TagService.service, tagController);

	return server;
}
