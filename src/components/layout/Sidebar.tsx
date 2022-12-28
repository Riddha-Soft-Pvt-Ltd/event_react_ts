import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { List, ListItemAvatar, Avatar, Button, Typography, Box } from "@mui/material";
import Cookies from "universal-cookie";
import styled from 'styled-components';
//Mui Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AodIcon from '@mui/icons-material/Aod';

//Styled Component
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: ${(props: any): string => props.small ? '5px' : '2px'};
    padding:7px 0 7px 0;
    width: 100%;
    text-decoration: none;
    background: ${(props: any): string => props.selected ? 'rgba(173, 231, 146,0.3)' : 'none'};
    color:${(props: any): string => !props.selected ? 'gray' : 'black'};
    margin-top: 5px;
    border-radius: 5px;
    &:hover {
        background: ${(props: any): string => props.selected ? 'rgb(173, 231, 146)' : (props.type === "bottom") ? 'rgba(173, 231, 146,0.3)' : 'rgba(173, 231, 146,0.3)'};
    }
    &:active {
        background: #BFBCBC;
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
    &:hover { background: #E5E5E5 !important; }
    &:active { background: #BFBCBC; }
`;

const UserInfo = styled(Box)`
    width: 100%;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 2px solid rgba(49, 80, 161, 0.2);
    display: flex;
    flex-direction: column;
    gap: 10px;
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
                padding: "40px 10px 5px 10px", display: "flex",
                flexDirection: "column", gap: "20px",
                minHeight: '100vh',
                justifyContent: "space-between",
                alignItems: "center"
            }}>
            {/* Top Section */}
            <Box sx={{ display: "flex", width: "100%", flexDirection: "column", gap: "30px", alignItems: "center" }}>
                {/*Heading*/}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    {/* <img src='https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA' alt="locker" style={{ width: "30px", height: "30px" }} /> */}
                    <Typography variant="h5" component="h2">
                        <Typography variant="h5" component="span" sx={{ color: "#3C2A21" }}>Rottery</Typography>
                    </Typography>
                </Box>
                {/*Navigation Options*/}
                <NavigationOptions />
            </Box>
            {/*Bottom Section*/}
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
            // location.pathname.substring(1).split("/")[0]
            // Accounts for sub directories of different main directories
            setPath(location.pathname.substring(1).split("/")[0]);
            //setPath(location.pathname.substring(1));
        }
    }, [location]);
    return (
        <List sx={{ width: "100%", padding: "0 10px", gap: "5px" }}>
            <CustomListItem link="visitors" path={path} icon={<DashboardIcon />} label="Visitors" />
            <CustomListItem link="facilities" path={path} icon={<PeopleAltIcon />} label="Facilties" />
            <CustomListItem link="vistor/checkin" path={path} icon={<CheckCircleOutlineIcon />} label="CheckIn/CheckOut" />
            <CustomListItem link="vistor/facility" path={path} icon={<AodIcon />} label="Check Facilities" />
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
        cookie.remove("isLoggedIn");
        navigate("/login");
    }
    return (
        <UserInfo>
            <StyledLink to="/" type="bottom">
                {/* <Avatar alt="Profile" src='https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA' sx={{ width: 46, height: 46, border: "2px solid rgba(0,0,0,0.7)" }} /> */}
                <Typography component="span" sx={{ fontSize: '20px', paddingLeft: "15px" }}>Admin</Typography>
            </StyledLink>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%", marginBottom: '35px' }}>
                <StyledButton onClick={handleOnLogout}>
                    <LogoutIcon />
                    <Typography component="span">Log out</Typography>
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
                <Avatar>
                    {icon}
                </Avatar>
            </ListItemAvatar>
            <Typography sx={{ fontSize: "16px", fontWeight: "500", margin: '10px 0', }}>{label}</Typography>
        </StyledLink>
    )
}

export default Sidebar;