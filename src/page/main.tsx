import React from 'react';
import { Link } from 'react-router-dom';
import './pages.scss';

export default function Main() {
  return (
    <section className='main'>
      <Link to={'/menu'}>
        <title>
          <h1>
            안녕하세요
            <br />
            꿈꾸는 개발자
            <br />
            함민정입니다.
          </h1>
        </title>
      </Link>
    </section>
  );
}
