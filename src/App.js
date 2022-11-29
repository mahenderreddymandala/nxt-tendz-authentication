import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import NotFound from './components/NotFound'

import LoginForm from './components/LoginForm'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={LoginForm} />

      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
