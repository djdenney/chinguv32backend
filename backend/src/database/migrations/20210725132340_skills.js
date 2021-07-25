exports.up = function (knex) {
    return knex.schema.createTable("skills", (table) => {
        table.increments("id").primary().unique().nonNullable();
        table.string("name").unique().nonNullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("skills");
};
