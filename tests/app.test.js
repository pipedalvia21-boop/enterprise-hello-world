const request = require('supertest');
const app = require('../src/app');

describe('QPC Enterprise API', () => {
  test('GET / returns Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello World from QPC Enterprise!');
    expect(res.body.status).toBe('ok');
  });

  test('GET /health returns healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});
