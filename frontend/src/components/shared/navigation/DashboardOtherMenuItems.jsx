import React from 'react';
import {Link, List, ListItem, Stack, Text} from "@chakra-ui/react";
import {LinkIcon} from "@chakra-ui/icons";
import {FiLogOut, FiSettings, FiUser} from "react-icons/fi";

const DashboardOtherMenuItems = ({ closed, ...props }) => {
    const menuItems = [
        {name: 'My Settings', route: '/my-settings', icon: FiSettings},
        {name: 'My Profile', route: '/my-profile', icon: FiUser},
        {name: 'LogOut', route: '/logout', icon: FiLogOut}
    ];

    return (
        <Stack { ...props }>
            <List
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
            </List>
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
                paddingLeft={5}
                display='flex'
                alignItems='center'
                style={{
                    height: '50px',
                    textDecoration: 'none',
                    position: 'relative'
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

export default DashboardOtherMenuItems;