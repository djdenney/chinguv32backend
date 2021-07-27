exports.up = function (knex) {
    return knex.schema.createTable("skills", (table) => {
        table.increments("id").primary();
        table.string("name").unique();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("skills");
};
