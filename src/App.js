import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import CelebsPage from "./pages/CelebsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import ResultSearchPage from "./pages/ResultSearchPage";
import SignUpPage from "./pages/SignUpPage";
import TvSeries from "./pages/TvSeries";

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
                  <CelebsPage></CelebsPage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/movies/search/page/:page/"
              element={
                <>
                  <ResultSearchPage />
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="login"
              element={
                <>
                  <LoginPage></LoginPage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="signup"
              element={
                <>
                  <SignUpPage></SignUpPage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/movie/:movieId"
              element={
                <>
                  <MovieDetailPage></MovieDetailPage>
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
