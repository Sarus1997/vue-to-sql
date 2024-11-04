import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { createConnection } from 'mysql';

const app = express();
const port = 3000;

app.use(cors());
app.use(json());

// เชื่อมต่อกับฐานข้อมูล MySQL
const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'tableDB'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
});

// สร้าง API endpoint สำหรับดึงข้อมูล
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
