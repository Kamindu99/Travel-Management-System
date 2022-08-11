const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    aname: {type: String, required: true},
    category: {type: String, required: true},
    mindescription: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    activityImage: {type: String, required: true},
    postDate: {type: Date, default:Date.now},
});

const Activities = mongoose.model("Activities", activitySchema);

module.exports = Activities;