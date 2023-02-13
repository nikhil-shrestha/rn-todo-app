import * as React from 'react';

import TodoApp from './screens/TodoApp';

// Import Redux
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
