import AppLoader from "@/reuseables/AppLoader"
import { DelayLoading } from "@/utils/DelayLoad"
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
              <Suspense fallback={<AppLoader />}>
                <route.component />
                <DelayLoading />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Router>
  )
}

export default AppRoutes
