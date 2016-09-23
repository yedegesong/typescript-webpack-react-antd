fis.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**',
  'styles/less/**'
]);

fis.media('pro').match('/dist/*.js', {
    release: '/ERP/$0'
}).match('/lib/**.{js,css,gif,png,jpg}', {
    release: '/ERP/$0'
}).match('/common/*.js', {
    release: '/ERP/$0'
}).match('/styles/*.{css,eot,svg,ttf,woff}', {
    release: '/ERP/$0'
}).match('/images/**.{js,css,gif,png,jpg}', {
    release: '/ERP/$0'
}).match('/pages/*.html', {
    release: '/ERP/$0'
});

