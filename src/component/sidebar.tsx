import React from 'react';
import './component.scss';

export default function Sidebar() {
  return (
    <section className='sidebar'>
      <div className='greeting'>
        <img src='./profile.jpeg' alt='profile_img' />
        <h2>만나서 반갑습니다.</h2>
        <h3>Front End 개발자 함민정입니다.</h3>
      </div>
      <div className='contact_text'>
        <p>
          이 사이트는 React, TS, SCSS를
          <br />
          사용하여 제작되었습니다.
        </p>
        <p>
          제게 궁금하신 점이나 관심이 있으시다면
          <br />
          아래 메일로 연락주세요
        </p>
        <p>gkaalswjd2@gmail.com</p>
        <p>감사합니다.</p>
      </div>
    </section>
  );
}
