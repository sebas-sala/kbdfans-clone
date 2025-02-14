import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <main className='container mx-auto py-10'>
      <ul className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 md:gap-4 gap-4'>
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className='w-full h-64' />
        ))}
      </ul>
    </main>
  );
}
