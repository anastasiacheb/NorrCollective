'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

export default function TimeSelect() {
  const [value, setValue] = useState('');

  return (
    <>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger
          className={`text-sm font-medium px-4 border border-base-300 hover:border-base-500 focus:border-base-500 active:border-base-500 !outline-none !outline-transparent transition-all ease-linear !h-12 md:!h-14 flex items-center w-full !shadow-none focus-visible:ring-0 ${value ? 'text-base-900' : 'text-base-500'}`}>
          <SelectValue placeholder="Delivery Time" />
        </SelectTrigger>
        <SelectContent className="w-full shadow-none border-base-700 !p-0">
          <SelectItem value="morning" className="border-base-700 border-b h-12 md:h-14">
            08:00 — 12:00
          </SelectItem>
          <SelectItem value="afternoon" className="border-base-700 border-b h-12 md:h-14">
            12:00 — 16:00
          </SelectItem>
          <SelectItem value="evening" className="h-12 md:h-14">
            16:00 — 20:00
          </SelectItem>
        </SelectContent>
      </Select>
      <input type="hidden" name="deliveryTime" value={value} />
    </>
  );
}
