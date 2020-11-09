import React from 'react';
import BackUserContainer from '../containers/back/BackUserContainer'
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';

const PassUserPage = () => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <BackUserContainer/>
            </ContentContainer>
        </div>
    )
}

export default PassUserPage;