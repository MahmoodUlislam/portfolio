import { useEffect, useState } from 'react';
import styles from './BackTop.module.scss';

const BackTop = () => {
  // State to track whether the button should be visible
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  // useEffect hook to handle scroll events and show/hide the button
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <>
      <button className={isVisible ? styles.scrollTopButton : styles.hide} onClick={scrollToTop}>^</button>
    </ >
  )
};

export default BackTop;
