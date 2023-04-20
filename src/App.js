import './App.css';
import Header from './Components/Header';
import Code from './Components/Code';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import DataProvider from './Context/dataprovide';
import Result from './Components/Result';
function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <Code />
        <Result/>
      </DataProvider>

    </>
  );
}

export default App;
