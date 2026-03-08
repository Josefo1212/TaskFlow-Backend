module.exports = {
  apps: [
    {
      name: "auth-service",
      script: "dist/index.js",
      cwd: "./auth-service",
      env: {
        PORT: 3001,
        NODE_ENV: "development"
      }
    },
    {
      name: "gateway-api",
      script: "dist/index.js",
      cwd: "./gateway-api",
      env: {
        PORT: 3003,
        NODE_ENV: "development"
      }
    }
  ]
};
