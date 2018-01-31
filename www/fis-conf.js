fis.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**',
  'styles/less/**'
]);

fis.media('pro').match('*', {
    release: '/ERP/$0'
})

