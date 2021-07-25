exports.up = function (knex) {
    return knex.schema.createTable("invites", (table) => {
        table.increments("id").primary().unique().nonNullable();
        table.string("email").unique().nonNullable();
        table.text("message");
        table.integer("sender");
        table
            .foreign("sender")
            .references("id")
            .inTable("users")
            .onDelete("cascade");
        table.boolean("sent");
        table.boolean("accepted");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("invites");
};
