module.exports = {
    testEnvironment: 'node',
    testMatch: [
        '**/__tests__/**/*.js',
        '**/?(*.)+(spec|test).js',
    ],
    collectCoverageFrom: [
        'controllers/**/*.js',
        'middleware/**/*.js',
        'routes/**/*.js',
    ],
    coverageDirectory: 'coverage',
    // coverageThreshold: {
    //     global: {
    //         branches: 70,
    //         functions: 70,
    //         lines: 70,
    //         statements: 70,
    //     },
    // },
    verbose: true,
    testTimeout: 10000,

    projects: [
        {
            displayName: "integration",
            testMatch: ["**/__tests__/__integration__/**/*.test.js"],
            testEnvironment: 'node',
        },
        {
            displayName: "unit",
            testMatch: ["**/__tests__/**/*.test.js"],
            testEnvironment: 'node',
        }
    ]
};
