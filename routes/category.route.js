const express = require("express");
const getCategories = require("../controller/category.controller");
const router = express.Router();

router.get("/", getCategories); // routes mengambil data seluruh category

module.exports = router;
