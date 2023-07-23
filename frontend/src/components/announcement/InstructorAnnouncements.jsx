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
import {deleteAnnouncementId, getInstructorAnnouncements} from "../../service/AnnnouncementService.js";
import {errorNotification, successNotification} from "../../service/notification.js";
import DashboardNavigationBar from "../shared/navigation/DashboardNavigationBar.jsx";
import CreateDrawer from "../drawer/CreateDrawer.jsx";
import AddAnnouncementForm from "./AddAnnouncementForm.jsx";

const InstructorAnnouncements = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState("");

    const fetchInstructorAnnouncements = () => {
        setLoading(true);
        getInstructorAnnouncements().then(res => {
            setAnnouncements(res.data);
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
        fetchInstructorAnnouncements();
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

    if(announcements.length <= 0) {
        return (
            <DashboardNavigationBar
                width='full'
                height='full'
                padding='2em 3em'
            >
                <CreateDrawer
                    addButtonHeader="Add Announcement"
                    drawerHeader="Add New Announcement"
                    form={
                        <AddAnnouncementForm
                            onSuccess={ fetchInstructorAnnouncements }
                        />
                    }
                />
                <Text mt={5}>
                    No Announcement available
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
                addButtonHeader="Add Announcement"
                drawerHeader="Add New Announcement"
                form={
                    <AddAnnouncementForm
                        onSuccess={ fetchInstructorAnnouncements }
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
                        <caption style={{ fontSize: '1.5em' }}>
                            Course Table
                        </caption>
                        <Thead>
                            <Tr>
                                <Th textAlign='center' color='white'>#</Th>
                                <Th textAlign='center' color='white'>Course Name</Th>
                                <Th textAlign='center' color='white'>tittle</Th>
                                <Th textAlign='center' color='white'>announcement</Th>
                                <Th textAlign='center' color='white'>created At</Th>
                                <Th textAlign='center' color='white'>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <>
                                {announcements.map((announcement) => (
                                    <Tr>
                                        <Td textAlign='center'>{announcement.id}</Td>
                                        <Td textAlign='center'>{announcement['courseName']}</Td>
                                        <Td textAlign='center'>{announcement.tittle}</Td>
                                        <Td textAlign='center'>{announcement.announcement}</Td>
                                        <Td textAlign='center'>{announcement['createdAt']}</Td>
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
                                                Delete
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
                                                        Delete Announcement
                                                    </AlertDialogHeader>
                                                    <AlertDialogBody>
                                                        Are you sure you want to delete announcement: { announcement.tittle }? You can't undo this action afterwards.
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
                                                                deleteAnnouncementId(announcement.id).then(() => {
                                                                    successNotification(
                                                                        'Delete Announcement',
                                                                        `Announcement (${ announcement.tittle }) deleted successfully`
                                                                    );
                                                                    fetchInstructorAnnouncements();
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
                                                            Delete
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

export default InstructorAnnouncements;