import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import StudentList from "./pages/StudentList";
import AjaxToReact from './pages/AjaxtoReact';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentList />,
  },
  {
    path: "/student-add",
    element: <AddStudent />
  },
  {
    path: "/student-edit/:id",
    element: <EditStudent />
  },
  {
    path: "/ajax-react",
    element: <AjaxToReact />
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
