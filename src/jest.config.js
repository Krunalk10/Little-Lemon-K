
jest.mock('axios', () => {
    return {
      __esModule: true,
      default: jest.fn(() => Promise.resolve({ data: {} }))
    };
  });
  
module.exports = {
    transformIgnorePatterns: [
      "node_modules/(?!(axios)/)"  
    ],
  };
module.exports = {
    transform: {
      '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    },
  };
  