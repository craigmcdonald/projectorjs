var packageName = 'lefthandme:projectorjs';
var where = 'client'; 
var version = '0.1.1';
var summary = 'A meteor package for projectorjs - HTML5 / video.js overlays';
var gitLink = 'https://github.com/craigmcdonald/projectorjs.git';
var documentationFile = 'Readme.md';

Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.addFiles('lib/css/projectorjs.css', where);
  api.addFiles('lib/js/index.js', where);
});   