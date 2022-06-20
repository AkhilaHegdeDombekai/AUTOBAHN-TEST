import logo from './logo.svg';
import './App.css';
import Album from './pages/land';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom'
import Create from './components/create';
import Update from './components/update';
import SuspenseContainer from './components/loader'

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Album /> },
    { path: "/create", element: <Create /> },
    { path: "/update", element: <Update /> }
  ]);
  return routes;
};
const AppWrapper = () => {
  return (
    <Router>
      <SuspenseContainer>
      <App />
      </SuspenseContainer>
    </Router>
  );
};

export default AppWrapper;
// function App() {
//   return (
   
//    <Routes>
//         <Route path="/" element={<Album />} />
//         <Route path="/create" element={<Create />} />
//         {/* <Route path="/signup" element={<Signup />} />
//         <Route path="/profile" element={<Profile />} />\ */}
//     </Routes>

//   );
// }

// export default App;
