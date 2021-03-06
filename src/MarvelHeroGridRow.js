import columns from './columns.json';
function MarvelHeroGridRow(props) {
    const { row } = props
    return (
        <tr
            key={`row-${row.ID}`
            }>

            {
                columns.map(columnName => {
                    return (
                        <td
                            key={`row-${row.ID}-cell-${columnName}`}>
                            {row[columnName]}
                        </td>
                    )
                })
            }
        </tr>
    )
}
export default MarvelHeroGridRow;