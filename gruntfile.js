module.exports = function(grunt) {
    grunt.initConfig({
        ngdocs: {
            options: {
                dest: 'ngdocs',
                scripts: ['angular.js'],
                title: 'demo document',
                html5Mode: false
            },
            api: {
                src: ['src/**/*.js'],
                title: 'API Documentation'
            }
        },
        jsdoc: {
            dist: {
                src: ['src-jsdoc/**/*.js'],
                options: {
                    destination: 'js-docs',
                    configure: 'node_modules/angular-jsdoc/common/conf.json',
                    template: 'node_modules/angular-jsdoc/angular-template',
                    readme: './README.md'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.registerTask('generate-ngdoc', ['ngdocs']);
    grunt.registerTask('generate-angular-jsdoc', ['jsdoc']);
}