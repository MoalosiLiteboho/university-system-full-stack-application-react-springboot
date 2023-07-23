import NavigationLinks from "../shared/navigation/NavigationLinks.js";
import Profile from "../profile/Profile.jsx";
import CreateDrawer from "../drawer/CreateDrawer.jsx";
import {Text} from "@chakra-ui/react";
import HomeNavigationBar from "../shared/navigation/HomeNavigationBar.jsx";
import {AddCourseMaterial} from "./MaterialForm.jsx";

const Material = () => {


    return (
        <HomeNavigationBar
            links={NavigationLinks("dashboard")}
            backgroundImage={'login.jpg'}
            profile={<Profile />}
        >
            <CreateDrawer
                addButtonHeader="Add Course Material"
                drawerHeader="Add New Course Material"
                form={
                    <AddCourseMaterial

                    />
                }
            />
            <Text mt={5}>
                No Any Course Material Available available
            </Text>
        </HomeNavigationBar>
    );
}

export default Material;