exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary().unique().nonNullable();
        table.string("name").unique().nonNullable();
        table.text("bio");
        table.boolean("active").nonNullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users");
};
