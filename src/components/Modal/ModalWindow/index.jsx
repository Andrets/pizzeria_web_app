import { setHeight } from '@app/redux/slices/modalsSlice'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './styles.module.css'

export const ModalWindow = ({ isOpen, close, children }) => {
  const dispatch = useDispatch()
  const modalRef = useRef(null);
  const modalContent = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
      modalRef.current?.classList.add(styles.open);
      modalRef.current?.classList.remove(styles.close);
    } else {
      modalRef.current?.classList.add(styles.close);
      modalRef.current?.classList.remove(styles.open);

      const timer = setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = '';
      }, 300);

      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, visible]);

  useEffect(() => {
    dispatch(setHeight(modalContent.current?.offsetHeight))
  }, [dispatch, modalContent.current?.offsetHeight])

  if (!visible && !isOpen) {
    return null;
  }

  return (
    <>
      <div ref={modalRef} className={`${styles.ModalWindowWrapper}`}>
        <div className={styles.ModalWindow}>
          <div className={styles.ModalContent} ref={modalContent}>{children}</div>
        </div>
      </div>
      {isOpen && <div className={styles.ModalWindowBackground} onClick={close}></div>}
    </>
  );
};

ModalWindow.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.node,
};