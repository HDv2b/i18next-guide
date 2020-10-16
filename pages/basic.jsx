import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../i18n';
import Header from '../components/Header';
import BasicExample from '../public/static/exampleComponents/Basic';

const Basic = ({ exampleSrc, i18nFiles }) => (
  <main>
    <Header title="Basic Example" />
    <section className="preview">
      <BasicExample />
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
          <p>basic/en.json</p>
          <SyntaxHighlighter language="json">
            {i18nFiles.en}
          </SyntaxHighlighter>
        </div>
        <div className="i18n-snippet" data-lang="de">
          <p>basic/de.json</p>
          <SyntaxHighlighter language="json">
            {i18nFiles.de}
          </SyntaxHighlighter>
        </div>
        <div className="i18n-snippet" data-lang="ru">
          <p>basic/ru.json</p>
          <SyntaxHighlighter language="json">
            {i18nFiles.ru}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  </main>
);

export async function getServerSideProps() {
  const fs = require('fs');
  const path = require('path');

  const exampleSrc = fs.readFileSync(path.resolve('./public/static/exampleComponents', 'Basic.jsx'), 'utf8');

  const i18nFiles = {
    en: fs.readFileSync(path.resolve('./public/static/locales/en', 'basic.json'), 'utf8'),
    de: fs.readFileSync(path.resolve('./public/static/locales/de', 'basic.json'), 'utf8'),
    ru: fs.readFileSync(path.resolve('./public/static/locales/ru', 'basic.json'), 'utf8'),
  };

  return {
    props: {
      namespacesRequired: ['common', 'footer', 'basic'],
      exampleSrc,
      i18nFiles,
    },
  };
}

Basic.propTypes = {
  exampleSrc: PropTypes.string.isRequired,
  i18nFiles: PropTypes.shape({
    en: PropTypes.string.isRequired,
    de: PropTypes.string.isRequired,
    ru: PropTypes.string.isRequired,
  }).isRequired,
};

export default withTranslation('basic')(Basic);
