import React from 'react'
import { MessagesBox, Sidebar } from '../components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeContext, useMode } from '../../theme';



function HomePage() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='homePage'>
          <Sidebar/>
          <MessagesBox />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default HomePage