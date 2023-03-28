import { Button } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppThemeContext } from '../Shared/Contexts/ThemeContext'

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext()

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Toggle Theme
          </Button>
        }
      />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
