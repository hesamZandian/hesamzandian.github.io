import { ReactComponent as LinkedInIcon } from '../../assets/svg/linkedIn.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';

const socialMedias = [
  {
    icon: GithubIcon,
    href: 'https://github.com/hesamZandian',
  },
  {
    icon: LinkedInIcon,
    href: 'https://ir.linkedin.com/in/hesam-zandian-98155a120',
  },
];

const SocialMedia = () => {
  return (
    <div className={`flex items-center ml-2`}>
      {socialMedias.map((socialMedia, socialMediaIndex) => {
        const Icon = socialMedia.icon;
        return (
          <a
            href={socialMedia.href}
            key={socialMediaIndex}
            className='cursor-pointer w-10 h-10 flex flex-col justify-center items-center shadow-default-dark-btn  rounded-[50px] hover:shadow-hover-dark-btn active:shadow-active-dark-btn transition duration-300 ml-2'
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
