import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DatatableContextProvider } from "./contexts/DatatableContext";
import AppRoutes from "./routes"

const App = () => {
  return (
    <DatatableContextProvider>
    <Router>
      <Switch>

        {AppRoutes.map((route, key) => {
        const { component, path } = route;
        const Component = component;

        return (
          <Route
            exact={true}
            path={path}
            key={key}
            render={Component}
          />
        )
      })}
      </Switch>
    </Router>
    </DatatableContextProvider>
  )
}

export default App;
