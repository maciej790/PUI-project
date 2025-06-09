const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'sql7.freesqldatabase.com',
  user: 'sql7783874',
  password: 'wVD523HCNh',
  database: 'sql7783874',
});

db.connect(err => {
  if (err) {
    console.error('❌ Błąd połączenia z MySQL:', err.message);
  } 
});

module.exports = db;
