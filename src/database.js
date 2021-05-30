import mongoose from 'mongoose';
import config from './config';

(async () => {
   try {
    const db = await mongoose.connect(config.mongodbURL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    console.log(`Connect to DB: ${db.connection.name}`);
   } catch (error) {
    console.error(error)  
   }
})();