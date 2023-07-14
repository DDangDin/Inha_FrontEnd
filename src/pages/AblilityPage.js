import React from 'react';
import styles from '../css/AbilityPage.module.scss';
import Rectangle from '../assets/Rectangle.png';
import Rectangle2 from '../assets/Rectangle2.png';
import Vector from '../assets/Vector.png';
import Vector2 from '../assets/Vector2.png';
import diamond from '../assets/diamond.png';
import trans1 from '../assets/trans1.png';
import Frame from '../assets/Frame.png';
import Frameg from '../assets/Frameg.png';
import Frame56 from '../assets/Frame56.png';
import Group82 from '../assets/Group82.png';
import Group83 from '../assets/Group83.png';
import Group84 from '../assets/Group84.png';
import trans from '../assets/trans.png';
import carbon from '../assets/carbon.png';
import Header from '../components/Header';
import Footter from '../components/Footter';

const AblilityPage = () => {
  return (
    <div>
        <Header />
        <div className={styles.earth}>
            <img src={Rectangle} alt="Rectangle" className={styles.rectangle} />
            <img src={Rectangle2} alt="Rectangle2" className={styles.rectangle2} />                  
            <div>
                <img src={Vector} alt="Vector" className={styles.Vector} />
                <img src={Vector2} alt="Vector2" className={styles.Vector2} />
                <img src={diamond} alt="diamond" className={styles.diamond} />        
            </div>
            <div>
                <img src={trans1} alt="trans1" className={styles.trans1} />
                <img src={Frame} alt="Vector" className={styles.Frame} />
                <img src={Frameg} alt="Vector" className={styles.Frameg} />
                <img src={Frame56} alt="Vector" className={styles.Frame56} />
                <img src={Group82} alt="Vector" className={styles.Group82} />
                <img src={Group83} alt="Vector" className={styles.Group83} />
                <img src={Group84} alt="Vector" className={styles.Group84} />
                <img src={trans} alt="Vector" className={styles.trans} />
                <img src={carbon} alt="Vector" className={styles.carbon} />
            </div>
        </div>
        <Footter/>
    </div>    
  );
};

export default AblilityPage;