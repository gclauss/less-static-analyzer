exports.analyze = function(configurationFilePath) {
    var fileAdapter = require('./fileAdapter').createFileAdapter(function(err) {
        console.log('File Error :');
        console.log(err);
    });
    var configurationManager = require('./configurationManager').createConfigurationManager(fileAdapter, configurationFilePath);
    var css = require('css');
    configurationManager.getLessFiles(function(files){
        var stylesheet = css.parse(files[0]);
        console.log(stylesheet.stylesheet.rules);
        //var less= require('less');
        //var context;
        //var imports;
        //var fileInfo;
        //var stylesheet2 = less.Parser(context, imports, fileInfo).parse(files[1], console.log);
    });

}