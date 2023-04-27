import { themeSettings } from "./theme";
import {useMemo} from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
function App() {
  const theme=useMemo(() => createTheme(themeSettings),[]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      </ThemeProvider>
    </div>
  )
}
export default App;