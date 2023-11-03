import React from 'react';
import style from '../../assets/css/admin.module.css'

const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onClick}/>
}

export default Backdrop;