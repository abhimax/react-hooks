import { useContext } from "react";
import { Context } from "../../App";


const Button = ({ label, onClick }) => {
    const getContextValue = useContext(Context);
    return  <button className="action-btn" onClick={onClick} style={{ backgroundColor:getContextValue }}>{label}</button>

}
export default Button;