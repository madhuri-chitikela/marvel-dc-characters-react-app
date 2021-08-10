import columns from './PowerMatrixColumns.json';
import PowerGridRow from './PowerGridRow';
function PowerGrid(props) {

    const { data } = props
    const filteredData = [...data]
    if (filteredData.length > 100) {
        filteredData.length = 100
    }
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Displaying {filteredData.length} records!
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
                        filteredData.map(row => {
                            return (
                                <PowerGridRow
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
export default PowerGrid;