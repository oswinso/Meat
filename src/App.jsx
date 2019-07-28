import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css'

import { MeetingDetailsStore } from './component/MeetingDetailsStore'
import { MeetingAvailabilityStore } from './component/MeetingAvailabilityStore'
import PickDatePage from './component/PickDatePage'
import MeetingDetailsPage from './component/MeetingDetailsPage'
import MeetingPage from './component/MeetingPage'


const App = () => {
  return (
    <Router>
      <MeetingDetailsStore.Provider >
        <Route path='/' exact component={PickDatePage} />
        <Route path='/create' exact component={MeetingDetailsPage} />
      </MeetingDetailsStore.Provider>
      <MeetingAvailabilityStore.Provider>
        <Route path='/meeting/:meetingID' component={MeetingPage} />
      </MeetingAvailabilityStore.Provider>
    </Router>
    )
}

export default App
