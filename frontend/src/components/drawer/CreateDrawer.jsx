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

const CreateDrawer = ({addButtonHeader, addButtonIcon, drawerHeader, form}) => {
    let { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                backgroundColor='#ffffff33'
                backdropFilter='blur(15px)'
                WebkitBackdropFilter='blur(15px)'
                borderRadius='2em'
                width='fit-content'
                color='white'
                _hover={{ backgroundColor: '#ffffff55' }}
                leftIcon={ addButtonIcon }
                onClick={onOpen}
            >
                {addButtonHeader}
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
                    <DrawerCloseButton
                        _hover={{
                            background: 'rgb(255, 0, 0)'
                        }}
                    />
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
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default CreateDrawer;