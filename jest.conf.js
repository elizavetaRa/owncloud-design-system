const path = require("path")

module.exports = {
  rootDir: path.resolve(__dirname, "./"),
  modulePaths: ["<rootDir>"],
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  modulePathIgnorePatterns: ["<rootDir>/docs/utils/statusLabels.spec.js"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
    "^.+\\.svg$": "jest-svg-transformer",
  },
  setupFiles: ["./jest.setup.js", "./jest.overrides.js"],
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.{js,vue}",
    "<rootDir>/src/utils/**/*.{js,vue}",
    "<rootDir>/src/system.js",
    "<rootDir>/docs/**/*.{js,vue}",
    "!<rootDir>/node_modules/**",
    "!<rootDir>/docs/components/status/*",
  ],
}
