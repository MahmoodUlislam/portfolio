import React from 'react'
import styles from './mainheader.module.scss'
import { useTypedText } from '../typingtext'


export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {useTypedText("Hello everyone!", 50)}
        <br/>
        {useTypedText("I'm Mahmood.", 50, 200)}
      </h1>
      <h2>
        {useTypedText("Welcome on my portfolio page! I'm a Software Developer & Designer, currently working as Full-stack Web Developer. Living in Dhaka, Bangladesh.", 30, 350)}
      </h2>
    
    </div>
  )
}