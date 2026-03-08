"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const app = (0, app_1.createApp)();
const PORT = process.env.PORT || '3003';
app.listen(PORT, () => {
    console.log(`Gateway API listening on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map