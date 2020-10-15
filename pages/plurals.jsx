import PropTypes from 'prop-types';
import { useState } from 'react';
import { withTranslation } from '../i18n';
import Header from '../components/Header';

const PluralsDemo = ({ t }) => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
        defaultValue={number}
      />
      <p>{t('plurals:keyWithCount', { count: number })}</p>
    </div>
  );
};

const Homepage = ({ t }) => (
  <main>
    <Header title="Plurals example" />
    <div>
      <div className="preview">
        <p>
          Change the counter below and watch the sentence update to use the appropriate&nbsp;
          <a href="https://en.wikipedia.org/wiki/Grammatical_number">grammatical number</a>
          .
        </p>
        <PluralsDemo t={t} />
      </div>
      <div>
        <h2>Tips</h2>
        <ul>
          <li>Remember that even in English, it's not helpful to just stick an "s" at the end of every word to make it plural. For example "sheep" and "hooves" and "wellies".</li>
          <li>In some languages, the adjective is also pluralized.</li>
          <li>In English we only have singular and plural, but other languages have different "<a href="https://en.wikipedia.org/wiki/Grammatical_number">grammatical numbers</a>". For example some language feature "Dual", where the word is spelt differently than either its singular or plural form. This is just one example of different grammatical numbers out there. For another example, switch to Russian (ru), and notice the spelling change between 0, 1, 2, and 5 items.</li>
          <li>For a guide on which languages' grammatical numbers are supported, see <a href="https://jsfiddle.net/sm9wgLze">https://jsfiddle.net/sm9wgLze</a></li>
        </ul>
      </div>
    </div>
  </main>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'plurals'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Homepage);
