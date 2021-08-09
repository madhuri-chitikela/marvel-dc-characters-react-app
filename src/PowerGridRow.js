import PowerGridFormattedCell from './PowerGridFormattedCell'
import columns from './powerGridColumns.json'
export default function PowerGridRow(props) {
    const { row } = props
    return (
        <tr>
            {
                columns.map(columnName => {
                    return (
                        <td
                            key={`row-${row.ID}-cell-${columnName}`}
                        >
                            {
                                columnName === "Name" ?
                                    row[columnName] :
                                    <PowerGridFormattedCell data={row[columnName]} />

                            }
                        </td>
                    )
                })
            }
        </tr>
    )
}