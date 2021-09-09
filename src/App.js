import React, { Suspense } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Notfound from "./components/Notfound";

//lazy load - code splitting
const Photo = React.lazy(() => import("./features/photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          {/* <ul>
            <li>
              <Link to="/photos">Go to photo page </Link>
            </li>
            <li>
              <Link to="/photos/add">Go to add new photo page </Link>
            </li>
            <li>
              <Link to="/photos/123">Go to edit photo page </Link>
            </li>
          </ul> */}
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={Notfound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
