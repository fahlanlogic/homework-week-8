const express = require("express");
const category = require("../controller/category.controller");
const router = express.Router();

router.get("/", category.getCategories); // routes mengambil data seluruh category
router.get("/:id", category.getCategoriesById); // routes mengambil data seluruh category

module.exports = router;
