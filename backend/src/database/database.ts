import mongoose, {ConnectionOptions, Collection} from 'mongoose';
import config from '../config/config';
import Pusher from '../config/pusher';

(async () => {
    try {
    const mongoOptions: ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
    const db = await mongoose.connect(`mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}/${config.DB_NAME}?retryWrites=true&w=majority`, mongoOptions);
    console.log('db connected:', db.connection.name);
    const connectiondb = db.connection.collection('messages');
    const changeStream = connectiondb.watch();
    changeStream.on('change', (change) => {
        if (change.operationType === 'insert') {
                const messageDetails = change.fullDocument;
                Pusher.trigger('messages', 'inserted', {
                    name: messageDetails.name,
                    message: messageDetails.message,
                    createdAt: messageDetails.createdAt,
                    updatedAt: messageDetails.updatedAt,
                    received: messageDetails.received,
                }
            );
        } else {
            console.log('Error triggering Pusher');
        }      
    });
} catch (err) {
    console.log(err);    
}
})();
