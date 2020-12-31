import React, {useState} from 'react';

const {{name}}Context = React.createContext({
  contextValue: null,
  setContextValue: () => {}
});

const {{name}}ContextProvider = ({children}) => {
  const [contextValue, setContextValue] = useState(null);
  return (
    <{{name}}Context.Provider
      value=\{{contextValue, setContextValue}}>
      {children}
    </{{name}}Context.Provider>
  );
};

const {{name}}ContextConsumer = {{name}}Context.Consumer;

function with{{name}}Context (Component) {
  return function WrapperComponent (props) {
    return (
      <{{name}}ContextConsumer>
        {(contextProps) => <Component {...props} {...contextProps} />}
      </{{name}}ContextConsumer>
    );
  };
}

export { {{name}}ContextProvider, {{name}}Context, {{name}}ContextConsumer, with{{name}}Context };
