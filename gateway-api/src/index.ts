import { createApp } from './app';
import { env } from './config/env';

const app = createApp();

app.listen(env.PORT, () => {
	console.log(`Gateway API listening on http://localhost:${env.PORT}`);
});
