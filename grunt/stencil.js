module.exports = {
  dev: {
    options: {
      partials: 'src/partials',
      templates: 'src/layouts'
    },
    files: [{
      expand: true,
      cwd: 'src/pages',
      src: '*',
      dest: 'src/compiled',
      ext: '.html'
    }]
  }
}