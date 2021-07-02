import React, { useState, useEffect } from 'react';
import { FaAws } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
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
  const [size, setSize] = useState('w-10 h-10');

  useEffect(() => {
    setSize(props.size);
  }, [props.size]);

  const getSkillIcon = (skill: string) => {
    switch (skill?.toLowerCase()) {
      case 'aws':
        return <FaAws className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'linux':
        return <SiLinux className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'kubernetes':
        return <SiKubernetes className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'azure':
        return <SiMicrosoftazure className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'figma':
        return <FiFigma className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'html':
        return <SiHtml5 className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'css':
        return <SiCss3 className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'tailwind':
        return <SiTailwindcss className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'node':
        return <SiNodeDotJs className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'react':
        return <SiReact className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'typescript':
        return <SiTypescript className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'python':
        return <SiPython className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'django':
        return <SiDjango className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'flask':
        return <SiFlask className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'docker':
        return <SiDocker className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'mysql':
        return <SiMysql className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'mongodb':
        return <SiMongodb className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'linkedin':
        return <AiOutlineLinkedin className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'github':
        return <AiOutlineGithub className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'instagram':
        return <AiOutlineInstagram className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      default:
        return;
    }
  };

  return <>{getSkillIcon(props.skillName)}</>;
}
