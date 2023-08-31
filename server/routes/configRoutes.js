const indexR = require("./index");
const guestsR = require("./guests");
const mealsR = require("./meals")
const eventsR = require("./events")


exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/guests",guestsR);
  app.use("/meals", mealsR);
  app.use("/events", eventsR);

}