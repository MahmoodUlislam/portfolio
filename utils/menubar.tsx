import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Image from 'next/image';
import Link from 'next/link';
import BackTop from './BackTop';
import styles from './menubar.module.scss';

type MenuBarProps = {
  activeTab: "Home" | "Work" | "Projects" | "About" | "Contacts"
}

export function VMenuBar(props: MenuBarProps) {
  return (
    <nav className={styles.menuBar}>
      <Link className={styles.title} href={`/`} >
        
          <Image loader={uploadcareLoader} src="/Mi-logoWhite.svg" alt="myFace" width="100px" height="100px" />
          <h3 className={styles.name}>
            Mahmood ul Islam
          </h3>
        
      </Link>
      <Link className={styles.tab} href={`/`} >
        
          <h3 style={props.activeTab === "Home" ? { color: "#260316" } : { color: " #ffffff" }}>
            Home
          </h3>
        
      </Link>
      <Link className={styles.tab} href={`/work`} >
        
          <h3 style={props.activeTab === "Work" ? { color: "#260316" } : { color: "#ffffff" }}>
            Work
          </h3>
        
      </Link>
      <Link className={styles.tab} href={`/projects`} >
        
          <h3 style={props.activeTab === "Projects" ? { color: "#260316" } : { color: "#ffffff" }}>
            Projects
          </h3>
        
      </Link>
      <Link className={styles.tab} href={`/about`} >
        
          <h3 style={props.activeTab === "About" ? { color: "#260316" } : { color: "#ffffff" }}>
            About
          </h3>
        
      </Link>
      <Link className={styles.tab} href={`/contacts`} >
        
          <h3 style={props.activeTab === "Contacts" ? { color: "#260316" } : { color: "#ffffff" }}>
            Contacts
          </h3>
        
      </Link>
      <div style={{ display: 'flex', position: 'absolute', right: '0px', bottom: '0px', zIndex: 1 }}>
        <BackTop />
      </div>
    </nav>
  );
}