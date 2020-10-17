import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { i18n, withTranslation } from '../i18n';
import Header from '../components/Header';
import BasicExample from '../components/Examples/Basic';
import BasicExampleSrc from '!!raw-loader!../components/Examples/Basic';
import BasicI18nEnSrc from '!!json-raw-loader!../public/static/locales/en/basic.json';
import BasicI18nDeSrc from '!!json-raw-loader!../public/static/locales/de/basic.json';
import BasicI18nRuSrc from '!!json-raw-loader!../public/static/locales/ru/basic.json';

const Basic = () => (
  <main>
    <Header title="Basic Example" />
    <section className="preview">
      <BasicExample />
    </section>
    <section>
      <h2>Code</h2>
      <div>
        <SyntaxHighlighter language="jsx" showLineNumbers>
          {BasicExampleSrc}
        </SyntaxHighlighter>
      </div>
      <div className="i18n-snippet-container" data-selected-lang={i18n.language}>
        <div className="i18n-snippet" data-lang="en">
          <p>basic/en.json</p>
          <SyntaxHighlighter language="json">
            {BasicI18nEnSrc}
          </SyntaxHighlighter>
        </div>
        <div className="i18n-snippet" data-lang="de">
          <p>basic/de.json</p>
          <SyntaxHighlighter language="json">
            {BasicI18nDeSrc}
          </SyntaxHighlighter>
        </div>
        <div className="i18n-snippet" data-lang="ru">
          <p>basic/ru.json</p>
          <SyntaxHighlighter language="json">
            {BasicI18nRuSrc}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  </main>
);

export async function getServerSideProps() {
  return {
    props: {
      namespacesRequired: ['common', 'footer', 'basic'],
    },
  };
}

export default withTranslation('basic')(Basic);
