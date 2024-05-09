import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import Logo from "../assets/img/logo.png";


function Navbar() {
  return (
    <AppBar sx={{ background: "#111", textAlign: "start", padding: "5px" }}>
    <Toolbar>
      <Container maxWidth="md">
        <img src={Logo} alt="Logo" width="150" />
      </Container>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar
