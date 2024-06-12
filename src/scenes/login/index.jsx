import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.auth)
  const navigate = useNavigate()
  console.log(user)

  useEffect(() => {
    if(user.isAuthenticated)navigate("/")
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target[0] && e.target[2]){
      dispatch(loginUser(e.target[0].value, e.target[2].value))
    }
  };
  return (
    <Box m="20px">
      <Header
        title="LOGIN"
        subtitle="Solo podrás loguearte si sos Administrador"
      />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            color="secondary"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            color="secondary"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            variant="contained"
            color={"secondary"}
            style={{ backgroundColor: "" }}
          >
            Ingresar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Login;
