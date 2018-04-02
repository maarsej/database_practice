const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});

client.connect((err) => {
    if (err) throw error;  
    let someId = process.argv[2];
    client.query(`select * from famous_people where first_name = $1 OR last_name = $1;`, [someId], (err, results) => {
        if (err) {
            throw error;
        } else {
            results.rows.forEach(row => {
                console.log(row)
                for (column in row) {
                    console.log(column, row[column]);
                }
            })
        }
        client.end();
    });
});