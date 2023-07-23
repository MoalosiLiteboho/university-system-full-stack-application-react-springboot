import React from 'react';
import {Stack, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import DeleteAlertDialog from "../dialog/DeleteAlertDialog.jsx";
import UpdateDrawer from "../drawer/UpdateDrawer.jsx";
import {UserUpdateForm} from "./UserForm.jsx";

const UserTable = ({ users, onSuccess }) => {
    return (
        <Stack
            width='full'
            backgroundColor='#ffffff33'
            backdropFilter='blur(15px)'
            WebkitBackdropFilter='blur(15px)'
            color='#ffffff'
            padding='0.7em 1em'
            borderRadius='1em'
        >
            <Table width='full'>
                <caption style={{ fontSize: '1.5em' }} >
                    Users Table
                </caption>
                <Thead>
                    <Tr>
                        <Th textAlign='center' color='white'>#</Th>
                        <Th textAlign='center' color='white'>Fist name</Th>
                        <Th textAlign='center' color='white'>Last Name</Th>
                        <Th textAlign='center' color='white'>Date Of Birth</Th>
                        <Th textAlign='center' color='white'>Email</Th>
                        <Th textAlign='center' color='white'>Gender</Th>
                        <Th textAlign='center' color='white'>Authority</Th>
                        <Th textAlign='center' color='white'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((user) => (
                        <Tr>
                            <Td textAlign='center'>{user['id']}</Td>
                            <Td textAlign='center'>{user['firstname']}</Td>
                            <Td textAlign='center'>{user['lastname']}</Td>
                            <Td textAlign='center'>{user['dateOfBirth']}</Td>
                            <Td textAlign='center'>{user['email']}</Td>
                            <Td textAlign='center'>{user['gender']}</Td>
                            <Td textAlign='center'>{user['roles']}</Td>
                            <Td textAlign='center'>
                                <DeleteAlertDialog
                                    name={"User: " + user['firstname'] + " " + user['lastname']}
                                    id={user['id']}
                                    functionName='User'
                                    onSuccess={ onSuccess }
                                />
                                <UpdateDrawer
                                    buttonHeader="Update"
                                    drawerHeader={"Update User: " + user['firstname'] + " " + user['lastname']}
                                    form={
                                        <UserUpdateForm
                                            onSuccess={ onSuccess }
                                            id={ user.id }
                                            initialValues={{
                                                firstname: user['firstname'],
                                                lastname: user['lastname'],
                                                dateOfBirth: user['dateOfBirth'],
                                                email: user['email'],
                                                gender: user['gender']
                                            }}
                                        />
                                    }
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Stack>
    );
}

export default UserTable;