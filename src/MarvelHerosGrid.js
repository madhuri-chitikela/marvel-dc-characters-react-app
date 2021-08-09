import columns from './columns.json';
import MarvelHeroGridRow from './MarvelHeroGridRow';
function MarvelHerosGrid(props) {
    const { data } = props
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Displaying {data.length} records!
            </div>
            <table className="table">
                <thead>
                    <tr>
                        {
                            columns.map(columnName => {
                                return (
                                    <th
                                        key={`columns-header-${columnName}`}
                                        scope="col">
                                        {columnName}
                                    </th>
                                )
                            })

                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(row => {
                            return (
                                <MarvelHeroGridRow
                                    row={row}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}
export default MarvelHerosGrid;