import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader, DrawerOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {FiX} from "react-icons/fi";

const UpdateDrawer = ({form, buttonHeader ,drawerHeader}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                rounded={'full'}
                style={{
                    background: 'gray.200',
                    color: '#000000',
                    borderRadius: '4em',
                    height: '2em',
                    marginLeft: '1em'
                }}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg'
                }}
                onClick={onOpen}
            >
                {buttonHeader}
            </Button>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                size={"lg"}
            >
                <DrawerOverlay />
                <DrawerContent
                    style={{
                        background: 'rgb(255, 255, 255)',
                        color: '#000000'
                    }}
                >
                    <DrawerCloseButton />
                    <DrawerHeader>
                        {drawerHeader}
                    </DrawerHeader>
                    <DrawerBody>
                        {form}
                    </DrawerBody>
                    <DrawerFooter>
                        <Button
                            leftIcon={<FiX/>}
                            colorScheme={"red"}
                            onClick={onClose}>
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default UpdateDrawer;