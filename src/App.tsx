import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: any) => {
          const RouteComponent = route.element
          
          if(route.protected) {
            // Remove this unused property
            delete route.protected
            
            return <PrivateRoute key={route.path} {...route} path={route.path} element={<RouteComponent />} />
          }

          return <Route key={route.path} {...route} path={route.path} element={<RouteComponent />} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
