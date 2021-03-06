import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import BoxSeries from '../components/series/Box_series'
import Autores from '../components/Autores'
import Home from '../components/Home'
import Login from '../components/Login'
import Navbar from '../components/Nav_bar'
import { isSignedIn } from '../services/Auth_service';


const NotFound = () => {
    return(
      <div>
        <h1>Página não encontrada</h1>
      </div>
    )
  }

  const PrivateRoutes = ({component: Component, ...rest}) => {
    console.log('teste')
      return(
          <Route {...rest} 
            render={props => isSignedIn() ? (
                <div>
                    <Navbar/>
                    <Component {...props}/>
                </div>
                ) : ( 
                    <Redirect to={{ 
                        pathname: '/login', 
                        state: { from: props.location } 
                    }} />
                )
            }
        />
      )
  }

const Routes = () => (
    <Router>
        <Switch>
            <Route path='/login' component={Login}/>
            <PrivateRoutes path='/series' component={BoxSeries} />
            <PrivateRoutes path='/autores' component={Autores} />
            <PrivateRoutes exact path='/' component={Home} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

export default Routes;