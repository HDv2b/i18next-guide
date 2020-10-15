import { appWithTranslation } from '../i18n';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default appWithTranslation(MyApp);
