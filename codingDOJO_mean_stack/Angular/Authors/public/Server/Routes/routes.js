const controller = require("../Controllers/controllers");
const path = require("path");
module.exports = app => {
  app.get("/api/Pets", controller.allPets);
  app.get("/api/Pets/:id", controller.onePet);
  app.post("/api/Pets", controller.createPet);
  app.put("/api/Pets/:id", controller.updatePet);
  app.delete("/api/Pets/:id", controller.deletePet);
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};
