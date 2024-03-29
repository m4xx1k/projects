import {useFindAllProjectQuery} from "../../redux/project/projectApiSlice.js";
import AllProjectsItem from "../../components/projects/AllProjectsItem.jsx";
import {UILink, UILoader} from "../../shared/uikit/";
import {isArray} from "../../shared/utils.js";
import ProjectsFilter from "../../components/projects/ProjectsFilter.jsx";
import {useState} from "react";
import {ProjectStatusWithAll} from "../../shared/constants.js";
import {useForm} from "react-hook-form";

const defaultValues = {
    participants: [0, 100],
    developmentTime: [0, 360],
    status: ProjectStatusWithAll[0].value
}
const AllProjectsPage = () => {
    const [filter, setFilter] = useState(defaultValues)
    const {data, isLoading} = useFindAllProjectQuery(filter)
    const {register, handleSubmit, control} = useForm({defaultValues});

    const submit = data => {
        setFilter(data)
    }

    return (
        <div className={'flex flex-col items-center mx-auto gap-8'}>
            <UILink to={'project/create'} bg={'green'} className={'self-end px-1'}>Створити Проект</UILink>
            <h1 className={'font-bold text-2xl'}>Проекти</h1>
            <ProjectsFilter isLoading={isLoading} register={register} onSubmit={handleSubmit(submit)}
                            control={control}/>
            {isArray(data?.projects) && !isLoading && data?.projects.map(p => <AllProjectsItem project={p}
                                                                                               key={p._id}/>)}
            {isLoading && <UILoader/>}
        </div>
    );
};

export default AllProjectsPage;
