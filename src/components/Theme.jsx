'use client'
import React, { useContext } from 'react'
import styles from './Theme.module.css'
import { ThemeContext } from '@/context/ThemeContext';
const Theme = () => {
    const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle} style={mode==="light"? {borderColor:"black"}:{borderColor:"white"}}>
        <div className={styles.icon}>🌛</div>
        <div className={styles.icon}>☀</div>
        <div className={styles.ball} style={mode==="light"? {right:"2px",backgroundColor:"black"}:{left:"2px ",backgroundColor:"white"}}/>
    </div>
  )
}

export default Theme