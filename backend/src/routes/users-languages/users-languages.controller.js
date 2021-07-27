const service = require("./users-languages.service");
const asyncErrorBoundary = require("../../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const response = await service.list();
    return res.json({
        data: response,
    })
}

async function find(req, res, next) {
    const response = await service.find(req.params.user-language_id);
    if (response[0]) {
        return res.json({ 
            data: response[0],
        });
    }
    next({
        status: 404,
        message: `users-language ${req.params.user-language_id} not found`,
    })
}

async function create(req, res, next) {
    const response = await service.create(req.body.data);
    return res.status(201).json({
        data: response[0],
    })
}

async function update(req, res, next) {
    const response = await service.update(req.body.data);
    return res.json({
        data: response[0],
    })
}

async function remove(req, res, next) {
    const response = await service.remove(req.params.user-language_id);
    return res.json({
        data: response[0],
    })
}

function hasData(req, res, next) {
    if (req.body.data) {
        return next();
    }
    next({
        status: 400,
        message: "request body must have data property",
    })
}

function hasUser(req, res, next) {
    if (req.body.data.user) {
        return next();
    }
    next({
        status: 400,
        message: "request body data must have user property",
    })
}

function hasLanguage(req, res, next) {
    if (req.body.data.language) {
        return next();
    }
    next({
        status: 400,
        message: "request body data must have language property",
    })
}

function hasFluency(req, res, next) {
    if (req.body.data.fluency) {
        return next();
    }
    next({
        status: 400,
        message: "request body data must have fluency property",
    })
}

module.exports = {
    list: [
        asyncErrorBoundary(list),
    ],
    find: [
        asyncErrorBoundary(find),
    ],
    create: [
        hasData,
        hasUser,
        hasLanguage,
        hasFluency,
        asyncErrorBoundary(create),
    ],
    update: [
        asyncErrorBoundary(update),
    ],
    remove: [
        asyncErrorBoundary(remove),
    ],
}