"use client"; // necessário para hooks 

import styles from './index.module.css';
import { suspense, livroSuspense } from '@/components/mockup/suspenseMisterio';
import Image from 'next/image';
import { useState } from 'react';

export default function suspenseMisterioBC() {
    const [generoSelecionado, setGeneroSelecionado] = useState(9);

    const livrosFiltrados = suspense.filter(livro =>
        livroSuspense.some(
            rel => rel.livro_id === livro.livro_id && rel.gen_id === generoSelecionado
        )
    );
    return (
        <div>
            {/* Título */}
            <h2 className={styles.titulo}>AVENTURA</h2>
            {/* Layout especial de livros */}
            <div className={styles.hor2}>
                {livrosFiltrados.slice(0, 2).map((livro) => (
                    <div key={livro.livro_id} >
                        <Image className={styles.image}
                            src={livro.livro_foto}
                            alt={livro.livro_titulo}
                            width={200}
                            height={250}
                        />
                        <div className={styles.texto}>
                            <p className={styles.info1}>
                                {livro.livro_id % 2 === 0 ? 'Malfoy' : 'Malfoy'}
                            </p>
                            <h3 className={styles.nomelivro}>{livro.livro_sinopse}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
