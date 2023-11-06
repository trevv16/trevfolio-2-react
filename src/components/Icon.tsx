import { useState, useEffect } from 'react';
import { FaAws, FaJava, FaReact, FaSketch, FaNodeJs } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import {
  SiGooglecloud,
  SiKubernetes,
  SiLinux,
  SiMicrosoftazure,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiDjango,
  SiFlask,
  SiDocker,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiMocha,
  SiJest,
  SiJenkins,
  SiCypress,
  SiTerraform,
  SiAnsible,
  SiNextdotjs,
  SiRedux,
  SiTestinglibrary
} from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';

export default function HomePage(props: any) {
  const [size, setSize] = useState('w-10 h-10');

  useEffect(() => {
    setSize(props.size);
  }, [props.size]);

  const GithubActionsIcon = (props: any) => (
    <svg
      className={props.className}
      xmlns='http://www.w3.org/2000/svg'
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      role='img'
    >
      <title>GitHub Actions icon</title>
      <path d='M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z' />
    </svg>
  );

  const getSkillIcon = (skill: string) => {
    switch (skill?.toLowerCase()) {
      case 'aws':
        return <FaAws className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'gcp':
        return <SiGooglecloud className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'linux':
        return <SiLinux className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'kubernetes':
        return <SiKubernetes className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'azure':
        return <SiMicrosoftazure className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'mocha':
        return <SiMocha className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'cypress':
        return <SiCypress className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'terraform':
        return <SiTerraform className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'ansible':
        return <SiAnsible className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'jest':
        return <SiJest className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'jenkins':
        return <SiJenkins className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'github actions ci':
        return <GithubActionsIcon className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'figma':
        return <FiFigma className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'sketch':
        return <FaSketch className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'html':
        return <SiHtml5 className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'css':
        return <SiCss3 className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'sass':
        return <IoLogoSass className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'tailwind':
        return <SiTailwindcss className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'tailwind css':
        return <SiTailwindcss className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'node':
        return <FaNodeJs className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'next js (react)':
        return <SiNextdotjs className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'react testing library':
        return <SiTestinglibrary className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'react':
        return <FaReact className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'redux':
        return <SiRedux className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'typescript':
        return <SiTypescript className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'python':
        return <SiPython className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'java':
        return <FaJava className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'django':
        return <SiDjango className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'golang':
        return (
          <svg
            className={`${size} flex-shrink-0 hover:text-gray-500 mb-`}
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Go</title>
            <path d='M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z' />
          </svg>
        );

      case 'flask':
        return <SiFlask className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'docker':
        return <SiDocker className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'mysql':
        return <SiMysql className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'mongodb':
        return <SiMongodb className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'postgres':
        return <SiPostgresql className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'redis':
        return <SiRedis className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'lambda':
        return <FaAws className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'linkedin':
        return <AiOutlineLinkedin className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'github':
        return <AiOutlineGithub className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      default:
        return;
    }
  };

  return <>{getSkillIcon(props.skillName)}</>;
}
