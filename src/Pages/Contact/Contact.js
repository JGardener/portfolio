import React from "react";
import Card from "../../Components/Card/Card";
import james from '../../Assets/images/james.jpg'
import { Descriptions } from "../../Components/Descriptions/Descriptions";
import styles from './Contact.module.css';

const Contact = () => {
    return(
        <section>
            <Card 
            className={styles.jamesCard}
            image={james} 
            email={Descriptions.email}
            github={Descriptions.github}
            linkedin={Descriptions.linkedin}
            />
        </section>
    )
}

export default Contact;