import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import ResultSearchPage from "./pages/ResultSearchPage";
import TvSeries from "./pages/TvSeries";

function App() {
  return (
    <Fragment>
      <div className="relative mx-auto flex max-w-[1920px]">
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/*"
              element={
                <>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/tvseries"
              element={
                <>
                  <TvSeries></TvSeries>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/celebs"
              element={
                <>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/movies/search/page/1"
              element={
                <>
                  <ResultSearchPage />
                </>
              }
            ></Route>
          </Route>
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
