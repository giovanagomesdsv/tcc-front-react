import { use } from 'react';
import { notFound } from 'next/navigation';

import autoresBC from '@/components/autoresBC';
import autoresMockup from '@/components/mockup/autores';

export default function AutorRota({ params }) {
    const awaitedParams = use(Promise.resolve(params));
    const { id } = awaitedParams;

 //   const autor = autoresMockup.find(item => item.aut_id === parseInt(id));

  //  if (!autor) {
  //      notFound();
  //  }

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}