exports.gen = async function (Filament, flags, arg) {
  if (Filament.checkIfExists(`app/context/${arg}Context.js`)) {
    Filament.exit('Context ' + arg + ' already exists.');
  }

  Filament.createFile(`app/context/${arg}Context.js`, 'context/index.js', {
    name: arg,
  });
};