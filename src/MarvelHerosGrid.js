import MarvelHerosGridRow from "./MarvelHerosGridRow"
import columns from './columns.json'
function MarvelHerosGrid(props) {
    const { data } = props
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Showing {data.length} recods
            </div>
            <table className="table table-sm">
                <thead>
                    <tr>
                        {
                            columns.map(columnName => {
                                return (
                                    <th
                                        key={`col-header-${columnName}`}
                                        scope="col"
                                    >
                                        {columnName}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody style={{ height: "500px", overflow: "auto" }}>
                    {
                        data.map(row => {
                            return (
                                <MarvelHerosGridRow
                                    key={`row-${row.ID}`}
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