import { useEffect } from "react";
import "./App.css";
import { TrashIcon, PencilIcon, ExitIcon, CheckIcon } from "./components/icons";

const App = () => {
  const getData = () => {
    fetch("./src/data/todo.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  //

  return <>Start ! :)</>;
};

export default App;
