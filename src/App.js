import Home from "./Component/Home";
import Dataprovider from "./Contaxt/Dataprovider";
function App() {
  return (
    <Dataprovider>
      <Home />
    </Dataprovider>
  );
}

export default App;
