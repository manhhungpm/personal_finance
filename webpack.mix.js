const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps(false,"source-map")
    .disableNotifications()
;

if (mix.inProduction()) {
    mix.version();

    mix.extract([
        "vue",
        "axios",
        "vuex",
        "jquery",
        "popper.js",
        "vue-i18n",
        "vue-meta",
        "js-cookie",
        "jquery-ui-dist/jquery-ui",
        "bootstrap",
        "vue-router",
        "vuex-router-sync",
        "perfect-scrollbar",
        "datatables.net",
        "datatables.net-bs4",
        "select2",
        "numeral",
        "moment",
        "highcharts"
    ]);
} else {
    mix.browserSync("http://localhost:8000");
}

