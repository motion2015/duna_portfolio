import React from 'react';
import './ProjectCard.scss';

export default function ProjectCard({
  title,
  category,
  description,
  tags,
  link,
}) {
  return (
    <article className='project-card'>
      <div className='project-card__badge'>{category}</div>
      <h4 className='project-card__title'>{title}</h4>
      <p className='project-card__desc'>{description}</p>
      <div className='project-card__tags'>
        {tags.map((tag, idx) => (
          <span key={idx} className='tag'>
            #{tag}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target='_self'
          rel='noopener noreferrer'
          className='project-card__link'
        >
          자세히 보기 &rarr;
        </a>
      )}
    </article>
  );
}
