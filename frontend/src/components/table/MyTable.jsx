import React from 'react';
import {Table, Tbody, Th, Thead, Tr} from "@chakra-ui/react";

const MyTable = ({ caption, tableHeads, ...props }) => {
    return (
        <Table{ ...props }>
            <caption>{ caption }</caption>
            <Thead>
                <Tr>
                    <>
                        {tableHeads.map(head => (
                            <Th>{ head }</Th>
                        ))}
                    </>
                </Tr>
            </Thead>
            <Tbody>

            </Tbody>
        </Table>
    );
}

export default MyTable;