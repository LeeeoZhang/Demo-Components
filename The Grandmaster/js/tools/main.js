requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'node_modules/jquery/dist/jquery.min'
    }
});
require(['tools/init']);