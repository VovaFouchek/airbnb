'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import { KeyboardEvent, useCallback, useState } from 'react';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onKeyPressHandler = (event: KeyboardEvent<HTMLElement>) => {
    const isEnterKey = event.key === 'Enter';
    const isEscapeKey = event.key === 'Escape';

    if (isEnterKey && !isOpen) {
      toggleOpen();
    }

    if (isEscapeKey && isOpen) {
      toggleOpen();
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={() => { }}
          aria-hidden="true"
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          onKeyDown={(event) => onKeyPressHandler(event)}
          role="button"
          tabIndex={0}
          className="flex cursor-pointer items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            <MenuItem onClick={() => { }} label="Login" />
            <MenuItem onClick={() => { }} label="Sign up" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
