import React from 'react';
import {useFindUserByIdQuery} from "../../redux/user/userApiSlice.js";
import UIValue from "../../shared/uikit/UIValue.jsx";
import UIButton from "../../shared/uikit/UIButton.jsx";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/user/userSlice.js";

const Profile = () => {
    const {data} = useFindUserByIdQuery()
    const dispatch = useDispatch()
    if (!data) return null
    return (
        <div>
            {Object.keys(data).map(key => <UIValue value={data[key]} name={key} key={key}/>)}
            <UIButton onClick={()=>dispatch(logout())} bg={'red'}>Вийти</UIButton>
        </div>

    );
};

export default Profile;
