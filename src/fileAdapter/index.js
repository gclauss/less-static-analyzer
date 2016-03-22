exports.createFileAdapter = function(handleErrors){
    
    var fs = require('fs');
    var glob  = require('glob');
    
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
    
    return self;
    
}