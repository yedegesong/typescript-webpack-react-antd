fis.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**',
  'styles/less/**'
]);

fis.media('pro').match('/dist/*.js', {
    release: '/ERP/$0'
})
.media('pro').match('/lib/*.js', {
    release: '/ERP/$0'
})
.match('/styles/*', {
    release: '/ERP/$0'
}).match('/pages/*.html', {
    release: '/ERP/$0'
});

