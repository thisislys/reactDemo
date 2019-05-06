const mysql = require("mysql");
const sqlConfig = require("./config")
const connection = mysql.createConnection(sqlConfig);

connection.connect();

module.exports.login = function(option, callback) {
    let $sql = 'select * from user where username=? and password=?';
    connection.query($sql, [option.username, option.password], function(error, results) {
        if (error) {
            callback(error);
        } else {
            callback(null, results)
        }
    });
}

module.exports.saveToken = function(username, token, callback) {
    let $sql = 'UPDATE user SET `token`="'+token+'" WHERE  `username`="'+username+'" ';
    connection.query($sql, function(error, results) {
        if (error) {
            callback(error);
        } else {
            callback(null, results)
        }
    });
}