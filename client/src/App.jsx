import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Habitat from './components/Habitat';
import Recording from './components/Recording';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/habitat',
    element: <Habitat/>,
  },
  {
    path: '/recording',
    element: <Recording/>
  },
])

function App() {

  return (
    <div>
      <RouterProvider router = {appRouter} />
    </div>
  )
}

export default App
