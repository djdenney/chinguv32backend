exports.up = function (knex) {
    return knex.schema.createTable("resources", (table) => {
        table.increments("id").primary().unique().nonNullable();
        table.string("title").nonNullable();
        table.string("type").nonNullable();
        table.text("url");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("resources");
};
