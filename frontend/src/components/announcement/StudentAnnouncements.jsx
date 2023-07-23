import React, {useEffect, useState} from 'react';
import {Flex, Spinner, Stack, Table, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {getStudentAnnouncements} from "../../service/AnnnouncementService.js";
import {errorNotification} from "../../service/notification.js";
import DashboardNavigationBar from "../shared/navigation/DashboardNavigationBar.jsx";

const StudentAnnouncements = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState("");

    const fetchStudentAnnouncements = () => {
        setLoading(true);
        getStudentAnnouncements().then(res => {
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
        fetchStudentAnnouncements()
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
                            Announcements Table
                        </caption>
                        <Thead>
                            <Tr>
                                <Th textAlign='center' color='white'>#</Th>
                                <Th textAlign='center' color='white'>instructor Names</Th>
                                <Th textAlign='center' color='white'>Course Name</Th>
                                <Th textAlign='center' color='white'>tittle</Th>
                                <Th textAlign='center' color='white'>announcement</Th>
                                <Th textAlign='center' color='white'>created At</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <>
                                {announcements.map((announcement) => (
                                    <Tr>
                                        <Td textAlign='center'>{announcement.id}</Td>
                                        <Td textAlign='center'>{announcement['instructorNames']}</Td>
                                        <Td textAlign='center'>{announcement['courseName']}</Td>
                                        <Td textAlign='center'>{announcement.tittle}</Td>
                                        <Td textAlign='center'>{announcement.announcement}</Td>
                                        <Td textAlign='center'>{announcement['createdAt']}</Td>
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

export default StudentAnnouncements;