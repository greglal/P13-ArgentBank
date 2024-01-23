import {Link} from 'react-router-dom'
import argentBankLogo from '../../Assets/argentBankLogo.png';
import '../../Styles/Header.css';
import { useSelector, useDispatch} from "react-redux";
import {selectFirstName, selectToken} from "../../Redux/selectors";
import {getFirstName} from "../../Redux/Reducers/userReducer";
import {getToken} from "../../Redux/Reducers/tokenReducer";
import {getLoginFetch} from "../../Services/Api/api";
import { useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

/**
 * header with link to sign in / sign out and user's name if connected
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Header () {
    const firstName = useSelector(selectFirstName)
    const token = useSelector(selectToken)
    const dispatch = useDispatch()

    useEffect(() => {
        if(token !== 0 ) {
            const user = getLoginFetch(token)
            user.then(res => {
                dispatch(getFirstName(res.firstName))

                if (res.id === null) {
                    dispatch(getToken(null))
                    localStorage.removeItem("token")
                }
            })
        }
    },[token, dispatch] )

    /**
     * Dispatch actions to reset user-related state and Clear the token from localStorage
     */
    const handleSignOut = () => {
        dispatch(getFirstName(null));
        dispatch(getToken(0));
        localStorage.removeItem("token");
    };

    return(
        <div className="header-navBar">
            <Link to="/"><img src={argentBankLogo} alt="logo Argent Bank" className="main-logo"/></Link>
            {(token === 0) &&
                <Link to="/login" className="login"><FontAwesomeIcon className="icon" icon={faCircleUser} />Sign in</Link>
            }
            { (token !== 0) &&
                <div className="sign-out-nav">
                    <Link to="/profile" className="profile-name-nav">
                        <div className="login-icon-nav"><FontAwesomeIcon className="icon" icon={faCircleUser} /></div>
                        <span className="firstNameHeader">{firstName}</span>
                    </Link>
                    <Link to="/" className="sign-out">
                        <div className="logout-icon" onClick={handleSignOut}><FontAwesomeIcon icon={faSignOutAlt} /></div>
                        <div onClick={handleSignOut}>Sign Out</div>
                    </Link>
                </div>
            }
        </div>
    )
}