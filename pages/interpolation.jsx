import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { i18n, withTranslation } from '../i18n';
import Header from '../components/Header';
import InterpolationExample from '../public/static/exampleComponents/Interpolation';

const Interpolation = ({ exampleSrc, i18nFiles }) => (
  <main>
    <Header title="Interpolation Example" />
    <section className="preview">
      <InterpolationExample />
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
          <p>interpolation/en.json</p>
          <SyntaxHighlighter language="json">
            {i18nFiles.en}
          </SyntaxHighlighter>
        </div>
        <div className="i18n-snippet" data-lang="de">
          <p>interpolation/de.json</p>
          <SyntaxHighlighter language="json">
            {i18nFiles.de}
          </SyntaxHighlighter>
        </div>
        <div className="i18n-snippet" data-lang="ru">
          <p>interpolation/ru.json</p>
          <SyntaxHighlighter language="json">
            {i18nFiles.ru}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
    <section className="tips">
      <h2>Why?</h2>
      <ul>
        <li>In the case of dynamic text, it's not enough to simply translate and swap word for word, because different languages will order their words differently. For example, switch to German and watch the verb take the end of the sentence instead of the city name.</li>
      </ul>
    </section>
  </main>
);

export async function getServerSideProps() {
  const fs = require('fs');
  const path = require('path');
  const getConfig = require('next/config');
  const { serverRuntimeConfig } = getConfig();

  const exampleSrc = fs.readFileSync(path.join(serverRuntimeConfig.PROJECT_ROOT, './public/static/exampleComponents/Interpolation.jsx'), 'utf8');

  const i18nFiles = {
    en: fs.readFileSync(path.resolve('./public/static/locales/en', 'interpolation.json'), 'utf8'),
    de: fs.readFileSync(path.resolve('./public/static/locales/de', 'interpolation.json'), 'utf8'),
    ru: fs.readFileSync(path.resolve('./public/static/locales/ru', 'interpolation.json'), 'utf8'),
  };

  return {
    props: {
      namespacesRequired: ['common', 'footer', 'interpolation'],
      exampleSrc,
      i18nFiles,
    },
  };
}

Interpolation.propTypes = {
  exampleSrc: PropTypes.string.isRequired,
  i18nFiles: PropTypes.shape({
    en: PropTypes.string.isRequired,
    de: PropTypes.string.isRequired,
    ru: PropTypes.string.isRequired,
  }).isRequired,
};

export default withTranslation('basic')(Interpolation);
