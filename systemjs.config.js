(function (global) {
    var map = {
        'app': 'dist/js',
        'rxjs': 'lib/js/rxjs',
        '@angular': 'lib/js/@angular'
    };

    var packages = {
        'app': {
            main: 'main',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router-deprecated',
        'upgrade',
    ];

    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    }

    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName + '.umd.js',
            defaultExtension: 'js'
        }
    }

    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    ngPackageNames.forEach(setPackageConfig);

    var config = {
        map: map,
        packages: packages
    };

    config.packages['@angular/router'] = {
        main: 'index.js',
        defaultExtension: 'js'
    };

    System.config(config);
})(this);