import { useState} from "react"
import { Navigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { getLogin } from '../../Services/Api/api';
import { getToken } from '../../Redux/Reducers/tokenReducer';
import { selectToken } from '../../Redux/selectors';
import '../../Styles/Form.css';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/**
 * sign in form with inputs for username, password, checkbox "remember me" and validation button
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Login(){
    //use state
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const [loginErreur, setLoginError] = useState("")
    const [loginStatus, setLoginStatus] = useState(0)
    const token = useSelector(selectToken)
    const dispatch = useDispatch()

    /**
     * save token into local storage or send token
     *
     * @param token
     */
    const addToken = (token) => {
        if (remember === true){
            localStorage.setItem("token", token)
        }
        dispatch(getToken(token))
    }

    /**
     * handle remember
     *
     * @param e
     */
    const handleRemember = (e) => {
        setRemember(e.target.checked)
    }

    /**
     * handle submit form
     *
     * @param e
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        const login = getLogin({"email": email, "password": password})

        login.then(res => {
            if(res.status !== 400){
                setLoginStatus(res.status)
                addToken(res.token)
            } else {
                setLoginError(res.message)
            }
        })
    }

    if( (token !== null) &&(loginStatus === 200) ) {
        return <Navigate to="/profile" />
    }

    return (
         <main className="login-form">
             <section className="form-content">
                 <div className="login-icon"><FontAwesomeIcon className="icon" icon={faCircleUser} /></div>
                 <h1>Sign In</h1>
                 <form onSubmit={handleSubmit}>
                     <div className="input-wrapper">
                         <label htmlFor="username" className="input-label">Username</label>
                         <input type="text" className="input-area" id="username" onChange={e => setEmail(e.target.value)} />
                     </div>
                     <div className="input-wrapper">
                         <label htmlFor="password" className="input-label">Password</label>
                         <input type="password" className="input-area" id="password" onChange={e => setPassword(e.target.value)} />
                     </div>
                     <div className="input-remember">
                         <input type="checkbox" id="remember-me" onChange={handleRemember}  />
                         <label htmlFor="remember-me">Remember me</label>
                     </div>
                     <button className="sign-in-button">Sign In</button>
                 </form>
             </section>
         </main>
     );
}
