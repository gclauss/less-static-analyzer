exports.analyze = function(configurationFile) {
    var fileAdapter = require('./fileAdapter').createFileAdapter(function(err) {
        console.log('File Error :');
        console.log(err);
    });
    fileAdapter.readFile(configurationFile, function(data) {
        console.log('readResult');
        console.log(data);
    });
}