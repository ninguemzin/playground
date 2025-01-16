import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Contador from "./pages/contador/Contador";
import Tarefa from "./pages/tarefa/Tarefa";

function App() {
  return (
    <>
      <Home
        titulo="Componente Home"
        texto="Este é o componente Home, que recebe props."
      />
      <Contador />
      <Tarefa></Tarefa>
      <Login></Login>
    </>
  );
}

export default App;
