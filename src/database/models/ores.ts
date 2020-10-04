import mongoose from 'mongoose';

const oreSchema = new mongoose.Schema({
    id: String,
    name: String,
    tier: Number
});

export default mongoose.model('ore', oreSchema);