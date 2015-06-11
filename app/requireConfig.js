require.config({
  paths: {
    'angular': '../bower_components/angular/angular',
    'angular-route': '../bower_components/angular-route/angular-route',

    //load the modules
    'coreModule': './modules/core/coreModule',
    'themeModule': './modules/theme/themeModule'
  },
  shim: {
    'app': {
      deps: ['angular', 'coreModule']
    },
    'coreModule': {
      deps: ['angular-route', 'themeModule']
    },
    'angular-route': {
      deps: ['angular']
    },
    'themeModule': {
      deps: ['angular-route']
    }
  },
  priority:[
  'angular']
});

require(['coreModule'], function() {
  // angular.bootstrap(document,['app']);
  //loaded the application
});