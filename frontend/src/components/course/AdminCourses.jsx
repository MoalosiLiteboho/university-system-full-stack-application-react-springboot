import {useEffect, useState} from "react";
import {Button, Flex, Spinner, Stack, Table, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {FiDownload} from "react-icons/fi";
import {getAllCourses} from "../../service/CourseService.js";
import {errorNotification} from "../../service/notification.js";
import DashboardNavigationBar from "../shared/navigation/DashboardNavigationBar.jsx";

const InstructorCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState('');

    const fetchAdminCourses = () => {
        setLoading(true);
        getAllCourses().then(res => {
            setCourses(res.data);
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
        fetchAdminCourses();
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

    if(courses.length <= 0) {
        return (
            <DashboardNavigationBar
                width='full'
                height='full'
                padding='2em 3em'
            >
                <Button
                    backgroundColor='#ffffff33'
                    backdropFilter='blur(15px)'
                    WebkitBackdropFilter='blur(15px)'
                    borderRadius='2em'
                    width='fit-content'
                    color='white'
                    _hover={{ backgroundColor: '#ffffff55' }}
                    leftIcon={ <FiDownload /> }
                >
                    Generate Report
                </Button>
                <Text mt={5}>
                    No Courses available
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
            <Button
                backgroundColor='#ffffff33'
                backdropFilter='blur(15px)'
                WebkitBackdropFilter='blur(15px)'
                borderRadius='2em'
                width='fit-content'
                color='white'
                _hover={{ backgroundColor: '#ffffff55' }}
                leftIcon={ <FiDownload /> }
            >
                Generate Report
            </Button>
            <Flex
                marginTop='1em'
                justifyContent='center'
                alignItems='center'
            >
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
                        <caption style={{ fontSize: '1.5em' }}>
                            Course Table
                        </caption>
                        <Thead>
                            <Tr>
                                <Th textAlign='center' color='white'>#</Th>
                                <Th textAlign='center' color='white'>Name</Th>
                                <Th textAlign='center' color='white'>Description</Th>
                                <Th textAlign='center' color='white'>Retire</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <>
                                {courses.map((course) => (
                                    <Tr>
                                        <Td textAlign='center'>{course.id}</Td>
                                        <Td textAlign='center'>{course.name}</Td>
                                        <Td textAlign='center'>{course.description}</Td>
                                        <Td textAlign='center'>{course.retire}</Td>
                                    </Tr>
                                ))}
                            </>
                        </Tbody>
                    </Table>
                </Stack>
            </Flex>
        </DashboardNavigationBar>
    );
}

export default InstructorCourses;