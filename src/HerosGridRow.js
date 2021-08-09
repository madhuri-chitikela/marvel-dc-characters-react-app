import columns from './columns.json'
export default function HerosGridRow(props) {
    const { row } = props
    return (
        <tr>
            {
                columns.map(columnName => {
                    return (
                        <td
                            key={`row-${row.ID}-cell-${columnName}`}
                        >
                            {row[columnName]}
                        </td>
                    )
                })
            }
        </tr>
    )
}