import { Icon } from './index';

export default function SkillHeader({ skill }: any) {
  return (
    <div className='max-w-7xl mx-auto pt-8 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <Icon size='w-52 h-52 mb-8 mx-auto' skillName={skill.name || ''} />
      <div className='text-center'>
        <h2 className='font-sans text-base font-semibold text-primary tracking-wide uppercase'>{skill.category}</h2>
        <p className='font-sans mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
          {skill.name}
        </p>
        <p className='font-sans max-w-xl mt-5 mx-auto text-xl text-gray-500'>{skill.description}</p>
      </div>
    </div>
  );
}
