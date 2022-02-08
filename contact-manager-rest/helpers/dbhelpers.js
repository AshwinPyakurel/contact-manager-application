const { default: knex } = require("knex");

function getAll(tableName){
    console.log(tableName);
    // return knex(tableName).select('*').then( ()=>{        
    //     console.log(users.id);
    //     console.log(users.username);
    //     console.log(users.id);
    // });
}

module.exports = getAll();