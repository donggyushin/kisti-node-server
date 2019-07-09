import express from 'express';
import api from './routes'
const app = express();

// for parsing application/json
app.use(express.json())
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use('/api', api)

export default app;