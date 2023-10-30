import * as React from 'react';
import {
    hero,
    subtitle,
    subtitleItem,
    title,
} from './hero.module.scss';

const Hero = () => {
    return (
        <section className={hero}>
            <h1 className={title}>Otro Poquito</h1>
            <div className={subtitle}>
                <p className={subtitleItem}>Recetas de cocina</p>
                <p className={subtitleItem}>al alcance de tu mano</p>
            </div>
        </section>
    );
}

export default Hero;
