import './App.css'
import { BreadCrumbs } from './components/Breadcrumbs';
import { Foot } from './components/Foot';
import { MainComponent } from './components/MainComponent';
import {NavBar} from './components/NavBar'
import { SlidesBtn } from './components/SlidesBtn';

function App() {
  return (
    <>
    <NavBar/>
    <BreadCrumbs/>
    <MainComponent/>   
    <SlidesBtn/> 
    <Foot/>    
    </>
  );
}

export default App;
