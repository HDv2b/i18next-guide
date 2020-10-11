import PropTypes from 'prop-types';
import { i18n, Link, withTranslation } from '../i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Homepage = ({ t }) => (
  <main>
    <Header title="" />
    <div>
      <Link href="/second-page">
        <button
          type="button"
        >
          {t('to-second-page')}
        </button>
      </Link>
    </div>
  </main>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Homepage);
