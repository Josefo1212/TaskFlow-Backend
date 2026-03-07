import * as grpc from '@grpc/grpc-js';
import { createGrpcServer } from './app';
import { connectRedis } from './config/redis';

const PORT = process.env.PORT || '3001';
const address = `localhost:${PORT}`;

async function bootstrap() {
  try {
    await connectRedis();

    const server = createGrpcServer();
    server.bindAsync(address, grpc.ServerCredentials.createInsecure(), (error) => {
      if (error) {
        console.error('Failed to start gRPC auth service:', error.message);
        process.exit(1);
      }

      console.log(`Auth gRPC service running on ${address}`);
    });
  } catch (error) {
    console.error('Failed to initialize auth service:', error);
    process.exit(1);
  }
}

void bootstrap();
