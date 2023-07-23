import React from 'react';
import {Flex, VStack} from "@chakra-ui/react";
import Logo from "../../logo/Logo.jsx";
import DashboardMenuItems from "./DashboardMenuItems.jsx";
import DashboardOtherMenuItems from "./DashboardOtherMenuItems.jsx";

const DashboardSideMenu = ({ closed }) => {
    return (
        <VStack
            as='aside'
            spacing={0}
            maxWidth={closed ? '5em' : '20em'}
            width='full'
            height='full'
            padding={3}
            alignItems='center'
            flexDirection='column'
            backgroundColor='whiteAlpha.200'
            backdropFilter='blur(15px)'
            WebkitBackdropFilter='blur(15px)'
            transition='all 0.5s ease'
        >
            <Logo
                spacing={ closed ? 8 : 3 }
                paddingLeft={3}
                width='full'
                transition='all 0.5s ease'
            />
            <DashboardMenuItems
                as={ Flex }
                marginTop={2}
                height='full'
                width='full'
                flexDirection='column'
                justifyContent='space-between'
                closed={ closed }
            />
            <DashboardOtherMenuItems
                as={ Flex }
                borderTop='1px solid white'
                height='8.5em'
                width='full'
                flexDirection='column'
                justifyContent='space-between'
                closed={ closed }
                padding='0.5em 0'
            />
        </VStack>
    );
}

export default DashboardSideMenu;