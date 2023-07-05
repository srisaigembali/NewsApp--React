import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  let apiKey = '5364ed7480e14a008a2f6477239aff8e';

  const [progress, setProgress] = useState(0);

  const showProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <div>
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={showProgress}
              apiKey={apiKey}
              key="general"
              pageSize={15}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={showProgress}
              apiKey={apiKey}
              key="business"
              pageSize={15}
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={showProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={15}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={showProgress}
              apiKey={apiKey}
              key="general"
              pageSize={15}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={showProgress}
              apiKey={apiKey}
              key="health"
              pageSize={15}
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={showProgress}
              apiKey={apiKey}
              key="science"
              pageSize={15}
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={showProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={15}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={showProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={15}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
