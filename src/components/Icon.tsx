import React, { useState, useEffect } from 'react';
import { FaAws } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import {
  SiKubernetes,
  SiLinux,
  SiMicrosoftazure,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodeDotJs,
  SiReact,
  SiTypescript,
  SiPython,
  SiDjango,
  SiFlask,
  SiDocker,
  SiMysql,
  SiMongodb
} from 'react-icons/si';

export default function HomePage(props: any) {
  const [skill, setSkill] = useState(props.skillName);
  const [size, setSize] = useState('w-10 h-10');

  useEffect(() => {
    setSkill(props.skillName);
    setSize(props.size);
  }, [props.skillName, props.size]);

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case 'aws':
        return <FaAws className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'linux':
        return <SiLinux className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'kubernetes':
        return <SiKubernetes className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'azure':
        return <SiMicrosoftazure className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'figma':
        return <FiFigma className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'html':
        return <SiHtml5 className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'css':
        return <SiCss3 className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'tailwind':
        return <SiTailwindcss className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'node':
        return <SiNodeDotJs className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'react':
        return <SiReact className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'typescript':
        return <SiTypescript className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'python':
        return <SiPython className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'django':
        return <SiDjango className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'flask':
        return <SiFlask className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'docker':
        return <SiDocker className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'mysql':
        return <SiMysql className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'mongodb':
        return <SiMongodb className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      default:
        return;
    }
  };

  return <>{getSkillIcon(skill.toLowerCase())}</>;
}
