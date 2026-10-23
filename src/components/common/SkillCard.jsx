import React from 'react';
import './SkillCard.scss';

export default function SkillCard({ category, items }) {
  return (
    <div className='skill-card'>
      <h3 className='skill-card__category'>{category}</h3>
      <ul className='skill-card__list'>
        {items.map((item, index) => (
          <li key={index} className='skill-card__item'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
