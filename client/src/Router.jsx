import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllProjectsPage from "./pages/projects/AllProjectsPage.jsx";
import ProtectedRoute from "./pages/Protected.jsx";
import Registration from "./pages/user/Registration.jsx";
import Login from "./pages/user/Login.jsx";
import CreateProject from "./pages/projects/CreateProject.jsx";
import UpdateProject from "./pages/projects/UpdateProject.jsx";
import ProjectPage from "./pages/projects/ProjectPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import Profile from "./pages/user/Profile.jsx";
import ProjectParticipants from "./pages/projects/ProjectParticipants.jsx";
import ProjectTasks from "./pages/projects/ProjectTasks.jsx";
import TaskCreate from "./pages/projects/TaskCreate.jsx";
import ProjectChat from "./pages/projects/ProjectChat.jsx";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<AllProjectsPage/>}/>
                    <Route path={'/project/:id'} element={<ProjectPage/>}/>
                    <Route path={'/project/:id/tasks'} element={<ProjectTasks/>}/>
                    <Route path={'/project/participants/:id'} element={<ProjectParticipants/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>

                    <Route path={'/user/:id'} element={<Profile/>}/>
                    <Route path={'/chat/:id'} element={<ProjectChat/>}/>

                    <Route path={'/project/create'} element={<CreateProject/>}/>
                    <Route path={'/project/update/:id'} element={<UpdateProject/>}/>
                    <Route path={'/task/create/:id'} element={<TaskCreate/>}/>



                    <Route path="*" element={<>404</>}/>

                </Route>

            </Routes>
        </BrowserRouter>

    );
}

export default Router;
