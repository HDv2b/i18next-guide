import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import Header from '../components/Header';

const Homepage = ({ t }) => (
  <main>
    <Header title="Basic Example" />
    <div className="preview">
      <p>{t('greeting')}</p>
    </div>
  </main>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'basic'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('basic')(Homepage);
