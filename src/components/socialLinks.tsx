import { GitHub, Globe, Instagram, Linkedin } from 'react-feather';

interface Props {
  color?: string;
}

function SocialLinks(props: Props) {
  return (
    <div className="flex items-center lg:mt-4 opacity-70">
      <a href="https://portfolio.yuanlin.dev" target="_blank" rel="noreferrer">
        <Globe
          size={18}
          className="transition hover:text-zinc-500"
          color={props.color}
        />
      </a>
      <a
        href="https://github.com/yuaanlin"
        className="ml-4 transition hover:text-zinc-500"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub size={18} color={props.color} />
      </a>
      <a
        href="https://www.linkedin.com/in/yuanlinlin"
        className="ml-4 transition hover:text-zinc-500"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin size={18} color={props.color} />
      </a>
      <a
        href="https://www.instagram.com/yuaanlin/"
        className="ml-4 transition hover:text-zinc-500"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram size={18} color={props.color} />
      </a>
    </div>
  );
}

export default SocialLinks;
