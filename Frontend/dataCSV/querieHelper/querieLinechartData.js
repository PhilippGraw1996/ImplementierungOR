import React, { useEffect, useState } from 'rect';


export default function QuerieLineData() {

    const [querieData, setQuerieData] = useState([]);

    async function getData() {
        const response = await fetch('http://localhost:5050/EScooterTripsBerlin');

        if(!response.ok) {
            const message = `An error occured: ${response.statusText}`;
            window.alert(message);
            return;
        }
        const results = await response.json();
        setQuerieData(results);
    }

    getData();
    return querieData;
}