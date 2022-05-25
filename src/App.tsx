import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './AppCss.scss';
import Card from './component/card';
import Hexagon from './img/hexagon';
import AboutMe from './page/about_me';
import Main from './page/main';
import Project from './page/project';
import Stack from './page/stack';

const routes = [
  {
    path: 'about',
    component: <AboutMe />,
  },
  {
    path: 'stack',
    component: <Stack />,
  },
  {
    path: 'project',
    component: <Project />,
  },
];
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/menu' element={<Card />}>
            {routes.map((route, idx) => (
              <Route path={route.path} key={idx} element={route.component} />
            ))}
          </Route>
        </Routes>
        <Hexagon
          fill='rgba(255, 255, 255, 0.4)'
          width='75vh'
          className='hexagon'
        />
        <div className='circle'></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
