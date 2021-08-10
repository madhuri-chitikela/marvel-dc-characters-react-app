import columns from './PowerMatrixColumns.json';
function PowerGridRow(props) {
    const { row } = props
    return (
        <tr
        //key={`row-${row.ID}`}
        >
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
export default PowerGridRow;