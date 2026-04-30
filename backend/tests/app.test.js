const request = require('supertest');
const app = require('../src/index');

// Mock the DB module so tests don't need a real MySQL connection
jest.mock('../src/db', () => ({
  pool: {
    execute: jest.fn().mockResolvedValue([[
      { id: 1, title: 'Test task', done: false }
    ]]),
  },
  initDB: jest.fn().mockResolvedValue(true),
}));

describe('API Endpoints', () => {
  test('GET / returns welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain('running');
  });

  test('GET /health returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /metrics returns prometheus metrics', async () => {
    const res = await request(app).get('/metrics');
    expect(res.statusCode).toBe(200);
  });

  test('GET /tasks returns array', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});