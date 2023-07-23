import {useEffect, useState} from "react";
import {Button, Flex, Spinner, Stack, Table, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import DashboardNavigationBar from "../shared/navigation/DashboardNavigationBar.jsx";
import {errorNotification} from "../../service/notification.js";
import {FiDownload} from "react-icons/fi";
import {getAllEnrollments} from "../../service/EnrollmentService.js";

const AdminEnrollments = () => {
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState("");

    const fetchEnrollments = () => {
        setLoading(true);
        getAllEnrollments().then(res => {
            setEnrollments(res.data);
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
        fetchEnrollments();
    }, [])

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
        )
    }

    if(enrollments.length <= 0) {
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
                    No Course Enrollments available
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
                        <caption style={{ fontSize: '1.9em' }} >Enrollment Table</caption>
                        <Thead>
                            <Tr>
                                <Th textAlign='center' color='white'>#</Th>
                                <Th textAlign='center' color='white'>Instructor Names</Th>
                                <Th textAlign='center' color='white'>Student Names</Th>
                                <Th textAlign='center' color='white'>Course Name</Th>
                                <Th textAlign='center' color='white'>Course Description</Th>
                                <Th textAlign='center' color='white'>Enrollment Date</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <>
                                {enrollments.map((enrollment) => (
                                    <Tr>
                                        <Td textAlign='center'>{enrollment['id']}</Td>
                                        <Td textAlign='center'>{enrollment['instructorNames']}</Td>
                                        <Td textAlign='center'>{enrollment['studentNames']}</Td>
                                        <Td textAlign='center'>{enrollment['courseName']}</Td>
                                        <Td textAlign='center'>{enrollment['courseDescription']}</Td>
                                        <Td textAlign='center'>{enrollment['enrolledAt']}</Td>
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

export default AdminEnrollments;