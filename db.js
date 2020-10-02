const db = require('mongoose');


db.connect('mongodb+srv://facu-admin:tUCMabHHN941T9w0@cluster0.0mfiy.gcp.mongodb.net/messages-db?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then( () => console.log('[db] connected successful') )
.catch( err => console.log(err.message));