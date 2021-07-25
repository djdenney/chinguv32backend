exports.up = function (knex) {
    return knex.schema.createTable("languages", (table) => {
        table.increments("id").primary().unique().nonNullable();
        table.string("name").unique().nonNullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("languages");
};
