// This file will be preloaded before running tests
// Set up any global test configurations here

// Mock environment variables for testing
process.env.NODE_ENV = process.env.NODE_ENV || 'test';
process.env.BUN_ENV = process.env.BUN_ENV || 'test';

console.log('🧪 Test environment setup complete');