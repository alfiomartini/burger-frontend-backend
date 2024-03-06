export default {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-svg-transformer",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
