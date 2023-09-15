'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import { KeyboardEvent, useCallback, useState } from 'react';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import MenuItem from './MenuItem';
import Avatar from '../Avatar';

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
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
            {currentUser ? (
              <>
                <MenuItem onClick={() => { }} label="My trips" />
                <MenuItem onClick={() => { }} label="My favorites" />
                <MenuItem onClick={() => { }} label="My reservations" />
                <MenuItem onClick={() => { }} label="My properties" />
                <MenuItem onClick={() => { }} label="Airbnb my home" />
                <hr />
                <MenuItem
                  onClick={() => {
                    signOut();
                  }}
                  label="Logout"
                />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
