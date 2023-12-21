import "../../Styles/Profil.css";
import Account from "../../Components/Account/account";
import {store} from "../../Redux/store";
import {Provider} from 'react-redux';
import { useState , useEffect} from 'react'
import {
    getLoginFetch,
    saveUserProfil
} from "../../Services/Api/api";
import { useSelector,useDispatch } from "react-redux"
import {
    selectFirstName,
    selectLastName,
    selectToken
} from "../../Redux/selectors";
import {getFirstName} from "../../Redux/Reducers/firstNameReducer";
import {getLastName} from "../../Redux/Reducers/lastNameReducer";
import PropTypes from "prop-types";

export default function Profile() {
    const account1 = "Argent Bank Checking (x8349)"
    const account2 = "Argent Bank Savings (x6712)"
    const account3 = "Argent Bank Credit Card (x8349)"
    const mount1 = "$2,082.79"
    const mount2 = "$10,928.42"
    const mount3 = "$184.30"
    const balance1 = "Available Balance"
    const balance2 = "Current Balance"
    const token = useSelector(selectToken)
    const firstName = useSelector(selectFirstName)
    const lastName = useSelector(selectLastName)
    const [ProfilEdit, setProfilEdit] = useState(false)
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const [formatErrorName, setFormatErrorName] = useState('')
    const dispatch = useDispatch()
    const regex = /^[A-zÀ-ú-']{2,}$/

    /**
     * use effect
     */
    useEffect(() => {
        // if user connected, extract in store : firstName and lastName
        if (token !== null) {
            const user = getLoginFetch(token)
            user.then(obj => {
                //To send the actions : getFirstName and getLastName
                dispatch(getFirstName(obj.firstName))
                dispatch(getLastName(obj.lastName))
            })
        }
    },)

    /**
     * handle edit button
     */
    const handleEdit = () => {
        document.getElementById("fullName").style.display = "none";
        document.getElementById("edit-button").style.display = "none";
        document.getElementById("edit-section").style.display = "block";
    }

    /**
     * handle from edit
     */
    const handleEditSave = () => {
            document.getElementById("fullName").style.display = "block";
            document.getElementById("edit-button").style.display = "initial";
            document.getElementById("edit-section").style.display = "none";
            dispatch(getFirstName(newFirstName));
            dispatch(getLastName(newLastName));
            const fullName = {"firstName": newFirstName, "lastName": newLastName};
            saveUserProfil(token, fullName);
        }

    /**
     * handle cancel button
     *
     * @param e
     */
    const handleCancel = (e) => {
        e.preventDefault()
        setFormatErrorName("")
        setProfilEdit(false) //close form
        document.getElementById("edit-section").style.display = "none";
        document.getElementById("edit-button").style.display = "inline-block";
        document.getElementById("fullName").style.display = "block";
    }
    handleCancel.prototype = {
        e: PropTypes.object.isRequired,
    }


    return (
        <div className="profile-section">
            <div >
                <h1>Welcome back <br/><span id="fullName">{firstName} {lastName}</span></h1>
                <button id="edit-button" type="button" onClick={handleEdit}>Edit Name</button>

                <div id="edit-section">
                    <form name="edit" className="edit-form">
                        <div>
                            <input type="text" placeholder={firstName} className="edit-input" onChange={e => setNewFirstName(e.target.value)} required />
                        </div>
                        <div>
                            <input type="text" placeholder={lastName} className="edit-input" onChange={e => setNewLastName(e.target.value)} required />
                        </div>
                    </form>
                    <div className="btn-form">
                        <button type="submit" className="edit-button" onClick={handleEditSave}>Save</button>
                        <button type="button" className="edit-button" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>

            <div className="login-section" >
                <Account accountName={account1} mount={mount1} balance={balance1} />
                <Account accountName={account2} mount={mount2} balance={balance1} />
                <Account accountName={account3} mount={mount3} balance={balance2} />
            </div>
        </div>
    )
}
