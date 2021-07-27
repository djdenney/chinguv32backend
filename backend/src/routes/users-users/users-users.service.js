const knex = require("../../database/connection");

const table = "users-users";

function list() {
    return knex(table)
        .select("*");
}

function find(userUserId) {
    return knex(table)
        .select("*")
        .where({
            id: userUserId
        });
}

function create(data) {
    return knex(table)
        .insert(data, "*");
}

function update(data) {
    return knex(table)
        .select("*")
        .where({ id: data.id })
        .update({
            user1: data.user1,
            user2: data.user2,
            skill: data.skill,
            connected: data.connected,
            blocked: data.blocked,
        });
}

function remove(userUserId) {
    return knex(table)
        .where({ id: userUserId })
        .del();
}

module.exports = {
    list,
    find,
    create,
    update,
    remove,
}