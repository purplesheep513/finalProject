import React from 'react';

const ProfilePic = ({pics}) => {
    return(
        <div>
            {pics.map(pic => (
                <img src={require({pic})} alt="프로필사진"/>
            ))}
        </div>
    )
}

export default ProfilePic