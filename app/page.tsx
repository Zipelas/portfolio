import { db } from '../prisma/client';

export default async function Home() {
  const posts = await db.post.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return (
    <main className='bg-[#FAF7F7]'>
      <section>
        <h2></h2>
      </section>
    </main>
  );
}
