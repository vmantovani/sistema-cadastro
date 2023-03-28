import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes'
import { MenuLateral } from './Shared/Components'
import { AppThemeProvider } from './Shared/Contexts/ThemeContext'

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  )
}

export default App
