import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { i18n, withTranslation } from '../i18n';
import Header from '../components/Header';
import PluralsExample from '../components/Examples/Plurals';

const Plurals = ({ exampleSrc, i18nFiles }) => (
  <main>
    <Header title="Plurals example" />
    <div>
      <section className="preview">
        <p>
          Change the counter below and watch the sentence update to use the appropriate&nbsp;
          <a href="https://en.wikipedia.org/wiki/Grammatical_number">grammatical number</a>
          .
        </p>
        <PluralsExample />
      </section>
      <section>
        <h2>Code</h2>
        <div>
          <SyntaxHighlighter language="jsx" showLineNumbers>
            {exampleSrc}
          </SyntaxHighlighter>
        </div>
        <div className="i18n-snippet-container" data-selected-lang={i18n.language}>
          <div className="i18n-snippet" data-lang="en">
            <p>plurals/en.json</p>
            <SyntaxHighlighter language="json">
              {i18nFiles.en}
            </SyntaxHighlighter>
          </div>
          <div className="i18n-snippet" data-lang="de">
            <p>plurals/de.json</p>
            <SyntaxHighlighter language="json">
              {i18nFiles.de}
            </SyntaxHighlighter>
          </div>
          <div className="i18n-snippet" data-lang="ru">
            <p>plurals/ru.json</p>
            <SyntaxHighlighter language="json">
              {i18nFiles.ru}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
      <section className="tips">
        <h2>Tips</h2>
        <ul>
          <li>Remember that even in English, it's not helpful to just stick an "s" at the end of every word to make it plural. For example "sheep" and "hooves" and "wellies".</li>
          <li>In some languages, the adjective is also pluralized.</li>
          <li>In English we only have singular and plural, but other languages have different "<a href="https://en.wikipedia.org/wiki/Grammatical_number">grammatical numbers</a>". For example some language feature "Dual", where the word is spelt differently than either its singular or plural form. This is just one example of different grammatical numbers out there. For another example, switch to Russian (ru), and notice the spelling change between 0, 1, 2, and 5 items.</li>
          <li>For a guide for how to support individual languages' grammatical numbers, see <a href="https://jsfiddle.net/sm9wgLze">https://jsfiddle.net/sm9wgLze</a>.</li>
        </ul>
      </section>
    </div>
  </main>
);

export async function getServerSideProps() {
  const fs = require('fs');
  const path = require('path');

  const exampleSrc = fs.readFileSync(path.resolve('./components/Examples', 'plurals.jsx'), 'utf8');

  const i18nFiles = {
    en: fs.readFileSync(path.resolve('./public/static/locales/en', 'plurals.json'), 'utf8'),
    de: fs.readFileSync(path.resolve('./public/static/locales/de', 'plurals.json'), 'utf8'),
    ru: fs.readFileSync(path.resolve('./public/static/locales/ru', 'plurals.json'), 'utf8'),
  };

  return {
    props: {
      namespacesRequired: ['common', 'footer', 'plurals'],
      exampleSrc,
      i18nFiles,
    },
  };
}

Plurals.propTypes = {
  exampleSrc: PropTypes.string.isRequired,
  i18nFiles: PropTypes.shape({
    en: PropTypes.string.isRequired,
    de: PropTypes.string.isRequired,
    ru: PropTypes.string.isRequired,
  }).isRequired,
};

export default withTranslation('common')(Plurals);
