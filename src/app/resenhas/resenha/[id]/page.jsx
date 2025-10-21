import { use } from 'react';
import { notFound } from 'next/navigation';

import Resenha from '@/components/resenhaPage';
import ResenhaMockup from '@/components/mockup/resenha';

export default function ResenhaRota({ params }) {
    const awaitedParams = use(Promise.resolve(params));
    const { id } = awaitedParams;

    const resenha = ResenhaMockup.find( item => item.id === parseInt(id));
    return (
        <Resenha respage={resenhapage}/>
    )
}