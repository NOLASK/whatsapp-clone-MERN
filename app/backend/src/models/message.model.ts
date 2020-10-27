import {Schema, model, Document} from 'mongoose';

interface IMessage extends Document {
    message: String,
    name: String,
    recieved: Boolean,
    CreatedAt: String,
    UpdatedAt: String,
    _id: String
}

const message = new Schema ({
    message: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    received: Boolean
}, {
    timestamps: true,
    versionKey: false
});

export default model<IMessage>('messages', message); 
