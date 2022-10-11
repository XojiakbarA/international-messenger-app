import { LoadingButton } from "@mui/lab"
import { Chip, Divider, Slide, Stack, TextField } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login'
import SocialLoginButtons from "./SocialLoginButtons"
import PasswordInput from "../../inputs/PasswordInput"
import {useFormik} from "formik";
import {loginValidationSchema} from "../../../utils/validate"
import {useDispatch, useSelector} from "react-redux"
import {login} from "../../../store/asyncThunks/authAsyncThunk"
import {authSelector} from "../../../store/selectors"

const LoginForm = () => {

    const dispatch = useDispatch()

    const { loading } = useSelector(authSelector)

    const { touched, errors, getFieldProps, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginValidationSchema,
        enableReinitialize: true,
        onSubmit: (data) => {
            dispatch(login({ data }))
        }
    })

    return (
        <Slide in direction={"right"}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        variant={"filled"}
                        label={"Email"}
                        error={ touched.email && Boolean(errors.email) }
                        helperText={ touched.email && errors.email }
                        { ...getFieldProps('email') }
                    />
                    <PasswordInput
                        variant={"filled"}
                        label={"Password"}
                        error={ touched.password && Boolean(errors.password) }
                        helperText={ touched.password && errors.password }
                        { ...getFieldProps('password') }
                    />
                    <LoadingButton
                        variant={"contained"}
                        startIcon={<LoginIcon/>}
                        type={"submit"}
                        loading={loading}
                    >
                        Login
                    </LoadingButton>
                    <Divider><Chip label={"OR"} size={"small"}/></Divider>
                    <SocialLoginButtons disabled={loading}/>
                </Stack>
            </form>
        </Slide>
    )
}

export default LoginForm