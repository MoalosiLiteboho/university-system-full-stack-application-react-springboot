import React from "react";
import {Flex, List, ListItem, VStack} from "@chakra-ui/react";
import NavigationLink from "./NavigationLink.jsx";
import Logo from "../../logo/Logo.jsx";
import NavigationLinks from "./NavigationLinks.js";

const HomeNavigationBar = ({ children }) => {
    return (
        <VStack
            width='full'
            height='100vh'
            spacing='0'
            color='white'
            style={{
                background: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),
                    url(src/assets/login.jpg) center no-repeat`,
                backgroundSize: 'cover'
            }}
        >
            <Flex
                width='full'
                height='3.5em'
                justifyContent='space-between'
                alignItems='center'
                padding='0 .5em'
                backgroundColor='#ffffff33'
                backdropFilter='blur(15px)'
                WebkitBackdropFilter='blur(15px)'
            >
                <Logo />
                <HomeNavigation />
            </Flex>
            {children}
        </VStack>
    );
}

const HomeNavigation = () => {
    let menuLinks = NavigationLinks("home");
    return (
        <List display='flex'>
            <>
                {menuLinks.map((menuLink, index) => (
                    <ListItem key={ index }>
                        <NavigationLink
                            icon={ menuLink.icon }
                            route={ menuLink.route }
                        >
                            { menuLink.name }
                        </NavigationLink>
                    </ListItem>
                ))}
            </>
        </List>
    );
}

export default HomeNavigationBar;