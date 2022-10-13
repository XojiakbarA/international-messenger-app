import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {oauth2Login, oauth2LoginError} from "../store/slices/authSlice";

const OAuth2RedirectHandler = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [params] = useSearchParams()

    const token = params.get("token")
    const error = params.get("error")

    const message = params.get("message")

    useEffect(() => {
        if (token) {
            dispatch(oauth2Login({ message, token }))
        }
        if (error) {
            dispatch(oauth2LoginError({ message: error }))
        }
        navigate("/")
    }, [token, error, message, navigate, dispatch])
}

export default OAuth2RedirectHandler