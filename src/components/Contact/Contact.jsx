import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ data }) {
    const dispatch = useDispatch();
    const { id, name, number } = data;

    const handleDelete = () => {
        dispatch(deleteContact(id))
    }
    
    return (
        <div className={css.container}>
            <div>
                <p className={css.text}><FaUser className={css.icon}/>{ name }</p>
                <p className={css.text}><FaPhoneAlt className={css.icon}/>{number}</p>
            </div>
            <button className={css.button} onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}