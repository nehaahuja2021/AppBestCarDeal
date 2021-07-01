const sqlite3 = require('sqlite3').verbose();

// BACKEND FILE FOR MY DATABASES QUERIES
const SendingCarsFromDb = (req, res, userinput) => {
   console.log("input from fe:", userinput);

   let body = userinput.body;
   let budget = userinput.budget;

   let dataForTheUser = { cars: [] }

   let db = new sqlite3.Database('./db/db.cars');
   // console.log("Request at backend:", data);

   let sql = ``;

   if (body !== '') {
      if (budget !== '') {
         sql = `SELECT * FROM newcarsdata where make = '` + body + `' AND price <= ` + budget + ` ORDER BY price DESC `;
      }
      else {
         sql = `SELECT * FROM newcarsdata where make = '` + body + `' ORDER BY price DESC`;
      }
   }
   else { // Body is NaN.
      if (budget !== '') {
         sql = `SELECT * FROM newcarsdata where price <= ` + budget + ` ORDER BY price DESC`;
      }
      else {
         sql = `SELECT * FROM newcarsdata ORDER BY price DESC`;
      }
   }
   console.log(sql);

   db.all(sql, [], (err, rows) => {
      if (err) {
         throw err;
      }
      rows.forEach((row) => {
         console.log(row);
         dataForTheUser.cars.push(row)
      });
      console.log(dataForTheUser)
      res.send(dataForTheUser)
   });

   // close the database connection
   db.close();
}


exports.SendingCarsFromDb = SendingCarsFromDb;
