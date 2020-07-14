module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json',
      diagnostics: false
    }
  },
  roots: ['<rootDir>'],
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
    // '^.+\\.(ts|tsx)$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules', '__snapshots__'],
  testMatch: [
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
    '**/__tests__/**/(*.)+(spec|test).+(ts|tsx|js)'
    // '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/__snapshots__/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  }
};
// module.exports = {
//   preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel'
// };
