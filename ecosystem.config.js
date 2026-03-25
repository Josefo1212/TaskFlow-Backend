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
    },
    {
      name: "user-service",
      script: "dist/index.js",
      cwd: "./user-service",
      env: {
        PORT: 3002,
        NODE_ENV: "development"
      }
    },
    {
      name: "task-service",
      script: "dist/index.js",
      cwd: "./task-service",
      env: {
        PORT: 3004,
        NODE_ENV: "development"
      }
    },
    {
      name: "tag-service",
      script: "dist/index.js",
      cwd: "./tag-service",
      env: {
        PORT: 3005,
        NODE_ENV: "development"
      }
    },
    {
      name: "project-service",
      script: "dist/index.js",
      cwd: "./project-service",
      env: {
        PORT: 3006,
        NODE_ENV: "development"
      }
    }
  ]
};
