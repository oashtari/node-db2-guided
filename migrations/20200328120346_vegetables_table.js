// up describes the changes that will be applies to the database

// the knex being passed in is going to migrations and getting the configuration to pass it in

exports.up = function (knex) {
    // create a table (vegetables)
    // how to create table, arguemtns are ('name', callback function that's an obect that gets access to the table)
    return knex.schema.createTable('vegetables', tbl => { //tbl has methods REMEMBER TO RETURN
        // a primary key, named id, type integer, autoincrement
        tbl.increments();// method that does the above three things as it is so common
        // string method is in knex, it's a varchar
        // unique is a constraint method to make sure it is all unique names
        // index just adds an index
        tbl.string('name', 255)
            .notNullable() // if you want to make sure there is something entered
            .unique()
            .index()

        // boolean just the name argument
        tbl.boolean('favorite'); // can have a .defaultTo(false); not trusted with sqlite

    })
};

// down describes how to undo the changes from the up function
exports.down = function (knex) {
    // remove (drop) a table (vegetables)
    return knex.schema.dropTableIfExists('vegetables') // NEED THIS RETURN
};
