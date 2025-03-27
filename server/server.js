import express from 'express';
import cors from 'cors';

const PORT = 5080;
const app = express();
const corsOptions = {
    origin: ['http://localhost:5173'],
}

app.use(cors(corsOptions));

app.get('/', (_req, res) => {
    res.status(200).send({ 'fruits': ['apple', 'orange', 'banana'] });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
