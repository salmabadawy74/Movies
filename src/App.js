import React from 'react'
import Movies from './Component/movies'
import {Route,Switch,Redirect} from 'react-router-dom'
import Customer from './Component/Customer';
import MovieForm from './Component/MovieForm'
import Rental from './Component/Rental'
import notFound from './Component/notFound';
import Navnar from './Common/Navnar';
import Register from './Component/Register';
export default function App() {
  return (
    <React.Fragment>
      <Navnar/>
      <div className="Container">
      <Switch>
              <Route  path="/Movies" component={Movies}/>

            <Route  path="/rental" component={Rental}/>
      <Route path="/login" component={MovieForm}/>
        <Route path="/customers" component={Customer} />
          <Route path='/not-found' component={notFound} />
          <Route path='/register' component={Register}/>
        <Redirect exact from='/' to="/Movies" />
        <Redirect to='/not-found' />

      </Switch>
</div>
    </React.Fragment>
  )
}
