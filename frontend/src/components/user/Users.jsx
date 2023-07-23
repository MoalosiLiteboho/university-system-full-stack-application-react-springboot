import {useEffect, useState} from "react";
import {Flex, Spinner, Text} from "@chakra-ui/react";
import {errorNotification} from "../../service/notification.js";
import CreateDrawer from "../drawer/CreateDrawer.jsx";
import {getAllUsers} from "../../service/UserService.js";
import {UserRegistrationForm} from "./UserForm.jsx";
import DashboardNavigationBar from "../shared/navigation/DashboardNavigationBar.jsx";
import UserTable from "./UserTable.jsx";
import {FiUserPlus} from "react-icons/fi";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState("");

    const fetchUsers = () => {
        setLoading(true);
        getAllUsers().then(res => {
            setUsers(res.data);
        }).catch(err => {
            setError(err.response.data.message);
            errorNotification(
                err.code,
                err.response.data.message
            );
        }).finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return (
            <DashboardNavigationBar
                width='full'
                height='full'
                padding='1em'
                color='white'
            >
                <Spinner
                    thickness='2px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='#ffffff33'
                    size='xl'
                />
            </DashboardNavigationBar>
        );
    }

    if (err) {
        return (
            <DashboardNavigationBar
                as={ Flex }
                alignItems='center'
                justifyContent='center'
                width='full'
                height='full'
            >
                <Text fontSize='2em'>
                    Oops there was an error
                </Text>
            </DashboardNavigationBar>
        );
    }


    if(users.length <= 0) {
        return (
            <DashboardNavigationBar
                width='full'
                height='full'
                padding='2em 3em'
            >
                <CreateDrawer
                    addButtonHeader="Register User"
                    addButtonIcon={ <FiUserPlus  /> }
                    drawerHeader="Register New User"
                    form={
                        <UserRegistrationForm
                            onSuccess={fetchUsers}
                        />
                    }
                />
                <Text
                    marginTop={5}
                    fontSize='1em'
                >
                    No Users available
                </Text>
            </DashboardNavigationBar>
        );
    }

    return (
        <DashboardNavigationBar
            width='full'
            height='full'
            padding='2em'
        >
            <CreateDrawer
                addButtonHeader="Register User"
                addButtonIcon={ <FiUserPlus  /> }
                drawerHeader="Register New User"
                form={
                    <UserRegistrationForm
                        onSuccess={fetchUsers}
                    />
                }
            />
            <Flex
                marginTop='1em'
                justifyContent='center'
                alignItems='center'
            >
                <UserTable
                    users={ users }
                    onSuccess={ fetchUsers }
                />
            </Flex>
        </DashboardNavigationBar>
    );
}