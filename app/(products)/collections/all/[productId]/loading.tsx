import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <main className='container mx-auto grid md:grid-cols-2 min-h-screen overflow-y-auto gap-8 p-6'>
      <section className='space-y-5'>
        <Skeleton className='h-96' />
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className='h-40' />
          ))}
        </ul>
      </section>
      <section className='space-y-6'>
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className='h-28' />
        ))}
      </section>
    </main>
  );
}
