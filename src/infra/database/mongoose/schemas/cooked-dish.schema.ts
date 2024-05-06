import { Schema } from 'mongoose';

const CookedDishSchema = new Schema({
  name: String,
  protein_ratio: Number,
  fat_ratio: Number,
  carbohydrate_ratio: Number,
  fiber_ratio: Number,
  kcal_per_gram: Number,
});
