import rateLimit from 'express-rate-limit';

export const authRateLimiter = rateLimit({
	windowMs: 60 * 1000,
	max: 10,
	standardHeaders: true,
	legacyHeaders: false,
	message: {
		message: 'Demasiadas solicitudes de autenticación. Intenta de nuevo en 1 minuto.',
	},
});