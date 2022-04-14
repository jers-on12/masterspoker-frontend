import { Route } from "react-router-dom"

const PrivateRoute: React.FC = (...props: any) => {
    return <Route {...props} />
}

export default PrivateRoute