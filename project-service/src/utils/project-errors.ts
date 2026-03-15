export class ProjectServiceError extends Error {
	constructor(
		message: string,
		public readonly statusCode: number,
	) {
		super(message);
		this.name = 'ProjectServiceError';
	}
}
