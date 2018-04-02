// const pg = require("pg");
const settings = require("./settings"); // settings.json
const connectionID = {
    host: settings.hostname,
    user: settings.user,
    password: settings.password,
    database: settings.database
};

var knex = require('knex')({
    client: 'pg',
    connection: connectionID
});
let firstname = process.argv[2];
let lastname = process.argv[3];
let dob = process.argv[4];
let toBeInserted = [{ first_name: firstname, last_name: lastname, birthdate: dob }]
// console.log(connectionID, "to be inserted: ", toBeInserted);
//   knex.select().from('famous_people').then(function(results) {
//     console.log(results);
//   })

knex('famous_people').insert(toBeInserted).then(function (results) {
    return;
})