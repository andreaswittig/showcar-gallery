module.exports = (function () {
    var grunt = require("grunt");
    var DEBUG = !!grunt.option('dbg');

    return {
        options: {
            outputStyle: DEBUG ? 'expanded' : 'compressed',
            sourceMap: DEBUG,
            sourceMapEmbed: true
        },
        files: [
            {src: 'src/scss/showcar-carousel.scss', dest: 'dist/showcar-carousel.css'},
            {src: 'src/scss/showcar-gallery.scss', dest: 'dist/showcar-gallery.css'},
            {src: 'examples/carousel/css/style.scss', dest: 'examples/carousel/css/style.css'},
            {src: 'examples/gallery/css/style.scss', dest: 'examples/gallery/css/style.css'},
            {src: 'examples/css/style.scss', dest: 'examples/css/style.css'},
            {
                expand: true,
                cwd: 'examples',
                src: ['*.scss'],
                dest: 'examples',
                ext: '.css'
            }
        ]
    }
})();
