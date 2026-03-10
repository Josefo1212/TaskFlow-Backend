import * as grpc from '@grpc/grpc-js';

function unimplemented(callback: grpc.sendUnaryData<unknown>, methodName: string): void {
	callback({
		code: grpc.status.UNIMPLEMENTED,
		message: `${methodName} is not implemented yet`,
		name: 'UnimplementedMethod',
	} as grpc.ServiceError);
}

type GenericUnaryCall = grpc.ServerUnaryCall<unknown, unknown>;
type GenericUnaryCallback = grpc.sendUnaryData<unknown>;

export const userController: grpc.UntypedServiceImplementation = {
	GetProfile: (_call: GenericUnaryCall, callback: GenericUnaryCallback) => {
		unimplemented(callback, 'GetProfile');
	},
	UpdateProfile: (_call: GenericUnaryCall, callback: GenericUnaryCallback) => {
		unimplemented(callback, 'UpdateProfile');
	},
	ListUsers: (_call: GenericUnaryCall, callback: GenericUnaryCallback) => {
		unimplemented(callback, 'ListUsers');
	},
	SearchUsers: (_call: GenericUnaryCall, callback: GenericUnaryCallback) => {
		unimplemented(callback, 'SearchUsers');
	},
	GetUsersByIds: (_call: GenericUnaryCall, callback: GenericUnaryCallback) => {
		unimplemented(callback, 'GetUsersByIds');
	},
	CheckUserExists: (_call: GenericUnaryCall, callback: GenericUnaryCallback) => {
		unimplemented(callback, 'CheckUserExists');
	},
	GetBasicInfo: (_call: GenericUnaryCall, callback: GenericUnaryCallback) => {
		unimplemented(callback, 'GetBasicInfo');
	},
};
