import logo from "./logo.svg";
import { AppTitle, AppWrapper, AppButton } from "./styled";

function App() {
  return (
    <AppWrapper className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppTitle>
          Edit <code>src/App.js</code> and save to reload.
        </AppTitle>
        <AppButton
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppButton>
      </header>
    </AppWrapper>
  );
}

export default App;
