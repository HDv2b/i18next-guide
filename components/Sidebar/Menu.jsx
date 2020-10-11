import Link from 'next/link';

const links = [
  {
    label: 'Intro',
    pageName: '/',
  },
  {
    label: 'Basic',
    pageName: 'basic',
  },
  {
    label: 'Plurals',
    pageName: 'plurals',
  },
];

const Menu = () => (
  <div>
    <ul>
      {
                links.map((link) => <li><Link href={link.pageName}>{link.label}</Link></li>)
            }
    </ul>
  </div>
);

export default Menu;
