jest.mock('axios', () => ({
    __esModule: true, // This enables default export compatibility
    default: jest.fn(() => Promise.resolve({ data: {} })),
  }));
  