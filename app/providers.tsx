import { CartProvider } from '@/components/cart/cart-provider';
import AuthProvider from '@/contexts/auth-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </>
  );
}
