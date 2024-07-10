import React, { useState } from 'react';

const Skillset = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  let backgroundClass = 'backGround';
  if (activeTab === 'frameworks') {
    backgroundClass = 'backGround1';
  } else if (activeTab === 'tools') {
    backgroundClass = 'backGround2';
  }

  const skills = {
    languages: [
      { name: 'C/C++', level: 4 },
      { name: 'Python', level: 4 },
      { name: 'Java', level: 3 },
      { name: 'HTML/CSS', level: 5 },
      { name: 'Javascript', level: 4 },
      { name: 'MySQL', level: 3 },
      { name: 'MongoDB', level: 3 }
    ],
    frameworks: [
      { name: 'Express.js', level: 3 },
      { name: 'React.js', level: 4 },
      { name: 'NLTK', level: 4 },
      { name: 'Scikit-Learn', level: 3 },
      { name: 'Tailwind', level: 4 }
    ],
    tools: [
      { name: 'Git', level: 3 },
      { name: 'Github', level: 4 },
      { name: 'Postman', level: 2 },
      { name: 'Canva', level: 4 }
    ]
  };

  const renderSkillBars = (level) => {
    const totalStars = 5;
    const barWidth = (level / totalStars) * 100;

    return (
      <div className="skill-bar flex items-center">
        <div className="bg-[#121212] h-1 w-full rounded-sm">
          <div
            className="bg-[#035AC5] h-1 rounded-sm skill-bar-fill hover:bg-white transition-colors duration-300 ease-in-out cursor-pointer"
            style={{ '--bar-width': `${barWidth}%` }}
            title={`${barWidth}%`}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${backgroundClass} bg-cover text-white h-screen transition-all duration-500 ease-in-out`}>
      <div className='skill md:w-2/3 p-4 sticky md:top-28 top-16'>
        <h1 className='text-xl md:text-5xl text-center'>
          Set Of
          <span className='font-semibold text-[#035AC5]'> Proficiency</span>
        </h1>
        <div className='flex justify-center mt-4'>
          <div className="timeline md:flex-row flex-col md:gap-0 gap-2 flex justify-between items-center w-full max-w-4xl mx-auto px-4">
            <div 
              className={`step ${activeTab === 'languages' ? 'active' : ''}`}
              onClick={() => handleTabClick('languages')}
            >
              <div className="text-xs md:text-lg step-label font-semibold bg-black text-white p-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out">
                Core
                <i className="fas fa-code ml-2"></i>
              </div>
            </div>
            <div 
              className={`step ${activeTab === 'frameworks' ? 'active' : ''}`}
              onClick={() => handleTabClick('frameworks')}
            >
              <div className="text-xs md:text-lg step-label font-semibold bg-black text-white p-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out">
               Supportive
               <i className="fas fa-toolbox ml-2"></i>
              </div>
            </div>
            <div 
              className={`step ${activeTab === 'tools' ? 'active' : ''}`}
              onClick={() => handleTabClick('tools')}
            >
              <div className="text-xs md:text-lg step-label font-semibold bg-black text-white p-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out">
              Casual
              <i className="fas fa-coffee ml-2"></i>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto py-12'>
          <div className={`content ${activeTab !== 'languages' ? 'hidden' : 'block'} transition-opacity duration-500 ease-in-out`}>
            <ul className='p-6 md:p-12 md:text-xl flex flex-col gap-4'>
              {skills.languages.map(skill => (
                <li key={skill.name} className="flex items-center">
                  <div className='w-44'>{skill.name}</div>
                  <div className='w-96 h-1'>{renderSkillBars(skill.level)}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`content ${activeTab !== 'frameworks' ? 'hidden' : 'block'} transition-opacity duration-500 ease-in-out`}>
            <ul className='p-6 md:p-12 md:text-xl flex flex-col gap-4'>
              {skills.frameworks.map(skill => (
                <li key={skill.name} className="flex items-center">
                  <div className='w-44'>{skill.name}</div>
                  <div className='w-96 h-1'>{renderSkillBars(skill.level)}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`content ${activeTab !== 'tools' ? 'hidden' : 'block'} transition-opacity duration-500 ease-in-out`}>
            <ul className='p-6 md:p-12 md:text-xl flex flex-col gap-4'>
              {skills.tools.map(skill => (
                <li key={skill.name} className="flex items-center">
                  <div className='w-44'>{skill.name}</div>
                  <div className='w-96 h-1'>{renderSkillBars(skill.level)}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Skillset;
