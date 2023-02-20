import { Suspense } from "react"
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import { routes } from "./paths"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<div>let me cook....</div>}>
                <route.component />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Router>
  )
}

export default AppRoutes
