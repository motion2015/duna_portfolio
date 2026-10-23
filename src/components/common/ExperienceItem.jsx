import React from 'react';
import './ExperienceItem.scss';

export default function ExperienceItem({
  period,
  role,
  company,
  description,
  skills = [],
}) {
  return (
    <div className='experience-item'>
      <div className='experience-item__marker' />
      <div className='experience-item__content'>
        <span className='experience-item__period'>{period}</span>
        <h3 className='experience-item__role'>
          {role} <span className='company'>@ {company}</span>
        </h3>
        <p className='experience-item__desc'>{description}</p>

        {skills.length > 0 && (
          <div className='experience-item__tags'>
            {skills.map((skill, index) => (
              <span key={index} className='tag'>
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
