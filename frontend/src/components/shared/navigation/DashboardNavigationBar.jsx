import React, {useState} from "react";
import {HStack, Stack, VStack} from "@chakra-ui/react";
import DashboardSideMenu from "./DashboardSideMenu.jsx";
import MenuTopBar from "../../menu/MenuTopBar.jsx";

const DashboardNavigationBar = ({ children, ...props }) => {
    let [closed, setClosed] = useState(false);
    const handleOnClickMenuIcon = () => setClosed(!closed);

    return (
        <HStack
            width='full'
            height='100vh'
            color='white'
            style={{
                background: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), 
                    url(src/assets/login.jpg`,
                backgroundSize: 'cover'
            }}
            spacing='0'
        >
            <DashboardSideMenu
                closed={ closed }
            />
            <VStack
                as='main'
                spacing={0}
                width='full'
                height='full'
                backgroundColor='transparent'
            >
                <MenuTopBar
                    handleOnClickMenuIcon={ handleOnClickMenuIcon }
                />
                <Stack
                    { ...props }
                >
                    {children}
                </Stack>
            </VStack>
        </HStack>
    );
}

export default DashboardNavigationBar;