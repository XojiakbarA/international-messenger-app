import { Box, Button, Card, CardContent, CardHeader, Fade, Stack, Typography, useMediaQuery } from "@mui/material"
import { useState } from "react"
import LoginForm from "../components/forms/LoginForm"
import RegisterForm from "../components/forms/RegisterForm"
import {useSelector} from "react-redux"
import {authSelector} from "../store/selectors"
import {Navigate} from "react-router-dom"

const Auth = () => {

    const isDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    const [form, setForm] = useState("login")

    const { isAuth } = useSelector(authSelector)

    if (isAuth) return <Navigate to={"/"}/>

    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100vh"}
        >
            <Stack spacing={4} alignItems={"center"}>
                <Fade in timeout={500}>
                    <Typography variant={isDownSm ? "h5" : "h4"}>International Messenger</Typography>
                </Fade>
                <Fade in timeout={1000}>
                    <Card sx={{ minWidth: isDownSm ? 360 : 400, minHeight: 435 }}>
                        <CardHeader
                            title={form === "login" ? "Login" : "Register"}
                            action={
                                <Button onClick={ e => setForm(prev => prev === "login" ? "register" : "login") }>
                                    { form === "login" ? "Register" : "Login" }
                                </Button>
                            }
                        />
                        <CardContent>
                            {
                                form === "login"
                                ?
                                <LoginForm/>
                                :
                                <RegisterForm setForm={setForm}/>
                            }
                        </CardContent>
                    </Card>
                </Fade>
            </Stack>
        </Box>
    )
}

export default Auth