export default {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        './src/**/*.ts'
    ],
    coverageDirectory: '<rootDir>/test/coverage',
    testEnvironment: 'node',
    testMatch: ['**/*.test.[tj]s'],
    preset: 'ts-jest'
};