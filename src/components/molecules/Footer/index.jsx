import { Praise, React, Vite } from "../../../assets";
import './footer.scss'

function Icon({src}) {
    return (
        <div className="icon-wrapper">
            <img className="icon-image" src={src} alt="icon" />
        </div>
    )
}

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={Praise} alt="Praise" />
                </div>
                <div className="social-wrapper">
                    <Icon src={Vite} />
                    <Icon src={React} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}
