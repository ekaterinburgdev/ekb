import { useCallback, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import classNames from 'classnames';
import FocusLock from 'react-focus-lock';
import styles from './Modal.module.css';

export function useModal() {
  const [isOpen, setisOpen] = useState(false);
  const close = useCallback(() => setisOpen(false), []);
  const toggle = useCallback(() => setisOpen(!isOpen), [setisOpen, isOpen]);

  useHotkeys('esc', close);

  return { isOpen, toggle, close };
}

export interface Props {
  style: React.CSSProperties;
  children: React.ReactNode;
  link?: React.ReactNode;
  isOpen: boolean;
  onClose: VoidFunction;
  toggle: VoidFunction;
  handler: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  style,
  handler,
  link,
  children,
}: Props) {
  return (
    <FocusLock disabled={!isOpen}>
      <div
        style={style}
        className={classNames(styles.modal, {
          [styles.modal_active]: isOpen,
        })}
      >
        <div onClick={onClose} className={styles.modal__overlay} />
        <div className={styles.modal__content}>
          <div className={styles.modal__scroller}>{children}</div>
          {/* <div className={styles.modal__divider} /> */}
          {link && <div className={styles.modal__subcontent}>{link}</div>}
        </div>
        <div className={styles.modal__toggle}>{handler}</div>
      </div>
    </FocusLock>
  );
}
