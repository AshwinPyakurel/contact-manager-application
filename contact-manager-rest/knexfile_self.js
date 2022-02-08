const config = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : '',
    database : 'db_contact_manager'
  },
  migrations:{
    directory:'./migrations',
  },
  pool:{
    min:2,
    max:10,
  },
});