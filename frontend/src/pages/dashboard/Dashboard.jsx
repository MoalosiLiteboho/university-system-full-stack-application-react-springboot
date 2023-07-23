import {Text} from "@chakra-ui/react";
import DashboardNavigationBar from "../../components/shared/navigation/DashboardNavigationBar.jsx";


const Dashboard = () => {
    return (
        <DashboardNavigationBar
            width='full'
            height='full'
            padding='2em'
        >
            <Text>
                Dashboard
            </Text>
        </DashboardNavigationBar>
    );
}

export default Dashboard;