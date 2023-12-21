import "../../Styles/Login.css";
import Form from "../../Components/Form/form";
import {store} from "../../Redux/store";
import {Provider} from 'react-redux';

/**
 * login page
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Login() {
    return (
        <div className="login-section">
            <Provider store ={store}>
                <Form/>
            </Provider>
        </div>
    )
}