import shortid from 'shortid';
import { ProjectCard } from './';

export default function ProjectList(props: any) {
  return (
    <>
      <div>
        <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
          {props.data.map((project: any) => (
            <li key={shortid.generate()}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
