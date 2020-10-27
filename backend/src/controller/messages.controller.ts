import { RequestHandler } from 'express';
import messageModel from '../models/message.model';

// GET
export const getMessages: RequestHandler = async (req, res) => {
    try {
        const getMessages = await messageModel.find();
        if (!getMessages)
        return res.status(404).json('Messages not found');
        return res.status(200).json(getMessages);
    } catch (err){
        console.log(err);
        return res.status(500).json(err);
    }
};

// POST
export const sendMessage: RequestHandler = async (req, res) => {
    try {
    const message = new messageModel(req.body);
    const saveMessage = await message.save();
    return res.status(201).json('New message created: ' + saveMessage.message);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
// DELETE

// UPDATE