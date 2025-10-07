"use client"; // necessário para hooks 

import styles from './index.module.css';
import { aventura, livroAventura } from '@/components/mockup/aventura';
import Image from 'next/image';
import { useState } from 'react';

export default function aventuraBC() {
    const [generoSelecionado, setGeneroSelecionado] = useState(11);

    const livrosFiltrados = aventura.filter(livro =>
        livroAventura.some(
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
                                {livro.livro_id % 11 === 0 ? 'Malfoy' : 'Malfoy'}
                            </p>
                            <h3 className={styles.nome}>{livro.titulo}</h3>
                            <h3 className={styles.sinopse}>{livro.livro_sinopse}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
