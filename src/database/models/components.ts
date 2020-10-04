import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    ingredients: Object,
    generate: Number,
    tier: Number
});

const componentSchema = new mongoose.Schema({
    name: String,
    type: String,
    constructor: [recipeSchema],
    assembler: [recipeSchema],
});


export default mongoose.model('component', componentSchema);