import '../../Styles/FeatItem.css';

/**
 * hero on home page
 *
 * @param icon
 * @param title
 * @param desc
 * @returns {JSX.Element}
 * @constructor
 */
export default function FeatItem({icon, title, desc}) {
    return (
        <div className="feature">
            <div className="icon-border">
                <img src={icon} alt={icon} className="feature-icon"/>
            </div>
            <h3 className="feature-item-title">{title}</h3>
            <p>{desc}</p>
        </div>
    )
}