import  {Link} from 'react-router-dom'
import '../../Styles/Error.css'

/**
 * error message in case of error 404
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Error() {
    return (
        <div className='error'>
            <h1 className="code-error">404</h1>
            <h2 className="oups">Oups! La page que vous demandez n'existe pas</h2>
            <p className="return-home"><Link to="/" >Retourner sur la page d'accueil</Link></p>
        </div>
    )
}

