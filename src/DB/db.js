const {Client} = require("pg");

const connection = new Client({
    user: "root",
    password: "root",
    database: "my-gameplay",
    port: 5432,
    host: "localhost",
});

connection.connect();

exports.Query = async (sql, values) => {
    const rows =  await connection.query(sql, values);
    return rows;
};
