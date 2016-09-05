fis.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**',
  'styles/less/**'
]);

fis.media('pro').match('/dist/*.js', {
    release: '/ERP/$0'
}).match('/lib/*.js', {
    release: '/ERP/$0'
}).match('/dist/pages/*.html', {
    release: '/ERP/$0'
});

