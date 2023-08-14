const sqlite3 = require('sqlite3').verbose();


const readDB = (dbPath) => {
    const rows = []

    // open the database
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Connected to the chinook database.');
      });
      
      db.serialize(() => {
        db.each(`SELECT * FROM books`, (err, row) => {
          if (err) {
            console.error(err.message);
          }
          // console.log(row);
        //   console.log(row.txt)
          rows.push(row)
          console.log(row.genre)
        });
      });
      
      db.close((err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Close the database connection.');
      });

      return rows
}

const sqlite = require("better-sqlite3");

const readDbSync = (dbPath) => {
    const db = new sqlite(dbPath);

    const rows = db.prepare("SELECT * FROM books").all();
    console.log(rows.length);    
    return rows    
}

module.exports = {readDbSync, readDB}