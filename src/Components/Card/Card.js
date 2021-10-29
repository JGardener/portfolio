import React from 'react';
import styles from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faGoogleDrive} from '@fortawesome/free-brands-svg-icons';

const Card = () => {
  return(
    <section className={styles.card_wrapper}>
        <h1 className={styles.card_title}> James Gardener</h1>
          <section className={styles.card_icon_wrapper}>
              <a className ={styles.card_icon} href="https://www.linkedin.com/in/jamesgardener92" ><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a> 
              <a className ={styles.card_icon} href="https://www.github.com/jgardener" ><FontAwesomeIcon icon={faGithub}/> GitHub</a> 
              <a className ={styles.card_icon} href="https://docs.google.com/document/d/1uDS_FLNlDv07CyznsAqFddvFAdPAFWP-ixC4MRnr6Dk/edit?usp=sharing"><FontAwesomeIcon icon={faGoogleDrive}/> CV</a>    
          </section>  
    </section>
  )
}
    
    export default Card;
    
    /*
    <div class="card card1">
    <div class="border">
      <h2>Ben Stiller</h2>
      <div class="icons">
        <i class="fa fa-codepen" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-dribbble" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
    
    
    */
    // <section className={styles.page_wrapper}>
    //     <section className={styles.card_wrapper} style={{background: `url(${image}) center center no-repeat`, backgroundSize: '300px'}}>
    //         <h2>Get in touch</h2>
    //         <section className={styles.card_icons}>
    //             <a href="https://www.linkedin.com/in/jamesgardener92" ><FontAwesomeIcon icon={faLinkedin}/></a> 
    //             <a href="https://www.github.com/jgardener" ><FontAwesomeIcon icon={faGithub}/></a> 
    //             <a href="https://docs.google.com/document/d/1uDS_FLNlDv07CyznsAqFddvFAdPAFWP-ixC4MRnr6Dk/edit?usp=sharing"><FontAwesomeIcon icon={faGoogleDrive}/></a>
    //         </section>
    //     </section>
    // </section>

