var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PersonSchema = new Schema({
    name: String,
    age: String,
    location: String,
    title: String,
    department: String
});
module.exports = mongoose.model('Person', PersonSchema);

//# sourceMappingURL=data-compiled.js.map