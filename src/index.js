import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import App from "./App";

import store from "./store";
import "./firebase";
import "./data/testData";

let persistor = persistStore(store);

console.log(process.env);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
  rootElement
);
