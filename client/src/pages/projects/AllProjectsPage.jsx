import {useFindAllProjectQuery} from "../../redux/project/projectApiSlice.js";
import AllProjectsItem from "../../components/projects/AllProjectsItem.jsx";
import IsCreator from "../../components/user/IsCreator.jsx";
import UILink from "../../shared/uikit/UILink";

const AllProjectsPage = () => {

    const {data} = useFindAllProjectQuery()
    return (
        <div className={'flex flex-col items-center mx-auto gap-8'}>
            <IsCreator>
                <UILink to={'project/create'} bg={'green'} className={'self-end px-1'}>Створити Проект</UILink>

            </IsCreator>
            <h1 className={'font-bold text-2xl'}>Проекти</h1>
            {Array.isArray(data?.projects) && data?.projects.map(p => <AllProjectsItem project={p} key={p._id}/>)}
        </div>
    );
};

export default AllProjectsPage;
