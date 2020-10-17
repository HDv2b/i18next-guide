import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { i18n, withTranslation } from '../i18n';
import Header from '../components/Header';
import InterpolationExample from '../components/Examples/Interpolation';
import InterpolationExampleSrc from '!!raw-loader!../components/Examples/Plurals';
import InterpolationI18nEnSrc from '!!json-raw-loader!../public/static/locales/en/interpolation.json';
import InterpolationI18nDeSrc from '!!json-raw-loader!../public/static/locales/de/interpolation.json';
import InterpolationI18nRuSrc from '!!json-raw-loader!../public/static/locales/ru/interpolation.json';

const Interpolation = () => (
  <main>
    <Header title="Interpolation Example" />
    <section className="preview">
      <InterpolationExample />
    </section>
    <section>
      <h2>Code</h2>
      <div>
        <SyntaxHighlighter language="jsx" showLineNumbers>
          {InterpolationExampleSrc}
        </SyntaxHighlighter>
      </div>
      <div className="i18n-snippet-container" data-selected-lang={i18n.language}>
        <div className="i18n-snippet" data-lang="en">
          <p>interpolation/en.json</p>
          <SyntaxHighlighter language="json">
            {InterpolationI18nEnSrc}
          </SyntaxHighlighter>
        </div>
        <div className="i18n-snippet" data-lang="de">
          <p>interpolation/de.json</p>
          <SyntaxHighlighter language="json">
            {InterpolationI18nDeSrc}
          </SyntaxHighlighter>
        </div>
        <div className="i18n-snippet" data-lang="ru">
          <p>interpolation/ru.json</p>
          <SyntaxHighlighter language="json">
            {InterpolationI18nRuSrc}
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
  return {
    props: {
      namespacesRequired: ['common', 'footer', 'interpolation'],
    },
  };
}

export default withTranslation('basic')(Interpolation);
