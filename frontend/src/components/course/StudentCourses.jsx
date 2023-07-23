import React, {useEffect, useRef, useState} from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    Button,
    DrawerOverlay,
    Flex,
    Spinner,
    Stack,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure
} from "@chakra-ui/react";
import {errorNotification, successNotification} from "../../service/notification.js";
import DashboardNavigationBar from "../shared/navigation/DashboardNavigationBar.jsx";
import {getAllStudentEnrollments, unEnrollInACourse} from "../../service/EnrollmentService.js";
import CreateDrawer from "../drawer/CreateDrawer.jsx";
import CourseEnrollmentForm from "../enrollment/CourseEnrollmentForm.jsx";

const StudentCourses = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState('');

    const fetchStudentCourses = () => {
        setLoading(true);
        getAllStudentEnrollments().then(res => {
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
        fetchStudentCourses();
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
                <CreateDrawer
                    addButtonHeader="Course Enrollment"
                    drawerHeader="Course Enrollment"
                    form={
                        <CourseEnrollmentForm
                            onSuccess={ fetchStudentCourses }
                        />
                    }
                />
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
            padding='2em 3em'
        >
            <CreateDrawer
                addButtonHeader="Course Enrollment"
                drawerHeader="Course Enrollment"
                form={
                    <CourseEnrollmentForm
                        onSuccess={ fetchStudentCourses }
                    />
                }
            />
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
                        <caption style={{ fontSize: '1.5em' }}>Course Table</caption>
                        <Thead>
                            <Tr>
                                <Th textAlign='center' color='white'>#</Th>
                                <Th textAlign='center' color='white'>instructor names</Th>
                                <Th textAlign='center' color='white'>Course name</Th>
                                <Th textAlign='center' color='white'>course description</Th>
                                <Th textAlign='center' color='white'>enrollment date</Th>
                                <Th textAlign='center' color='white'>action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <>
                                {courses.map((course) => (
                                    <Tr>
                                        <Td textAlign='center'>{ course.id }</Td>
                                        <Td textAlign='center'>{ course.instructorNames }</Td>
                                        <Td textAlign='center'>{ course.courseName }</Td>
                                        <Td textAlign='center'>{ course.courseDescription }</Td>
                                        <Td textAlign='center'>{ course.enrolledAt }</Td>
                                        <Td textAlign='center'>
                                            <Button
                                                backgroundColor='#ff000088'
                                                color='white'
                                                borderRadius='4em'
                                                height='2em'
                                                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                                                _focus={{ backgroundColor: 'red.500' }}
                                                onClick={ onOpen }
                                            >
                                                Un-Enrollment
                                            </Button>
                                            <AlertDialog
                                                isOpen={isOpen}
                                                leastDestructiveRef={cancelRef}
                                                onClose={onClose}
                                            >
                                                <DrawerOverlay />
                                                <AlertDialogContent>
                                                    <AlertDialogHeader
                                                        fontSize='lg'
                                                        fontWeight='bold'
                                                    >
                                                        Un-Enroll Course
                                                    </AlertDialogHeader>
                                                    <AlertDialogBody>
                                                        Are you sure you want to un-enrolled from { course.courseName }? You can't undo this action afterwards.
                                                    </AlertDialogBody>
                                                    <AlertDialogFooter>
                                                        <Button
                                                            ref={ cancelRef }
                                                            onClick={ onClose }
                                                        >
                                                            Cancel
                                                        </Button>
                                                        <Button
                                                            colorScheme='red'
                                                            marginLeft={3}
                                                            onClick={() => {
                                                                unEnrollInACourse(course.id).then(() => {
                                                                    successNotification(
                                                                        'Un-Enrolled In A Course',
                                                                        `Un-enrolled in a course (${ course.courseName }) successfully`
                                                                    );
                                                                    fetchStudentCourses();
                                                                }).catch(err => {
                                                                    errorNotification(
                                                                        err.code,
                                                                        err.response.data.message
                                                                    );
                                                                }).finally(() => {
                                                                    onClose();
                                                                })
                                                            }}
                                                        >
                                                            Un-Enroll
                                                        </Button>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </Td>
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

export default StudentCourses;