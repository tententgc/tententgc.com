import React from "react"
import { BrowserRouter,Route,Routes} from "react-router-dom" 

import MainLayout from "./layouts/MainLayout"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const AppRouter:React.FC<any> = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route
            path="/projects"
            element={
              <MainLayout>
                <Projects />
              </MainLayout>
            }
          />
          <Route
            path="/contacts"
            element={
              <MainLayout>
                <Contact/>
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    );
}


export default AppRouter;