const mongoose = require('../DB/Connection')

const Region = mongoose.Schema({
    nombreRegion: {
        type:String,
        unique: true,
        require: true
    }},{
        collection: 'Region',
        versionKey: false
    }
)