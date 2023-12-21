import '../../Styles/FeatItem.css';

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