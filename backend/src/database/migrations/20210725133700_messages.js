exports.up = function (knex) {
    return knex.schema.createTable("messages", (table) => {
        table.increments("id").unique().nonNullable();
        table.text("text");
        table.integer("sender");
        table
            .foreign("sender")
            .references("id")
            .inTable("users")
            .onDelete("cascade");
        table.ingeger("recipient");
        table
            .foreign("recipient")
            .references("id")
            .inTable("users")
            .onDelete("cascade");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("messages");
};
