exports.gen = function (Filament, flags, arg) {
  if (Filament.checkIfExists('app/components/' + arg)) {
    Filament.exit('Component ' + arg + ' already exists.');
  }

  Filament.createDir('app/components/' + arg);

  Filament.createFile('app/components/' + arg + '/index.js', 'screenAndComponent/index.noRedux.js', {
    name: arg,
    path: 'components'
  });

  Filament.createFile('app/components/' + arg + '/styles.js', 'screenAndComponent/styles.js', {
    name: arg,
    path: 'components'
  });

  Filament.createFile('app/components/' + arg + '/stories.js', 'screenAndComponent/stories.js', {
    name: arg,
    path: 'components'
  });

  Filament.createFile('app/components/' + arg + '/' + arg + '.test.js', 'screenAndComponent/test.js', {
    name: arg,
    path: 'components'
  });

  Filament.regexWrite(
    'storybook/stories/index.js',
    /(\n\/\/ DO NOT MOVE COMMENT\n)/gim ,
    'import ' + arg + ' from \'app/components/' + arg + '/stories\';\n$1'
    );
};