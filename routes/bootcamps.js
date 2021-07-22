const router = require("express").Router();
const bootcampController = require("../controllers/bootcamps");

router
  .route("/")
  .get(bootcampController.getBootcamps)
  .post(bootcampController.createBootcamp);

router
  .route("/:id")
  .get(bootcampController.getBootcamp)
  .put(bootcampController.updateBootcamp)
  .delete(bootcampController.deleteBootcamp);

module.exports = router;
