import { Box, IconButton, MenuItem, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { logoutUser } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const dispatch = useDispatch()

  const authState = useSelector(state => state.auth)
/* 
  useEffect(() => {
    dispatch(loginUser('Emiliano', '123456'));
  }, []) */
  
  console.log(authState)

  return (
    <Box display="flex" justifyContent="space-between" p={2}>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        {/* <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        <IconButton onClick={()=> dispatch(logoutUser())}>
          <PersonOutlinedIcon />
        </IconButton>
   {/*      <MenuItem disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem> */}
      </Box>
    </Box>
  );
};

export default Topbar;
