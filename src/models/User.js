import {Schema, model} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const User = new Schema({
    
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true, 
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    repos: {
        type: Number,
    }
}, {
    versionKey: false,
    timestamps: true
});

User.plugin(mongoosePaginate);
export default model('User', User);