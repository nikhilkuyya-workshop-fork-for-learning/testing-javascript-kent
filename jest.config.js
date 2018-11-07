module.exports = {
  testEnvironment: 'jsdom',
  verbose: true,
  transformIgnorePatterns: ['/node_modules/', '/dist/', '/.vscode/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
}
