//dependency imports
import { BrowserRouter as Router, Route} from 'react-router-dom'

//Component imports
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'


const App = ()=>(
  <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
  </Router>
)

export default App;
