import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    Button,
    DrawerOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {useRef} from "react";
import {deleteCourse} from "../../service/CourseService.js";
import {errorNotification, successNotification} from "../../service/notification.js";
import {deleteUser} from "../../service/UserService.js";
import {deleteAnnouncementId} from "../../service/AnnnouncementService.js";

const DeleteAlertDialog = ({ id ,name, functionName, onSuccess }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    const deletion = () => {
        if(functionName === "Course") {
            deleteCourse(id).then(() => {
                successNotification(
                    'Course deleted',
                    `${name} was successfully deleted`
                );
                onSuccess();
            }).catch(err => {
                errorNotification(
                    err.code,
                    err.response.data.message
                );
            }).finally(() => {
                onClose()
            });
        }

        if(functionName === "User") {
            deleteUser(id)
                .then(res => {
                    successNotification(
                        'User deleted',
                        `${name} was successfully deleted`
                    );
                    onSuccess();
                })
                .catch(err => {
                    errorNotification(
                        err.code,
                        err.response.data.message
                    );
                })
                .finally(() => {
                    onClose()
                });
        }

        if(functionName === "Announcement") {
            deleteAnnouncementId(id).then(() => {
                successNotification(
                    'Announcement deleted',
                    `${name} was successfully deleted`
                );
                onSuccess();
            }).catch(err => {
                errorNotification(
                    err.code,
                    err.response.data.message
                );
            }).finally(() => {
                onClose()
            });
        }

        if(functionName === "Enrollment") {
            deleteAnnouncementId(id).then(() => {
                successNotification(
                    'Student un-enrolled',
                    `${name} was successfully deleted`
                );
                onSuccess();
            }).catch(err => {
                errorNotification(
                    err.code,
                    err.response.data.message
                );
            }).finally(() => {
                onClose()
            });
        }
    }

    return (
        <>
            <Button
                style={{
                    background: '#ff000088',
                    color: '#ffffff',
                    borderRadius: '4em',
                    height: '2em'
                }}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg'
                }}
                _focus={{
                    bg: 'green.500'
                }}
                onClick={onOpen}
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
                        Delete {functionName}
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        Are you sure you want to delete {name}? You can't undo this action afterwards.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button
                            ref={ cancelRef }
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            colorScheme='red'
                            marginLeft={3}
                            onClick={ deletion }
                        >
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default DeleteAlertDialog;