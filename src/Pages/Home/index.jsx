import Header from '../../Components/Header/header';
import Banner from "../../Components/Banner/banner";
import '../../Styles/Home.css';
import FeatItem from "../../Components/FeatItem/featItem";
import chat from "../../Assets/icon-chat.png";
import money from "../../Assets/icon-money.png";
import security from "../../Assets/icon-security.png";

export default function Accueil () {

    return (
        <div>
            <Banner/>
            <div className="features">
                <FeatItem icon={chat} title="Your are our #1 priority" desc="Need to talk to a representative? You can get in touch through our chat or through a phone call in less than 5 minutes." />
                <FeatItem icon={money} title="More savings means higher rates" desc="The more you save with us, the higher your interest rate will be!" />
                <FeatItem icon={security} title="Security you can trust" desc="We use top of the line encryption to make sure your data and money is always safe." />
            </div>
        </div>

    )
}