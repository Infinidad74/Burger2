const connection = require("./connection");

var orm = {
    all: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (error, result) {
            if (error) throw error;

            cb(result);
        })
    },
    create: function (table, cols, vals, cb) {
        // INSERT INTO burgers (burger_name, devoured) VALUES ("Cheese Burger", False);
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ")";

        connection.query(queryString, vals, function (err, result) {
            if(err) throw err;

            cb(result)
        })
    }   
};

function printQuestionMarks(num) {
    var arr=[];
    for (let i = 0; i < num.length; i++) {
        arr.push(" ?");
    }
    return arr.toString();
};


module.exports = orm;