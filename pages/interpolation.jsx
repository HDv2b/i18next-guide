import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { withTranslation } from '../i18n';
import Header from '../components/Header';
import InterpolationExample from '../components/Examples/Interpolation';

const Interpolation = ({ exampleSrc, i18nFiles }) => (
  <main>
    <Header title="Interpolation Example" />
    <div className="preview">
      <InterpolationExample />
    </div>
    <div>
      <SyntaxHighlighter language="jsx" showLineNumbers>
        {exampleSrc}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="json">
        {i18nFiles.en}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="json">
        {i18nFiles.de}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="json">
        {i18nFiles.ru}
      </SyntaxHighlighter>
    </div>
    <div>
      <h2>Tips</h2>
      <ul>
        <li>In the case of dynamic text, it's not enough to simply translate and swap word for word, because different languages will order their words differently. For example, switch to German and watch the verb take the end of the sentence instead of the city name.</li>
      </ul>
    </div>
  </main>
);

export async function getServerSideProps() {
  const fs = require('fs');
  const path = require('path');

  const exampleSrc = fs.readFileSync(path.resolve('./components/Examples', 'interpolation.jsx'), 'utf8');

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
