import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import Header from '../components/Header';

const Homepage = ({ t }) => (
  <main>
    <Header title="Welcome!" />
    <p>Hello World</p>
  </main>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Homepage);
