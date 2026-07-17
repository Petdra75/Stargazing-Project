import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import { CloseObjectsPage } from './components/pages/CloseObjectsPage'
import { SolarFlarePage } from './components/pages/SolarFlarePage'
import { SpaceEventsPage } from './components/pages/SpaceEventsPage'
import { SolarSystemPage } from './components/pages/SolarSystemPage'
import { MilkyWayPage } from './components/pages/MilkyWayPage'
import { BigBangPage } from './components/pages/BigBangPage'
import { SpaceTravelPage } from './components/pages/SpaceTravelPage'
import { NavBar } from './components/NavBar';
import { DiscoverSpacePage } from './components/pages/DiscoverSpacePage';


function App() {

  return (
    <>
     {/* <NavBar/> */}
     <Router>
      <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path='/close-objects' element={<CloseObjectsPage />}/>
        <Route path='/solar-flaremania' element={<SolarFlarePage />}/>
        <Route path='/space-events' element={<SpaceEventsPage />}/>
        <Route path='/discover-the-universe' element={<DiscoverSpacePage />}/>
        <Route path='solar-system' element={<SolarSystemPage/>}/>
        <Route path='milky-way' element={<MilkyWayPage/>}/>
        <Route path='big-bang' element={<BigBangPage/>}/>
        <Route path='space-travel' element={<SpaceTravelPage/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
