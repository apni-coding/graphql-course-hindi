import logo from "./logo.svg";
import "./App.css";
import Curriculum from "./Curriculum";
import RepoList from "./RepoList";
import { useState } from "react";

function App() {
  const [isRepoShow, setIsRepoShow] = useState(false);

  return (
    <>
      {isRepoShow ? (
        <RepoList setIsRepoShow={setIsRepoShow} />
      ) : (
        <Curriculum setIsRepoShow={setIsRepoShow} />
      )}
    </>
  );
}

export default App;
