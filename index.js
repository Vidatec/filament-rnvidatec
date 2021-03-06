const component = require('./generators/component');
const screen = require('./generators/screen');
const network = require('./generators/network');
const redux = require('./generators/redux');
const context = require('./generators/context');

exports.cli = {
  new: {
    screen: {
      _func: {
        desc: 'Generate a screen',
        run: screen.gen,
        arg: {
          required : true,
          desc : 'screen_name'
        }
      }
    },
    redux: {
      _func: {
        desc: 'Generate a redux',
        run: redux.gen,
        arg: {
          required : true,
          desc : 'redux_name'
        }
      }
    },
    component: {
      _func: {
        desc: 'Generate a component',
        run: component.gen,
        arg: {
          required : true,
          desc : 'component_name'
        }
      }
    },
    network: {
      _func: {
        desc: 'Generate a network controller',
        run: network.gen,
        arg: {
          required : true,
          desc : 'network_name'
        }
      }
    },
    context: {
      _func: {
        desc: 'Generate a context',
        run: context.gen,
        arg: {
          required : true,
          desc : 'context_name'
        }
      }
    },
  }
}