exports.createConfigurationManager = function(fileAdapter, configurationFilePath){
    
    var self = {};
    
    self.getLessFiles = function(listener) {
        fileAdapter.readFile(configurationFilePath, function(data) {
            var configuration = JSON.parse(data);
            fileAdapter.readGlobFiles(configuration.lessFiles, listener);
        });
    };

    return self;
    
}