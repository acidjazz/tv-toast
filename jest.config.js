module.exports = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^vue$': 'vue/dist/vue.common.js'
    },
    moduleFileExtensions: [
        'js',
        'vue',
        'json'
    ],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest'
    },
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/*.vue',
    ]
}
