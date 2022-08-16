import { Provider } from "react-redux";
import AppRouter from "./router";
import { store } from "./store";
import { getPermissions } from "./store/apiSlice/permissionSlice";

store.dispatch(getPermissions.initiate());

const App = () => {  
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
