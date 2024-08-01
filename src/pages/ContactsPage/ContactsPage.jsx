import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <>
            <h1>You tasks</h1>
            <ContactForm />
            <div>{isLoading && "Request in progress..."}</div>
            <ContactList />
        </>
    );
}