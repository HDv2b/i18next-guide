import PropTypes from 'prop-types';
import Head from 'next/head';
import LanguagePicker from './LanguagePicker';

const Header = ({ title }) => (
  <>
    <h2>
      {title}
    </h2>
    <hr />
    <a
      className="github"
      href="//github.com/isaachinman/next-i18next"
    />
    <LanguagePicker />
  </>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
