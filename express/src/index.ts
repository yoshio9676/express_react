import express from 'express';
import myLogger from './middleware/logger';
const app = express();
const port = 3000;

app.use(myLogger);

// welcome
app.get('/', (req, res) => res.send('Hello, Express!!'));

// posts routing
app.use('/post', require('./routes/post'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));