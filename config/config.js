module.exports = {
  "development": {
    "username": process.env.JAWSDB_USERNAME,
    "password": process.env.JAWSDB_PASS,
    "database": process.env.JAWSDB_DATABASE,
    "host": process.env.JAWSDB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "JAWSDB_URL",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
