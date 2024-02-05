import { Link, Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
// import SignUpForm from "./components/SignUpForm";
// import AjaxToReact from "./pages/AjaxtoReact";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/addstudent";
import Editstudent from "./pages/editstudent";
//import AjaxToReact from "./pages/AjaxtoReact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentList />
  },
  {
    path: "/student-add",
    element: <AddStudent />
  },
  {
    path: "/edit-student/:id",
    element: <Editstudent />
  }
])

function App() {
  // let condition = 2
  return (
    <RouterProvider router={router} />

    // <StudentList />
  )

}

export default App;