import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css'

import { MeetingDetailsStore } from './component/MeetingDetailsStore'
import PickDatePage from './component/PickDatePage'
import MeetingDetailsPage from './component/MeetingDetailsPage'


const App = () => {
  return (
    <Router>
      <MeetingDetailsStore.Provider >
        <Route path='/' exact component={PickDatePage} />
        <Route path='/create' exact component={MeetingDetailsPage} />
      </MeetingDetailsStore.Provider>
    </Router>
    )
}

export default App
