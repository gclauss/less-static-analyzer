exports.createFileAdapter = function(handleErrors){
    
    var fs = require('fs');
    var glob = require('glob');
    
    var self = {};
    
    self.readFile = function(path, listener) {
        fs.readFile(path, 'utf8', function(err, data) {
            if(err !== null) {
                handleErrors(err);
                return;
            }
            listener(data);
        });
    }
    
    self.readGlobFiles = function(globPatterns, listener) {
        var result = [];
        var readCount = 0;
        globPatterns.forEach(function(globPattern) {
            glob(globPattern, function (err, files) {
                if(err !== null) {
                    handleErrors(err);
                    return;
                }
                result = result.concat(files);
                readCount++;
                if(readCount === globPatterns.length) {
                    listener(result);
                }
            });
        });
    }
    
    return self;
    
}