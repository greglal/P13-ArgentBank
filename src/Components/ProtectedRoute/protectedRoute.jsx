import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import {selectToken} from "../../Redux/selectors";
import {useEffect} from "react";

/**
 * protected road in case of deconnexion
 * @param children
 * @returns {*}
 * @constructor
 */
export default function ProtectedRoute({children}){
    const navigate = useNavigate()
    const isAuth = useSelector(selectToken)

    useEffect( () => {
        if (!isAuth) navigate("/")
    })

    if (isAuth) return children
}