"use strict";
exports.__esModule = true;
exports.SessionSchema = void 0;
var mongoose = require("mongoose");
var food_schema_1 = require("../../menu/schemas/food.schema");
exports.SessionSchema = new mongoose.Schema({
    user_1: String,
    user_2: String,
    menu_id: String,
    user_1_isComplete: Boolean,
    user_2_isComplete: Boolean,
    user_1_decisions: [food_schema_1.FoodSchema],
    user_2_decisions: [food_schema_1.FoodSchema],
    final: food_schema_1.FoodSchema
});
