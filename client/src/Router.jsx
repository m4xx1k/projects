import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import AllProjectsPage from "./pages/projects/AllProjectsPage.jsx";
import ProtectedRoute from "./pages/Protected.jsx";
import Registration from "./pages/user/Registration.jsx";
import Login from "./pages/user/Login.jsx";
import CreateProject from "./pages/projects/CreateProject.jsx";
import JoinProject from "./pages/projects/JoinProject.jsx";
import UpdateProject from "./pages/projects/UpdateProject.jsx";
import ProjectPage from "./pages/projects/ProjectPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import Profile from "./pages/user/Profile.jsx";
import ProjectParticipants from "./pages/projects/ProjectParticipants.jsx";
import ProjectTasks from "./pages/projects/ProjectTasks.jsx";
import TaskCreate from "./pages/projects/TaskCreate.jsx";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    {/*public routes*/}
                    <Route path="/" element={<AllProjectsPage/>}/>
                    <Route path={'/project/:id'} element={<ProjectPage/>}/>
                    <Route path={'/task/:id'} element={<ProjectTasks/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>

                    {/*protected routes*/}
                    <Route element={<ProtectedRoute/>}>
                        <Route path={'/user/profile'} element={<Profile/>}/>
                    </Route>

                    {/*protected routes for creator*/}
                    <Route element={<ProtectedRoute allowedRoles={['creator']}/>}>
                        {/*projects*/}
                        <Route path={'/project/create'} element={<CreateProject/>}/>
                        <Route path={'/project/participants/:id'} element={<ProjectParticipants/>}/>
                        <Route path={'/project/update/:id'} element={<UpdateProject/>}/>
                        {/*tasks*/}
                        <Route path={'/task/create/:id'} element={<TaskCreate/>}/>
                    </Route>

                    {/*protected routes for participant*/}
                    <Route path={'/project'} element={<ProtectedRoute allowedRoles={['participant']}/>}>
                        <Route path={'join'} element={<JoinProject/>}/>
                    </Route>


                    {/*Not Found*/}
                    <Route path="*" element={<>404</>}/>

                </Route>

            </Routes>
        </BrowserRouter>

    );
}

export default Router;
