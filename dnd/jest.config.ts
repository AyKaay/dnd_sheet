import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest', // Enable TypeScript support
  testEnvironment: 'jest-environment-jsdom', // Specify the jsdom environment
};

export default config;
