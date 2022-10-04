import PropTypes from 'prop-types';
import {
     Table,
     TableThead,
     TableRow,
     TableHeader,
     TableBody,
     TableData
} from './TransactionHistory.style';

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
                {items.map( ({id, type, amount, currency })  => {
                    return (
                 <TableRow key={ id}>
                <TableData>{ type }</TableData>
                <TableData>{ amount }</TableData>
                <TableData>{ currency }</TableData>
              </TableRow>
                    )
                })}
             
            </TableBody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object.isRequired),
}