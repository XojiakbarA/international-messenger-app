import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useTheme } from './hooks/useTheme'
import Layout from './components/Layout'
import Chat from './components/Chat'
import Auth from './pages/Auth'
import {SnackbarProvider} from "notistack"
import Snackbars from "./components/snackbars"
import OAuth2RedirectHandler from "./oauth2/OAuth2RedirectHandler"

const App = () => {

    const { theme } = useTheme()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/auth"} element={<Auth/>}/>
                    <Route path={"/chats"} element={<Layout/>}>
                        <Route index element={<div/>}/>
                        <Route path={"/chats/:id"} element={<Chat/>}/>
                    </Route>
                    <Route path={"*"} element={<Navigate to={"/chats"}/>}/>
                    <Route path={"/oauth2/redirect"} element={<OAuth2RedirectHandler/>}/>
                </Routes>
            </BrowserRouter>
            <SnackbarProvider maxSnack={5}>
                <Snackbars/>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App