import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { merge } from '../../../../../utils/js/merge';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { GenericList } from '../../../../GenericList';
import {
  CommentIcon,
  ComplainIcon,
  HideIcon,
  SaveIcon,
  ShareIcon,
} from '../../../../Icons';
import styles from './dropdownmenu.css';
const LIST = [
  { As: 'li' as const, text: 'Комментарии', img: <CommentIcon /> },
  { As: 'li' as const, text: 'Поделиться', img: <ShareIcon /> },
  { As: 'li' as const, text: 'Скрыть', img: <HideIcon /> },
  { As: 'li' as const, text: 'Сохранить', img: <SaveIcon /> },
  { As: 'li' as const, text: 'Пожаловаться', img: <ComplainIcon /> },
].map(generateId);

interface IDropDownType {
  onClose?: () => void;
  portalTop?: number
  portalLeft?: number
}
export function DropDownMenu({onClose, portalTop, portalLeft}: IDropDownType) {
  const [list, setList] = useState(LIST);
  const handleItemClick = () => {
    setList(list);
  };
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        onClose?.();
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  const node = document.querySelector('#dropDown_root');
  if (!node) return null;
  return ReactDOM.createPortal(
    <div className={styles.dropdownmenuWrap}>
      <div style={{position: 'fixed',top: `${portalTop}px`, left: `${portalLeft}px`}} className={styles.dropdownmenu} ref={ref} id="drop" >
        <ul className={styles.cardmenulist}>
          <GenericList list={list.map(merge({ onClick: handleItemClick }))} />
        </ul>
        <button className={styles.btnClose} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>,
    node
  );
}
