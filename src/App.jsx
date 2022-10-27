import {NavBar} from './components/Routing/NavBar';


export const App = () => {

  return (
    <div className="App">
      <header className='App__header'>
        <h1 className='App__title'>React project (v.18)</h1>
        <NavBar />
      </header>
    </div>
  );
}