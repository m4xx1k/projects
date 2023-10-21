import React from 'react';
import {useFindUserByIdQuery} from "../../redux/user/userApiSlice.js";
import UIValue from "../../shared/uikit/UIValue.jsx";

const Profile = () => {
    const {data} = useFindUserByIdQuery()
    console.log(data)
    return (
        <div>
            {data && <div>
                {Object.keys(data).map(key=><UIValue value={data[key]} name={key}  key={key}/>)}
            </div>
            }
            {JSON.stringify(data.data)}
        </div>
    );
};

export default Profile;
