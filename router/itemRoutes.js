const express = require("express");
const itemcontrollers = require("../controllers/itemsControllers");
const router = express();

router.get("/", itemcontrollers.item_index);
router.get("/:id", itemcontrollers.get_item);
router.post("/", itemcontrollers.post_item);
router.put("/:id", itemcontrollers.put_item);
router.delete("/:id", itemcontrollers.delete_item);

module.exports = router;
