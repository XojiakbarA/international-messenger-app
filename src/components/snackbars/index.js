import {useSnackbar} from "notistack"
import {useCallback, useEffect} from "react"
import {IconButton} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import {useSelector} from "react-redux"
import {authSelector} from "../../store/selectors"

const Snackbars = () => {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    const auth = useSelector(authSelector)

    const showSnackbar = useCallback((message, variant) => {
        enqueueSnackbar(message, {
            variant: variant,
            anchorOrigin: { horizontal: "right", vertical: "top" },
            action: key => (
                <IconButton onClick={ e => closeSnackbar(key) } color={"inherit"}>
                    <CloseIcon/>
                </IconButton>
            )
        })
    }, [enqueueSnackbar, closeSnackbar])

    useEffect(() => {
        if (auth.message) {
            showSnackbar(auth.message, auth.error ? "error" : "success")
        }
    }, [showSnackbar, auth.message, auth.error])

}

export default Snackbars