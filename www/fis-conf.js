fis.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**'
]);

fis.media('pro').match('/dist/*.js', {
    release: '/static/$0'
}).match('/pages/*.html', {
    release: '/template/$0'
});

