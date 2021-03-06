import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SvgDoc } from "@/pages/svgDoc";
import "@/styles/main.scss";
// import { TestComponents } from "@/pages/testComponents";
// import { TestListEmotion } from "@/test-components/test-list";
// import { CxTest5 } from "@/test-components/test-emotion5";
import { TopFormFloating } from "components/top-form/top-form-floating";
import { TestFloatingInput } from "@/test-components/test-floating-input";
import { TestReduxForm } from "@/pages/test-redux-react-forms";
// import { CxTest } from "@/test-components/test-emotion";
// import { TestFontAwesome } from "@/test-components/test-font";

/*

import { TestReactSelect } from "@/test-components/test-react-select";
import { TestSelectCustStyles } from "@/test-components/test-react-select2";

import "@/css/fa_font_local.css";
import "@/css/all_signs.css";
*/

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Начало</Link>
          </li>
          <li>
            <Link to="/svg">SVG</Link>
          </li>
          <li>
            <Link to="/test2">Test FA</Link>
          </li>
          <li>
            <Link to="/test3">Test react select</Link>
          </li>
          <li>
            <Link to="/top-form-floating">Form floating</Link>
          </li>
          <li>
            <Link to="/test">Test components</Link>
          </li>{" "}
          <li>
            <Link to="/redux-form">Test Redux form</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/svg">
          <SvgDoc />
        </Route>{" "}
        <Route exact path="/test2">
          {/*<TestFontAwesome />*/}
        </Route>
        <Route exact path="/test">
          <TestFloatingInput />
        </Route>
        <Route exact path="/top-form-floating">
          {/*<TopFormFloating />*/}
        </Route>
        <Route exact path="/redux-form">
          <TestReduxForm />
        </Route>
        <Route path="*">
          <div>
            <h1>Нажмите кнопку SVG</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  </Provider>
);
