import React from 'react';
import styles from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faGoogleDrive} from '@fortawesome/free-brands-svg-icons';


const Card = ({image}) => {
    return(
        <section className={styles.card_wrapper}>
            <section className={styles.card_inner_wrapper}>
            <p>
            <a href="https://www.linkedin.com/in/jamesgardener92" ><FontAwesomeIcon icon={faLinkedin}/></a> 
                LinkedIn
            </p>
            <p>
              <a href="https://www.github.com/jgardener" ><FontAwesomeIcon icon={faGithub}/></a> 
                Github
            </p>
            <p>
                <a href="https://docs.google.com/document/d/1uDS_FLNlDv07CyznsAqFddvFAdPAFWP-ixC4MRnr6Dk/edit?usp=sharing"><FontAwesomeIcon icon={faGoogleDrive}/></a>
                Curriculum Vitae
            </p>
            </section>

            <section className={styles.card_inner_wrapper} style={{backgroundImage: `url(${image})`}}>
            </section>
        </section>
    )
}

export default Card;