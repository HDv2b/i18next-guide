import PropTypes from 'prop-types';
import { useState } from 'react';
import { withTranslation } from '../i18n';
import Header from '../components/Header';

const Homepage = ({ t }) => {
  const [number, setNumber] = useState(1);

  return (
    <main>
      <Header title="Plurals example" />
      <div>
        <div className="preview">
          <div>
            <p>
              Change the counter below and watch the sentence update to use the appropriate&nbsp;
              <a href="https://en.wikipedia.org/wiki/Grammatical_number">grammatical number</a>
              .
            </p>
            <input type="number" onChange={(e) => setNumber(parseInt(e.target.value, 10))} defaultValue={number} />
            <p>{t('plurals:keyWithCount', { count: number })}</p>
          </div>
        </div>

        <p>
          see:
          <a href="https://jsfiddle.net/sm9wgLze">https://jsfiddle.net/sm9wgLze</a>
        </p>
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
