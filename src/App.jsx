import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Portfoilo from './Component/Portfoilo/Portfoilo';
import Contact from './Component/Contact/Contact';
import Layout from './Component/Layout/Layout';

let x = createBrowserRouter([
  {path:"",  element: <Layout/>,
    children:[
      {index:true,  element:<Home/>},
      {path:"About",  element:<About/>},
      {path:"Portfoilo",  element:<Portfoilo/>},
      {path:"Contact",  element:<Contact/>},
    ]
  }
])


function App() {

  return <RouterProvider router={x}></RouterProvider>
}

export default App
