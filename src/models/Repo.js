import {Schema, model} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Repo = new Schema({

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
    stack: {
    type: String,
    required: true,
    trim: true
    }
}, 
{
    versionKey: false,
    timestamps: true
});

Repo.plugin(mongoosePaginate);
export default model('Repo', Repo);