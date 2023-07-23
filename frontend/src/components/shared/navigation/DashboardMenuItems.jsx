import React from 'react';
import {Link, ListItem, Stack, Text, UnorderedList} from "@chakra-ui/react";
import {LinkIcon} from "@chakra-ui/icons";
import NavigationLinks from "./NavigationLinks.js";

const DashboardMenuItems = ({ closed, ...props }) => {
    let menuItems = NavigationLinks('dashboard');
    return (
        <Stack { ...props }>
            <UnorderedList
                style={{
                    listStyle: 'none'
                }}
            >
                <>
                    {menuItems.map(item => (
                        <NavLink
                            key={ item.name }
                            route={ item.route }
                            icon={ item.icon }
                            closed={ closed }
                        >
                            { item.name }
                        </NavLink>
                    ))}
                </>
            </UnorderedList>
        </Stack>
    );
}

const NavLink = ({ route, icon, children, closed }) => {
    return (
        <ListItem
            height='2.4em'
            display='flex'
            alignItems='center'
        >
            <Link
                href={ route }
                paddingLeft={1}
                display='flex'
                alignItems='center'
                style={{
                    height: '50px',
                    textDecoration: 'none',
                    position: 'relative'
                }}
                _hover={{
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '-7px',
                        height: '5px',
                        width: '5px',
                        borderRadius: '50%',
                        backgroundColor: 'blue'
                    }
                }}
            >
                <LinkIcon
                    as={ icon }
                    fontSize={16}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    marginRight={2}
                    marginLeft='-0.5'
                />
                <Text
                    fontSize='14px'
                    fontWeight='400'
                    opacity={ closed ? '0' : '' }
                    pointerEvents={ closed ? 'none' : '' }
                    transition='all 0.4s ease'
                    transitionDelay='0.1s'
                >
                    { children }
                </Text>
            </Link>
        </ListItem>
    );
}

export default DashboardMenuItems;