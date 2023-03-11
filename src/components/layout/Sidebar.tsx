import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { List, ListItemAvatar, Avatar, Button, Typography, Box } from "@mui/material";
import Cookies from "universal-cookie";
import styled from 'styled-components';

import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
//Mui Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

//Styled Component
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: ${(props: any): string => props.small ? '5px' : '2px'};
    padding:7px 0 0 4px;
    width: 100%;
    text-decoration: none;
    color:${(props: any): string => !props.selected ? 'white' : 'white'};
    margin-top: 5px;
    border-radius: 5px;
    &:hover {
        background: #c5bdbd;
    }
    &:active {
        background: #c5bdbd;
    }
`;
const StyledButton = styled(Button)`
    display: flex !important;
    align-items: center !important;
    justify-content: start !important;
    gap: 5px !important;
    padding: 5px 20px !important;
    width: 100% !important;
    margin-top: 5px !important;
    color: black !important;
    border-radius: 5px;
`;

const UserInfo = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
//Styled Component

/**
 * Returns Sidebar component, which is used for navigation and is present throughout the application 
 * after the user logs in to the application
 * 
 * @params - none 
 * @returns JSX.Element Sidebar that is used for navigation
 */

const Sidebar = () => {
    return (
        <Box
            sx={{
                background: "indigo",
                opacity: 0.9,
                padding: "40px 10px 5px 10px", display: "flex",
                flexDirection: "column", gap: "20px",
                minHeight: '100vh',
                justifyContent: "space-between",
                alignItems: "center"
            }}>
            <Box sx={{ display: "flex", width: "100%", flexDirection: "column", gap: "30px", alignItems: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    {/* <img src='https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA' alt="locker" style={{ width: "30px", height: "30px" }} /> */}
                    <Typography variant="h5" component="h2">
                        <Typography variant="h5" component="span" sx={{ color: "white" }}>Admin</Typography>
                    </Typography>
                </Box>
                <NavigationOptions />
            </Box>
            <BottomSection />
        </Box>
    )
}

/**
 * 
 * Returns JSX.Element, reders a list of navigation items 
 * 
 * @params - none
 * @returns JSX.Element Navigation Portion of the sidebar
 */
const NavigationOptions = () => {
    const [path, setPath] = useState("dashboard");
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.substring(1) === "") {
            setPath("dashboard");
        } else {
            setPath(location.pathname.substring(1).split("/")[0]);
        }
    }, [location]);
    return (
        <List sx={{ width: "100%", padding: "0 10px", gap: "5px" }}>
            <CustomListItem link="visitors" path={path} icon={<DashboardIcon />} label="Visitors" />
            <CustomListItem link="packages" path={path} icon={<InventoryIcon />} label="Packages" />
            <CustomListItem link="facilities" path={path} icon={<MiscellaneousServicesIcon />} label="Facilties" />
            <CustomListItem link="vistor/checkin" path={path} icon={<MeetingRoomIcon />} label="Gate Check In/Out" />
            <CustomListItem link="vistor/facility" path={path} icon={<SettingsSuggestIcon />} label="Facilities Check In" />
            <CustomListItem link="report" path={path} icon={<AssessmentIcon />} label="Checkin Report" />
        </List>
    )
}

/**
 * Returns JSX.Element that cotains user session handeling options
 * @params none
 * @returns JSX.Element contains user session handeling options
 */

const BottomSection = () => {
    const navigate = useNavigate();
    const handleOnLogout = () => {
        const cookie = new Cookies();
        cookie.remove("eventSession");
        navigate("/login");
    }
    return (
        <UserInfo sx={{ marginBottom: "15px" }}>
            <Box sx={{ display: "flex", justifyContent: "center", itemsCenter: "center", marginBottom: '35px' }}>
                <StyledButton onClick={handleOnLogout}>
                    <LogoutIcon sx={{ color: "white" }} />
                    <Typography component="span" sx={{ color: "white" }}>Log out</Typography>
                </StyledButton>
            </Box>
        </UserInfo>
    )
}

/**
 * Returns navigation list items
 * @param {label: string, link: string, path:string, icon: any}
 * @returns JSX.Elemnet custom navigation item
 */
const CustomListItem = ({ label, link, path, icon }: { label: string, link: string, path: string, icon: any }) => {
    let newLink = link;
    if (link === "dashboard") {
        newLink = "";
    }
    return (
        <StyledLink to={`/${newLink}`} selected={path === link}>
            <ListItemAvatar>
                <Avatar sx={{ background: "none" }}>
                    {icon}
                </Avatar>
            </ListItemAvatar>
            <Typography sx={{ fontSize: "16px", fontWeight: "500", margin: '10px 0', }}>{label}</Typography>
        </StyledLink>
    )
}

export default Sidebar;