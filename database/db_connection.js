const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Eduard:12345aA@todocluster.zeguj.mongodb.net/ToDo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection successful');
}).catch((err) => {
    console.log(err);
})