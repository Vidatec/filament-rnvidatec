const askListAsync = async (Filament, question, answers) => {
  return new Promise((resolve, reject) => {
    Filament.askList(question, answers, (res) => {
      resolve(res);
    });
  })
}

exports.gen = async function (Filament, flags, arg) {
  if (Filament.checkIfExists('app/components/' + arg)) {
    Filament.exit('Component ' + arg + ' already exists.');
  }

  let isClass = await askListAsync(Filament, 'Create class or functional component?', ['Class', 'Functional']);
  let templatePath = null;

  if (isClass === 'Class') {
    templatePath = 'screenAndComponent/index.class.noredux.js';
  } else {
    templatePath = 'screenAndComponent/index.functional.js';
  }

  Filament.createDir('app/components/' + arg);

  Filament.createFile('app/components/' + arg + '/index.js', templatePath, {
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
    '$1import \'app/components/' + arg + '/stories\';\n'
    );
};