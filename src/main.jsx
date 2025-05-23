
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./components/DataProvider/DataProvider.jsx";
import {initialState, reducer} from "../src/components/Utility/reducer.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider reducer={reducer} initialState={initialState}>
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);


// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import App from "./App.jsx";
// import { DataProvider } from "./components/DataProvider/DataProvider.jsx";
// import {initialState, reducer} from './Utility/reducer.jsx'

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <DataProvider reducer={reducer} initialState={initialState}>
//         <App />
//       </DataProvider>
//     </BrowserRouter>
//   </StrictMode>
// );
