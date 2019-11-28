const askListAsync = async (Filament, question, answers) => {
  return new Promise((resolve, reject) => {
    Filament.askList(question, answers, (res) => {
      resolve(res);
    });
  })
}

exports.gen = async function (Filament, flags, arg) {
  if (Filament.checkIfExists('app/screens/' + arg)) {
    Filament.exit('Screen ' + arg + ' already exists.');
  }

  let isClass = await askListAsync(Filament, 'Create class or functional component?', ['Class', 'Functional']);
  let isRedux = null;

  let templatePath = null;

  if (isClass === 'Class') {
    isRedux = await askListAsync(Filament, 'Connect the screen to Redux?', ['Yes', 'No']);
    templatePath = 'screenAndComponent/index.class.' + (isRedux === 'Yes' ? 'redux' : 'noredux') + '.js';
  } else {
    templatePath = 'screenAndComponent/index.functional.js';
  }

  Filament.createDir('app/screens/' + arg);
  Filament.createFile('app/screens/' + arg + '/index.js', templatePath, {
    name: arg,
    path: 'screens'
  });

  Filament.createFile('app/screens/' + arg + '/styles.js', 'screenAndComponent/styles.js', {
    name: arg,
    path: 'screens'
  });
};