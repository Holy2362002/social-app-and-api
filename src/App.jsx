import { Container } from '@mui/material'
import AppDrawer from './components/AppDrawer.jsx'
import Header from './components/Header.jsx'
import Posts from './pages/Posts.jsx'
import View from './pages/View.jsx'
import Form from './components/Form.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import { Outlet } from 'react-router'
export default function App() {
  return <div>
    <Header />
    <AppDrawer />
    <Container sx={{mt: 2, mb: 2}}>
      <Outlet />
    </Container>
  </div>
}