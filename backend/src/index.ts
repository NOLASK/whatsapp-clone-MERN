import app from './app';
import './database/database';
import config from './config/config';
import './config/pusher';
// Server Run
app.listen(config.PORT, () => {
    console.log(`app on port ${config.PORT}`);    
});

app.get('/', (req, res) => {
    res.send('<h1>server works</h1>');
});