import express from 'express';
/* import cors from 'cors'; */
const app = express();
const PORT = 5080;

app.get('/api', (_req, res) => {
    res.json({ "fruits": ['apple', 'orange', 'banana'] });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});