import React, { useState } from 'react';

import DashboardScene from './DashboardScene'
import DashboardScene2 from './DashboardScene2'
import DashboardScene3 from './DashboardScene3'
import DashboardScene4 from './DashboardScene4'


const MainDashboardScene = () => {

    const [scene, setScene] = useState(1);

    return(
        <div>
            {scene = 1 && <DashboardScene/>}
            {scene = 2 && <DashboardScene2/>}
            {scene = 3 && <DashboardScene3/>}
            {scene = 4 && <DashboardScene4/>}
        </div>
    );
}

export default MainDashboardScene;