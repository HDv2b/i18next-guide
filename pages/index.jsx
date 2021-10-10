import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import Header from '../components/Header';

const Homepage = ({ t }) => (
  <main>
    <Header title="Welcome!" />
    <p>The purpose of this site is to demonstrate real-world examples of why proper i18n is neccesary, as well as provide code samples.</p>
    <p>It is built primarily with next.js in consideration as it's the framework I was using during a project for which needed to learn about i18n, but it is built on the same i18n practices (and libraries, mostly) which most other frameworks use. However, since starting this project, Next.js has had some updates which I've not caught up with, so some specific code my be out of date with the latest versions of Next and i18next.<p>
  </main>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Homepage);
