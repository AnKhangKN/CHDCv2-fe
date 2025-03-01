import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes/index';
import DefaultComponent from './components/user/DefaultComponent/DefaultComponent';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            // Khai báo biến Layout
            let Layout;
            
            // Kiểm tra nếu route có `isShowHeader`, thì dùng `DefaultComponent`
            if (route.isShowHeader && route.isShowFooter) {
              Layout = DefaultComponent;
            } else {
              Layout = Fragment; // Nếu không, dùng React.Fragment
            }

            // Render Route với Layout phù hợp
            return (
              <Route
                key={route.path} // Thêm key để React tối ưu render
                path={route.path}
                element={
                  <Layout>
                    <route.page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
