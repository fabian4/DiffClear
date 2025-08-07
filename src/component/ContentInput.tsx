import { Textarea } from "@headlessui/react";
import clsx from 'clsx'


export const ContentInput = ({ onInput }: { onInput: (value: string) => void }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInput(event.target.value);
  };

  return (
    <div className="flex gap-2">
      <Textarea
        onChange={handleInputChange}
        placeholder="Enter your content here..."
        className="border data-focus:bg-blue-100 data-hover:shadow"
      />

      <Textarea
        onChange={handleInputChange}
        placeholder="Enter your content here..."
        className="border data-focus:bg-blue-100 data-hover:shadow"
      />
    </div>
  );
}
