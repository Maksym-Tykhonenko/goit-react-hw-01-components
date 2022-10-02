
import {Table, TableThead, TableRow, TableHeader, TableBody, TableData} from './TransactionHistory.style';

export const TransactionHistory = ({items}) => {
    return (
        <Table>
            <TableThead>
              <TableRow>
                <TableHeader>Type</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Currency</TableHeader>
              </TableRow>
            </TableThead>

            <TableBody>
                {items.map( transaction  => {
                    return (
                 <TableRow key={transaction.id}>
                <TableData>{transaction.type }</TableData>
                <TableData>{transaction.amount }</TableData>
                <TableData>{transaction.currency }</TableData>
              </TableRow>
                    )
                })}
             
            </TableBody>
        </Table>
    )
}