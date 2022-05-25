import React from 'react';
import { useNavigate } from 'react-router-dom';
import AboutIcon from '../img/about_icon';
import LightIcon from '../img/light_icon';
import ProjectIcon from '../img/project_icon';
import StackIcon from '../img/stack_icon';
import './component.scss';
import Sidebar from './sidebar';

interface ICardProps {
  children?: React.ReactNode;
}

export default function Card({ children }: ICardProps) {
  return (
    <section className='card'>
      <Sidebar />
      <div className='contents'>
        <div className='icons'>
          <LightIcon
            fill='black'
            width='48'
            height='48'
            className='light_icon'
          />
          <AboutIcon
            fill='black'
            width='35'
            height='35'
            className='menu_icon'
          />
          <StackIcon
            fill='black'
            width='35'
            height='35'
            className='menu_icon'
          />
          <ProjectIcon
            fill='black'
            width='35'
            height='35'
            className='menu_icon'
          />
        </div>
        <div className='card_view'>{children}</div>
      </div>
    </section>
  );
}
