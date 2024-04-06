import { Button, Typography, styled } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    "&:hover": { backgroundColor: "lightblue" },
    "&:disabled": { backgroundColor: "gray", color: "white" },
  }));
  return (
    <div>
      <Button variant='text'>Text</Button>
      <Button
        variant='contained'
        color='otherColor'
        size='medium '
        startIcon={<SettingsIcon />}
      >
        Settings
      </Button>
      <Button
        variant='contained'
        color='success'
        size='medium '
        startIcon={<AddIcon />}
      >
        Add New Post
      </Button>
      <Button variant='outlined' disabled>
        Outlined
      </Button>
      <Typography variant='h1' component='p'>
        It uses h1 style but is a p tag
      </Typography>
      <Button
        variant='contained'
        disabled
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          "&:hover": { backgroundColor: "lightblue" },
          "&:disabled": { backgroundColor: "gray", color: "white" },
        }}
      >
        Custom style
      </Button>
      <BlueButton variant='outlined'>My Button</BlueButton>
      <Button
        variant='contained'
        disabled
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          "&:hover": { backgroundColor: "lightblue" },
          "&:disabled": { backgroundColor: "gray", color: "white" },
        }}
      >
        Custom style
      </Button>
    </div>
  );
}

export default App;
