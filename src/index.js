exports.analyze = function(configurationFile) {
    var fileAdapter = require('./fileAdapter').createFileAdapter(function(err) {
        console.log('File Error :');
        console.log(err);
    });
    fileAdapter.readFile(configurationFile, function(data) {
        var configuration = JSON.parse(data);
        fileAdapter.readGlobFiles(configuration.lessFiles, function(files) {
            console.log('readResult');
            console.log(files.length);
        });
    });
}