import * as grpc from '@grpc/grpc-js';
import { createGrpcServer } from './app';

const PORT = process.env.PORT || '3005';
const address = `0.0.0.0:${PORT}`;

const server = createGrpcServer();

server.bindAsync(address, grpc.ServerCredentials.createInsecure(), (error) => {
	if (error) {
		console.error('Failed to start gRPC tag service:', error.message);
		process.exit(1);
	}

	console.log(`Tag gRPC service running on ${address}`);
});
