import PropTypes from 'prop-types';
import { useState } from 'react';
import { i18n, Link, withTranslation } from '../i18n';
import Header from '../components/Header';

const Homepage = ({ t }) => {
  const [number, setNumber] = useState(1);

  return (
    <main>
      <Header title={t('h1')} />
      <div>

        <div>
          <input type="number" onChange={(e) => setNumber(parseInt(e.target.value, 10))} defaultValue={number} />
          <p>{t('plurals:keyWithCount', { count: number })}</p>
        </div>

        <p>
          see:
          <a href="https://jsfiddle.net/sm9wgLze">https://jsfiddle.net/sm9wgLze</a>
        </p>

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
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'plurals'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Homepage);
