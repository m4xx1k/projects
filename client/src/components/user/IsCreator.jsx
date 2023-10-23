import React from 'react';
import {useSelector} from "react-redux";
import {useFindOneProjectQuery} from "../../redux/project/projectApiSlice.js";
import {useNavigate} from "react-router-dom";

const IsCreator = ({children, project, goBack=false}) => {
    const navigate = useNavigate()
    const {user} = useSelector(state => state.user)
    const {data, isSuccess, isUninitialized} = useFindOneProjectQuery(project)
    console.log({data})
    if (data?.project.userId === user?._id) return <>
        {children}
    </>
    if(data?.project.userId._id === user?._id && !isUninitialized && isSuccess && goBack){
        navigate(-1)
        return null
    }
    return null
};

export default IsCreator;
