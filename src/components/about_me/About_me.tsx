import * as React from 'react';
import styles from './about_me.module.css';
import My_pfoto_n7liuy_c_scale_600 from '../../img/My_pfoto_n7liuy_c_scale,w_600.jpg';
import Skill from '../skill/Skill';

export default function AboutMe(): JSX.Element {
  return (
    <section className={styles.about_me}>
      <section className={styles.about_me__photo}>
        <p className={styles.about_me__photo__name}>
          Пригульнов Дмитрий

        </p>
        <p className={styles.about_me__photo__prof}>junior-frontend developer</p>
        <div className={styles.wrapp}>
          <img
            className={styles.about_me__photo__photo}
            src={My_pfoto_n7liuy_c_scale_600}
            alt="Фото Пригульнова Дмитрия"
          />
        </div>
      </section>
      <section className={styles.about_me__cont_end_skill}>
        <section className={styles.about_me__contacts}>
          <p>
            тел:
            {' '}
            <a href="tel:+79043897863">+7(904)389-78-63</a>
          </p>
          <p>
            email:
            {' '}
            <a href="mailto:prigulnov@mail.ru">prigulnov&#64;mail.ru</a>
          </p>
          <p>
            Telegram:
            <a href="tg://resolve?domain=@Prigulnov_Dmetry">&#64;Prigulnov_Dmetry</a>
          </p>
          <p>
            портфолио:
            {' '}
            <a href="https://github.com/LLStudent83">https://github.com/LLStudent83</a>
          </p>
        </section>
        <section className={styles.about_me__skills}>
          <h2>Ключевые компетенции</h2>
          <Skill />
        </section>
      </section>

    </section>

  );
}
// тел. +7 (904) 389-78-63
// email: prigulnov@mail.ru
// Telegram: @Prigulnov_Dmetry
// портфолио: https://github.com/LLStudent83
