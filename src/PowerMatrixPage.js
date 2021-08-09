import { useEffect, useState } from 'react';
import csv from 'csvtojson';

import config from './config.json'
import PowerGrid from './PowerGrid';
export default function PowerMatrixPage() {
    const { dataHostName } = config
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`${dataHostName}/superheroes_power_matrix.csv`)
            .then(r => r.text())
            .then(r => csv().fromString(r))
            .then(res => {
                console.log("Received marvelDCCharacters", res)
                setData(res)
            })
    }, [dataHostName])

    return (
        <div>
            <h1>PowerMatrixPage</h1>
            <PowerGrid
                data={data}
            />
        </div>
    )
}