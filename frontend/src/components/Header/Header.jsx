import {NavLink} from "react-router-dom";
import s from './Header.module.css'

const Header = () => {
    return(
        <div className={s.header}>
            <NavLink to={'/'}>Main</NavLink>
        <NavLink to={'/records'}>Records</NavLink>
    </div>)
}

export default Header;