module.exports = {
  dev: {
    options: {
      style: 'expanded',
      loadPath: require('node-bourbon').includePaths,
      trace: true
    },
    files: [{
      expand: true,
      cwd: 'src/app/stylesheets',
      src: ['*.{scss,sass}'],
      dest: 'src/compiled/app/stylesheets',
      ext: '.css'
    }]
  }
}