import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static">
        <Typography variant="h6" color="inherit">
          AppBar
        </Typography>
      </AppBar>
      <Button color="primary">Test Primary</Button>
      <Button color="secondary">Test Secondary</Button>
    </MuiThemeProvider>
  );
}

export default App;
