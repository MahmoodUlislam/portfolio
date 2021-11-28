import Link from 'next/link'
import styles from './menubar.module.scss'
import Image from 'next/image'
import BackTop from './BackTop'

type MenuBarProps = {
  activeTab: "Home" | "Work"| "Projects" | "About" | "Contacts" 
}

export function VMenuBar(props: MenuBarProps) {
  return (
    <nav className={styles.menuBar}>
      <Link href={`/`}>
        <a className={styles.title}>
       
          <Image src="/Mi-logoWhite.svg" alt="myFace" width="100px" height="100px"/>
          <h3 className={styles.name}>
            Mahmood ul Islam
          </h3>
        </a>
      </Link>
      <Link href={`/`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "Home" ? {color: "#260316"} : {color: " #ffffff"}}>
            Home
          </h3>
        </a>
      </Link>
      <Link href={`/work`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "Work" ? {color: "#260316"} : {color: "#ffffff"}}>
            Work
          </h3>
        </a>
      </Link>
      <Link href={`/projects`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "Projects" ? {color: "#260316"} : {color: "#ffffff"}}>
           Projects
          </h3>
        </a>
      </Link>
      <Link href={`/about`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "About" ? {color: "#260316"} : {color: "#ffffff"}}>
            About
          </h3>
        </a>
      </Link>
      <Link href={`/contacts`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "Contacts" ? {color: "#260316"} : {color: "#ffffff"}}>
           Contacts
          </h3>
        </a>
      </Link>
        <div style={{display: 'flex', position:'absolute', right:'0px', bottom:'0px', zIndex:1}}>
      <BackTop/>
      </div>
    </nav>
  )
}