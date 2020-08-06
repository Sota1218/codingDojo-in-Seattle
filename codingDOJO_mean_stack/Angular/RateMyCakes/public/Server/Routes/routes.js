const controller = require("../Controllers/controllers");
const path = require("path");
module.exports = app => {
  app.get("/api/cakes", controller.allCakes);
  app.get("/api/cakes/:id", controller.oneCake);
  app.post("/api/cakes", controller.createCake);
  app.put("/api/cakes/:id", controller.updateCake);
  app.delete("/api/cakes/:id", controller.deleteCake);
  app.post("/api/comments/:id", controller.createComment);
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};
