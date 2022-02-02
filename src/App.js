import logo from './logo.svg';
import './App.css';
import TopBar from './Components/TopBar';
import MainSection from './Components/MainSection';
import Footer from './Components/Footer';
import Dialog from './Components/Dialog';
import DialogCover from './Components/DialogCover';
import { useState } from 'react';
function App() {
  const [isActive, setActive] = useState(false);
  const [kolicina, setKolicina] = useState(0);



  const uplatiClicked=()=>{setActive(!isActive);};
  const odustaniClicked=()=>{setActive(false);};
  const uplatiClickedDialog=(kolicinaDobijena)=>{ const kolicinaKonacna=parseInt(kolicina)+parseInt(kolicinaDobijena); setKolicina(kolicinaKonacna); odustaniClicked();}
  return (
    < >

  <TopBar uplatiButtonClicked={uplatiClicked} stanje={kolicina}/>
    <MainSection/>
    <Footer/>
    <DialogCover isActiveDialog={isActive} ></DialogCover>
<Dialog isActiveDialog={isActive} odustaniButtonClicked={odustaniClicked} uplatiButtonClicked={uplatiClickedDialog}></Dialog>
    </>
  
  );
}

export default App;
