module.exports = {
  apps : [
    {
      name: "app",
      script: "./dist/index.js",
      watch: true,
      env: {
        "NODE_ENV": "development",
        "APP_ENV": "development"
      },
      env_testing: {
        "NODE_ENV": "production",
        "APP_ENV": "testing"
      },
      env_pre: {
        "NODE_ENV": "production",
        "APP_ENV": "pre"
      },
      env_production: {
        "NODE_ENV": "production",
        "APP_ENV": "production"
      }
    }
  ]
}
