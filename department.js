var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var departmentSchema = new Schema({
	nome: String,
}, {versionKey: false});

module.exports = mongoose.model("Department", departmentSchema);