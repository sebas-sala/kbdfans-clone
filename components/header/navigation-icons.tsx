import Cart from '@/components/cart/cart-drawer';

import SearchDialog from '@/components/search/search-dialog';

export function NavigationIcons() {
  return (
    <div className='flex gap-5 p-2 text-3xl text-white items-center'>
      <SearchDialog />

      <Cart />
    </div>
  );
}
