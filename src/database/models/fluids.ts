import mongoose from 'mongoose';

const fluidSchema = new mongoose.Schema({
    id: String,
    name: String,
    tier: Number
});

export default mongoose.model('fluid', fluidSchema);