import StudentList from "./pages/StudentList";
import './App.css'
import { Link,RouterProvider,createBrowserRouter } from "react-router-dom";
import AjaxToReact from "./pages/AjaxtoReact";
import StudentAdd from "./pages/StudentAdd";
import StudentEditForm from "./pages/StudentEdit";



const router = createBrowserRouter([
    {
      path: "/",
      element: <StudentList/>
    },
    {
       path:"/student-add",
       element:<StudentAdd/>
    },
    {
      path: "/studentEdit/:id",
      element:<StudentEditForm/>
    },
    {
      path: "/AjaxtoReact",
      element:<AjaxToReact/>
    },
    
  ]);

function App() {
 return(
    <RouterProvider router={router} />
//   <StudentList />
 )
}

export default App;
