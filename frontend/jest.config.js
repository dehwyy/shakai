/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};