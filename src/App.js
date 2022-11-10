import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import ResultSearchPage from "./pages/ResultSearchPage";

function App() {
  return (
    <Fragment>
      <div className="relative mx-auto flex max-w-[1920px]">
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/abv"
              element={
                <>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/abc"
              element={
                <>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="movies/search/page/:page"
              element={
                ResultSearchPage
              }
            ></Route>
          </Route>
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
