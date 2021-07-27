exports.up = function (knex) {
    return knex.schema.createTable("users-users", (table) => {
        table.increments("id").primary();
        table.integer("user1");
        table
            .foreign("user1")
            .references("id")
            .inTable("users")
            .onDelete("cascade");
        table.integer("user2");
        table
            .foreign("user2")
            .references("id")
            .inTable("users")
            .onDelete("cascade");
        table.integer("skill");
        table
            .foreign("skill")
            .references("id")
            .inTable("skills")
            .onDelete("cascade");
        table.boolean("connected");
        table.boolean("blocked");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users-users");
};
