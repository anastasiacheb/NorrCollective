'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function DatePicker() {
  const [open, setOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className={`w-full justify-between text-base-500  text-sm font-medium px-4 border border-base-300 hover:border-base-500 focus:border-base-500 outline-none transition-all ease-linear h-12 md:h-14 rounded-none hover:bg-base-0 shadow-none ${date ? 'text-base-900 hover:text-base-900' : 'text-base-500 hover:text-base-500'}`}>
            {date ? date.toLocaleDateString() : 'Date of Delivery '}
            <img src="/icons/calendar_month.svg" alt="calendar icon" className="size-6" />
          </Button>
        </PopoverTrigger>
        <input type="hidden" name="deliveryDate" value={date ? date.toLocaleDateString() : ''} />
        <PopoverContent className="w-auto overflow-hidden p-0 rounded-none border-base-700 shadow-none" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            disabled={{ before: new Date() }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
