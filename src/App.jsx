import { Routes, Route } from "react-router-dom";
import {NavBar} from './components/Routing/NavBar';
import {Home} from './components/Home';
import {Chats} from './components/Chats/Chats';
import {Profile} from './components/Profile/Profile';
import {NotFound} from './components/NotFound';

export const App = () => {

  return (
    <div className="App">
      <header className='App__header'>
        <h1 className='App__title'>React project (v.18)</h1>
        <NavBar />
      </header>
      <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/chats" element={ <Chats /> }>
              <Route path=":chatID" element={ <Chats /> } />
          </Route>
          <Route path="/profile" element={ <Profile /> }/>
          <Route path="*" element={ <NotFound /> }/>
      </Routes>
    </div>
  );
}