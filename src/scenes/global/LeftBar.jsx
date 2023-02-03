import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyle = makeStyles({
  container: {
    display: "flex",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 100,
  },
});

const LeftBar = () => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const classes = useStyle();

  const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <MenuItem
        active={selected === title}
        onClick={() => {
          setSelected(title);
        }}
        icon={icon}
        component={<Link to={to} />}
      >
        {!isCollapsed ? <Typography>{title}</Typography> : ""}
      </MenuItem>
    );
  };

  return (
    <Box sx={{  }}>
      <ProSidebarProvider
        style={{ width: `${!isCollapsed ? "250px" : "50px"}` }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  width: "full",
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "10px",
                  width: `${!isCollapsed ? "250px" : "50px"}`,
                  color: disabled ? colors.primary[100] : colors.primary[100],
                  backgroundColor: active ? colors.primary[600] : undefined,
                  color: active ? "#f2f0f0" : undefined,
                  "&:hover": {
                    backgroundColor: colors.primary[600],
                    color: "#f2f0f0",
                  },
                };
            },
          }}
          collapsed={isCollapsed}
          defaultCollapsed
          iconShape="square"
          style={{
            backgroundColor: colors.primary[400],
            height: "100%",
            width: !isCollapsed ? "250px" : "50px",
            display: "flex",
          }}
        >
          {/* // Menu Icon and App Name */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed ? (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="0px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN PORTAL
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            ) : (
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            )}
          </MenuItem>
          {/* // User Info Section Image - Name - Position */}
          {!isCollapsed && (
            <Box
              mb="15px"
              display="flex"
              justifyContent="center"
              alignContent="center"
              gap={2}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={`../../assets/user.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ross Taylor
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Project Manager
                </Typography>
              </Box>
            </Box>
          )}
          {/* // MenuItems Dashboard - Manage Team - Contacts -Invoices...  */}
          <Box display="flex" flexDirection="column">
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.greenAccent[500]}
              sx={{
                textAlign: `${isCollapsed ? "center" : "start"}`,
                padding: `20px 0 0 ${isCollapsed ? "0" : "20px"}`,
              }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Typography
              variant="h6"
              color={colors.greenAccent[500]}
              sx={{
                textAlign: `${isCollapsed ? "center" : "start"}`,
                padding: `20px 0 0 ${isCollapsed ? "0" : "20px"}`,
              }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.greenAccent[500]}
              sx={{
                textAlign: `${isCollapsed ? "center" : "start"}`,
                padding: `20px 0 0 ${isCollapsed ? "0" : "20px"}`,
              }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
          {/* {isCollapsed && (
            <Box display="flex" flexDirection="column" alignItems="center">
              <PeopleOutlinedIcon />
              <CalendarTodayOutlinedIcon />
            </Box>
          )} */}
        </Menu>
      </ProSidebarProvider>
    </Box>
  );
};

export default LeftBar;
