import { Box, Button, Card, CardContent, CardHeader, Fade, Stack, Typography } from "@mui/material"
import { useState } from "react"
import LoginForm from "../components/forms/LoginForm"
import RegisterForm from "../components/forms/RegisterForm"

const Auth = () => {

    const [form, setForm] = useState("login")

    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100vh"}
        >
            <Stack spacing={4} alignItems={"center"}>
                <Fade in timeout={500}>
                    <Typography variant={"h4"}>International Messenger</Typography>
                </Fade>
                <Fade in timeout={1000}>
                    <Card sx={{ width: 400, minHeight: 400 }}>
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
                                <RegisterForm/>
                            }
                        </CardContent>
                    </Card>
                </Fade>
            </Stack>
        </Box>
    )
}

export default Auth