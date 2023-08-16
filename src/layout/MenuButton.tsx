import React, { useContext, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import Menu from './Menu';
import { MenuContext } from '../components/MenuContext';

interface Props {
  className?: string;
}

const MenuButton: React.FC<Props> = ({className}) => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        <BiMenuAltRight size={30} />
      </button>
      {isOpen && <Menu />}
    </div>
  );
};

export default MenuButton;