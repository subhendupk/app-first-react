import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StudentTable from "./pages/StudentTable";
import AjaxToReact from "./pages/AjaxtoReact";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentForm from "./pages/StudentForm";
import StudentEditForm from "./pages/StudentEditForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentTable />
  },
  {
    path: "/student-form",
    element: <StudentForm />
  },
  {
    path: '/student-editform/:id',
    element: <StudentEditForm />
  },
  {
    path: "/ajax-react",
    element: <AjaxToReact />
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
