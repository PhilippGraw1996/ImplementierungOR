import React from 'react';


const BarChartiFrame = () => {

    return(
        <iframe title="123" style={{background: "#FFFFFF", border: "none", borderRadius: "2px", width: 640, height: 480}} 
                src="https://charts.mongodb.com/charts-project-0-judtu/embed/charts?id=649d9c3a-b269-4dc7-8104-1fa313b54d21&maxDataAge=3600&theme=light&autoRefresh=true"
                >
        </iframe>
    );
}

export default BarChartiFrame;