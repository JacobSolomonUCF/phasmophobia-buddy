import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppToolBar from './AppToolBar';
import Root from './Root';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-143267542-3');
ReactGA.pageview(window.location.pathname + window.location.search);

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#005457',
    },
    secondary: {
      main: '#1ab322',
    },
    background: {
      default: '#121212',
      paper: '#2d2d2d',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.98)',
      secondary: 'rgba(255, 255, 255, 0.55)',
    },
  },
});

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <AppToolBar/>
        <Root/>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
