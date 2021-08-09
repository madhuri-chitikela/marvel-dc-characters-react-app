import HerosGridRow from "./HerosGridRow"
import columns from './columns.json'
function HerosGrid(props) {
    const { data } = props
    const filteredData = [...data]
    if (filteredData.length > 100) {
        filteredData.length = 100
    }
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Showing {filteredData.length} recods
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
                        filteredData.map(row => {
                            return (
                                <HerosGridRow
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
export default HerosGrid;