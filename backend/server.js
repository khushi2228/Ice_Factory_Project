const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log("Root route hit");
  res.send('Ice Factory API Running');
});

const customerRoutes = require('./routes/customerRoutes');
app.use('/customers', customerRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});



// Check connection
const db = require('./config/db');

app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await db.query('SHOW TABLES');
    res.json(rows);
  } catch (err) {
    console.error(err); 
    res.status(500).json({ error: 'DB connection failed' });
  }
});
