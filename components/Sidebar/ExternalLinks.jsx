import Link from 'next/link';

const icons = {
  github: <i className="typcn typcn-social-github-circular" />,
};

const links = [
  {
    label: 'next-i18next docs',
    pageName: 'https://github.com/isaachinman/next-i18next',
    icon: icons.github,
  },
  {
    label: 'react-i18next docs',
    pageName: 'https://react.i18next.com/',
  },
];

const ExternalLinks = () => (
  <div>
    <ul>
      {
                links.map((link) => (
                  <li>
                    <a href={link.pageName}>
                      {link.icon}
                      {link.label}
                    </a>
                  </li>
                ))
            }
    </ul>
  </div>
);

export default ExternalLinks;
