import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import App from './components/App';

const theme = createMuiTheme({
  palette: createPalette({
    type: 'light', // Switching the light mode on is a single property value change.
  }),
});

function DarkTheme() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<DarkTheme />, document.getElementById('root'));