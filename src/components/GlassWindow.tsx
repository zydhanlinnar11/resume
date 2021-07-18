import './GlassWindow.css'
import Menu from './Menu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function GlassWindow() {
  return (
    <div className="glass">
      <Router>
        <Menu />
        <Switch>
          <Route path="/projects" exact></Route>
          <Route path="/achievements" exact></Route>
          <Route path="/educations" exact></Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default GlassWindow