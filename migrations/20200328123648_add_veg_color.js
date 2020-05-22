
exports.up = function (knex) {
    return knex.schema.table('vegetables', tbl => {
        tbl.string('color', 80);
    })
};

exports.down = function (knex) {
    return knex.schema.table('vegetables', tbl => {
        tbl.dropColumn('color');
    })
};
