import { LoadingButton } from "@mui/lab"
import { Slide, Stack, TextField } from "@mui/material"
import HowToRegIcon from '@mui/icons-material/HowToReg'

const RegisterForm = () => {

    return (
        <Slide in direction={"left"}>
            <form>
                <Stack spacing={2}>
                    <TextField
                        variant={"standard"}
                        label={"Name"}
                    />
                    <TextField
                        variant={"standard"}
                        label={"Email"}
                    />
                    <TextField
                        variant={"standard"}
                        label={"Password"}
                    />
                    <TextField
                        variant={"standard"}
                        label={"Confirm Password"}
                    />
                    <LoadingButton
                        variant={"contained"}
                        startIcon={<HowToRegIcon/>}
                    >
                        Register
                    </LoadingButton>
                </Stack>
            </form>
        </Slide>
    )
}

export default RegisterForm