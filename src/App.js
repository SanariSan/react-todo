import './App.css';
import { Body } from './components/body/Body';
import { Head } from './components/head/Head';

function App() {
  return (
    <div
      className="App"
      onContextMenu={(event) => {
        event.preventDefault();
        return false
      }}
    >
      <Head />
      <Body />
    </div>
  );
}

export default App;
