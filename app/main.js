require.config({
  paths: {
    'angular': '../bower_components/angular/angular',

    'coreModule': './modules/core/coreModule',
    'themeModule': './modules/theme/themeModule'
  },
  shim: {
    'app': {
      deps: ['angular', 'coreModule']
    },
    'coreModule': {
      deps: ['angular', 'themeModule']
    },
    'themeModule': {
      deps: ['angular']
    }
  }
});

require(['coreModule'], function() {
  // angular.bootstrap(document,['app']);
});