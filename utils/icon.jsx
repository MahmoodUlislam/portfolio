import Image from 'next/image';
import ReactTooltip from 'react-tooltip';
import styles from './icon.module.scss';

export function VIcon(props) {
  const myLoader = ({ src, width, height }) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL}/${src}?w=${width}&h=${height}`
  }
  return (
    <a data-tip={props.tooltipID ? true : false} data-for={props.tooltipID} href={props.href} target="_blank" className={styles.iconContainer} style={{ height: props.height, width: props.width }} rel="noreferrer">
      <div className={styles.iconActive}>
        <Image
          loader={myLoader}
          alt={`On hover ${props.name} icon.`}
          src={props.onHoverIcon}
          width={props.width}
          height={props.height} />
      </div>
      {
        props.tooltipID &&
        <ReactTooltip id={props.tooltipID} type="light" effect="solid">
          <span>{props.name}</span>
        </ReactTooltip>
      }
      <div className={styles.icon}>
        <Image
          loader={myLoader}
          alt={`Default ${props.name} icon.`}
          src={props.defaulIcon}
          width={props.width}
          height={props.height} />
      </div>
    </a>
  )
}