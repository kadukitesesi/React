import Titulo from "./Titulo";

function App() {
  return (
  <div>
    <Titulo nome="Carlos" paragrafo={true}/>
    <Titulo nome="Zequinha" paragrafo={true} cor="green"/>
    <Titulo/>
  </div>
)

}

export default App