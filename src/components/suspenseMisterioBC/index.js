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
            <h2 className={styles.titulo}>Suspense e Mistério </h2>

            <div className={styles.cubo}>


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

                                <h3 className={styles.nomelivro}>{livro.livro_titulo}</h3>
                            </div>
                        </div>


                    ))}
                </div>


                {/* Duas imagens empilhadas */}

                {/* Duas imagens empilhadas */}
                <div className={styles.hor1}>
                    {livrosFiltrados.slice(2, 4).map((livro) => (
                        <div key={livro.livro_id}>
                            {/* Imagem */}
                            <Image className={styles.image}
                                src={livro.livro_foto}
                                alt={livro.livro_titulo}
                                width={200}
                                height={250}
                            />

                            {/* Bloco de texto */}
                            <div className={styles.texto}>
                                <p className={styles.info1}>
                                    {livro.livro_id % 9 === 0 ? 'LisRennet' : 'LisRennet'}
                                </p>
                                <h3 className={styles.nomelivro}>{livro.livro_titulo}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
