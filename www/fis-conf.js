fis.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**'
]);

fis.media('pro').match('/dist/*.js', {
    release: '/ERP/$0'
})
.match('/styles/*.css', {
    release: '/ERP/$0'
}).match('/pages/*.html', {
    release: '/ERP/$0'
});

