const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const usersRouter = require("./routes/users/users.router")
const skillsRouter = require("./routes/skills/skills.router")
const languagesRouter = require("./routes/languages/languages.router")
const resourcesRouter = require("./routes/resources/resources.router")
const messagesRouter = require("./routes/messages/messages.router")
const invitesRouter = require("./routes/invites/invites.router")
const timeslotsRouter = require("./routes/timeslots/timeslots.router")
const usersSkillsRouter = require("./routes/users-skills/users-skills.router")
const usersLanguagesRouter = require("./routes/users-languages/users-languages.router")
const usersTimeslotsRouter = require("./routes/users-timeslots/users-timeslots.router")
const usersUsersRouter = require("./routes/users-users/users-users.router")
const usersResourcesRouter = require("./routes/users-resources/users-resources.router")

const app = express();

app.use(cors());
app.use(express.json());

app.options("*", cors());
app.use("/users", usersRouter)
app.use("/skills", skillsRouter)
app.use("/languages", languagesRouter)
app.use("/resources", resourcesRouter)
app.use("/messages", messagesRouter)
app.use("/invites", invitesRouter)
app.use("/timeslots", timeslotsRouter)
app.use("/users-skills", usersSkillsRouter)
app.use("/users-languages", usersLanguagesRouter)
app.use("/users-timeslots", usersTimeslotsRouter)
app.use("/users-users", usersUsersRouter)
app.use("/users-resources", usersResourcesRouter)

app.use(notFound);
app.use(errorHandler);

module.exports = app;
