import * as grpc from '@grpc/grpc-js';
import { createGrpcServer } from './app';

const PORT = process.env.PORT || '3001';
const address = `0.0.0.0:${PORT}`;

const server = createGrpcServer();

server.bindAsync(address, grpc.ServerCredentials.createInsecure(), (error) => {
  if (error) {
    console.error('Failed to start gRPC auth service:', error.message);
    process.exit(1);
  }

  console.log(`Auth gRPC service running on ${address}`);
});
