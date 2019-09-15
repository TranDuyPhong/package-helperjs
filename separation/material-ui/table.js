const displayColumn = 'display';
const customHeaderColumn = 'customHeaderColumn';

const RenderTable = function({columns, rows, page, pageSize, isNumberColumn = true, EditComnent, DeleteComponent, ViewComponent, OthersComponent = []}) {
    // let headerTable = null;
    // let bodyTable = null;
    // let footerTable = null;
    // headerTable = columns.map((item, index) => {
    //     if (typeof item[displayColumn] === null || typeof item[displayColumn] === undefined || typeof item[displayColumn] === 'undefined' || isNaN(item[displayColumn])) {
    //         return null;
    //     }
    //     let column = item[displayColumn];
    //     if (typeof item[customHeaderColumn] !== null || typeof item[customHeaderColumn] !== undefined || typeof item[customHeaderColumn] !== 'undefined' && !isNaN(item[customHeaderColumn]) && typeof item[customHeaderColumn] === 'function') {
    //         column = item[customHeaderColumn];
    //         column = column(columns, item, index);
    //     }
    //     return (
    //         <TableColumn key={index}>{column}</TableColumn>
    //     )
    // });
    // bodyTable = rows.map((item, index) => {

    // });
    // return (
    //     <Table>
    //         <TableHead>
    //             {headerTable}
    //         </TableHead>
    //         <TableBody>
    //             {bodyTable}
    //         </TableBody>
    //         <TableFoot>
    //             {footerTable}
    //         </TableFoot>
    //     </Table>
    // )
    return null;
};

module.exports = {
    RenderTable
};