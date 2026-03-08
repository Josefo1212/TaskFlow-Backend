import { createApp } from './app';

const app = createApp();
const PORT = process.env.PORT || '3003';

app.listen(PORT, () => {
	console.log(`Gateway API listening on http://localhost:${PORT}`);
});
