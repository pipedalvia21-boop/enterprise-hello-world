const express = require('express');
const app = express();

app.use(express.json());

// ── Hello World endpoint ──
app.get('/', (req, res) => {
  res.json({ message: 'Hello World from QPC Enterprise!', status: 'ok' });
});

// ── Health check endpoint ──
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

module.exports = app;
