
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const PORT = 3001;
const agendaRouter = require('./routes/agenda');

app.use('/v1/agenda', agendaRouter);

app.listen(PORT, () => {
    console.log(`Clasico console log para ver el puerto del servidor ${PORT}`);
}); 