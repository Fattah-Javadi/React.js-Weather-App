import React from 'react';
import styles from "./Modal.module.css";
import { TiDelete } from "react-icons/ti";

const Modal = ({modal , setModal}) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span onClick={() => setModal("")} className={styles.back}><TiDelete /></span>
                <p className={styles.text}>{modal}</p>
            </div>
        </div>
    );
};

export default Modal;