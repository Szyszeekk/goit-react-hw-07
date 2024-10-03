import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App";
import storeConfig from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={storeConfig.store}>
      <PersistGate loading={null} persistor={storeConfig.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
