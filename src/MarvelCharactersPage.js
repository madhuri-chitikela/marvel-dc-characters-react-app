import { useEffect, useState } from 'react';
import csv from 'csvtojson';

import config from './config.json'
import HerosGrid from './HerosGrid';

export default function MarvelCharactersPage() {
    const { dataHostName } = config
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`${dataHostName}/marvel_characters_info.csv`)
            .then(r => r.text())
            .then(r => csv().fromString(r))
            .then(res => {
                console.log("Received marvelDCCharacters", res)
                setData(res)
            })
    }, [dataHostName])

    return (
        <div>
            <h1>MarvelCharactersPage</h1>
            <HerosGrid
                data={data}
            />
        </div>
    )
}