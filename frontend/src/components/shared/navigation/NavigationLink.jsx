import React from "react";
import {Flex, Icon, Link} from "@chakra-ui/react";

const NavigationLink = ({ icon, route, children }) => {
    return (
        <Link
            href={ route }
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
        >
            <Flex
                align='flex-start'
                padding='4'
                role='group'
                cursor='pointer'
            >
                <Icon
                    marginRight='.5em'
                    fontSize='16'
                    as={ icon }
                />
                { children }
            </Flex>
        </Link>
    );
}

export default NavigationLink;