'use client';

import { useState } from 'react';

import { BsSearch } from 'react-icons/bs';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SearchResultItem } from './search-result-item';

import useProductSearch from '@/hooks/use-product-search';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';

export default function SearchDialog() {
  const [search, setSearch] = useState('');

  const [open, setOpen] = useState(false);

  const { filteredProducts } = useProductSearch(search);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setOpen(false);
      setSearch('');
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSearch('');
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          <BsSearch
            className='cursor-pointer transition duration-200 hover:text-white/90 h-6 md:h-8'
            onClick={() => setOpen(true)}
          />
        </DialogTrigger>
        <DialogHeader>
          <DialogTitle className='text-lg font-bold sr-only'>
            Search
          </DialogTitle>
          <DialogDescription className='text-white sr-only'>
            Search for a product
          </DialogDescription>
        </DialogHeader>
        <DialogContent className='bg-black border-none p-2'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Input
                value={search}
                onChange={handleOnChange}
                placeholder='Search a product...'
                className='mr-1 w-full text-white'
              />
            </div>

            {filteredProducts.length > 0 && (
              <ScrollArea className='h-[400px] rounded-md p-2'>
                <ul className='text-white space-y-2 p-2 h-full overflow-y-auto'>
                  {filteredProducts.map(({ id, name }) => (
                    <SearchResultItem
                      key={id}
                      id={id}
                      onClick={handleClose}
                      name={name}
                    />
                  ))}
                </ul>
              </ScrollArea>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
