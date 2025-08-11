import { Field, Label, Textarea } from "@headlessui/react";
import clsx from 'clsx'


export const ContentInput = ({ onInputOldValue, onInputNewValue }: { onInputOldValue: (value: string) => void, onInputNewValue: (value: string) => void }) => {
  const handleOldValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputOldValue(event.target.value);
  };


  const handleNewValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputNewValue(event.target.value);
  };


  return (
    <div className="flex gap-1 px-2 h-full"> 
      <Field className="block w-full h-full">
        <Textarea
          onChange={handleOldValue}
          placeholder="Enter your content here..."
          className={clsx(
            'block w-full h-9/10 rounded-lg resize-none border-2 border-black bg-white/5 px-3 py-1.5 text-sm/6',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
        />
        <Label className="text-sm/6 font-medium">Old Content</Label>
      </Field>
      <Field className="block w-full h-full">
        <Textarea
          onChange={handleNewValue}
          placeholder="Enter your content here..."
          className={clsx(
            'block w-full h-9/10 rounded-lg resize-none border-2 border-black bg-white/5 px-3 py-1.5 text-sm/6',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
        />
        <Label className="text-sm/6 font-medium">New Content</Label>
      </Field>
    </div>
  );
}
