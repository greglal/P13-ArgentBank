import '../../Styles/Banner.css';

/**
 * Banner on home page
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Banner () {
    return (
        <div className="hero">
            <section className="hero-content">
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}