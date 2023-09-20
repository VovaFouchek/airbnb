'use client';

import { useCallback } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({ title, subtitle, value, onChange }) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <button
          type="button"
          onClick={onReduce}
          className="
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border-[1px]
            border-neutral-400
            text-neutral-600
            transition
            hover:opacity-80
          "
        >
          <AiOutlineMinus />
        </button>
        <div
          className="
            text-xl 
            font-light 
            text-neutral-600
          "
        >
          {value}
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border-[1px]
            border-neutral-400
            text-neutral-600
            transition
            hover:opacity-80
          "
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
