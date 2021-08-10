import { useState, useEffect } from 'react';
import config from './config.json';
import csv from 'csvtojson';
//import Header from './Header';
import PowerGrid from './PowerGrid';


function PowerMatrixPage(props) {
    const { dataHostName } = config;
    const [marvel, setMarvel] = useState([])

    useEffect(() => {
        fetch(`${dataHostName}/superheroes_power_matrix.csv`)
            .then(r => r.text())
            .then(r => csv().fromString(r))
            .then(res => {
                console.log("received data:", res)
                setMarvel(res)
            })
    }, [dataHostName])

    return (
        <div>
            <div>
                <h1>PowerMatrixPage</h1>
            </div>

            <div>
                <PowerGrid
                    data={marvel}
                />
            </div>
        </div>
    );
}
export default PowerMatrixPage;