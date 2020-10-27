var Pusher = require("pusher");
import config from './config';

var pusher = new Pusher({
  appId: config.PUSHER_APP_ID,
  key: config.PUSHER_KEY,
  secret: config.PUSHER_SECRET,
  cluster: "mt1",
  useTLS: true,
});

export default pusher;
