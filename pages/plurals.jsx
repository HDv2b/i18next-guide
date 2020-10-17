import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { i18n, withTranslation } from '../i18n';
import Header from '../components/Header';
import PluralsExample from '../components/Examples/Plurals';
import PluralsExampleSrc from '!!raw-loader!../components/Examples/Plurals';
import PluralsI18nEnSrc from '!!json-raw-loader!../public/static/locales/en/plurals.json';
import PluralsI18nDeSrc from '!!json-raw-loader!../public/static/locales/de/plurals.json';
import PluralsI18nRuSrc from '!!json-raw-loader!../public/static/locales/ru/plurals.json';

const Plurals = () => (
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
            {PluralsExampleSrc}
          </SyntaxHighlighter>
        </div>
        <div className="i18n-snippet-container" data-selected-lang={i18n.language}>
          <div className="i18n-snippet" data-lang="en">
            <p>plurals/en.json</p>
            <SyntaxHighlighter language="json">
              {PluralsI18nEnSrc}
            </SyntaxHighlighter>
          </div>
          <div className="i18n-snippet" data-lang="de">
            <p>plurals/de.json</p>
            <SyntaxHighlighter language="json">
              {PluralsI18nDeSrc}
            </SyntaxHighlighter>
          </div>
          <div className="i18n-snippet" data-lang="ru">
            <p>plurals/ru.json</p>
            <SyntaxHighlighter language="json">
              {PluralsI18nRuSrc}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
      <section className="tips">
        <h2>Why?</h2>
        <ul>
          <li>Remember that even in English, it's not helpful to just stick an "s" at the end of every word to make it plural. For example "sheep" and "hooves" and "wellies".</li>
          <li>In some languages, the adjective is also pluralized.</li>
          <li>In English we only have singular and plural, which may sound trivial, but other languages have different "<a href="https://en.wikipedia.org/wiki/Grammatical_number">grammatical numbers</a>". For example, switch to Russian (ru), and notice the noun's suffix change between 0, 1, 2, and 5 items.</li>
          <li>It should be noted that the <code>_0</code>, <code>_1</code>, and <code>_2</code> suffixes in the Russian example relate to the group of quantities, and not the number of items being counted. For example, <code>_1</code> for ru applies to quantities of 2, 3, 4, 22, 23, 24, 22, 23, 34, etc, and not 1 or singular.</li>
          <li>For a guide for how to support individual languages' grammatical numbers, see <a href="https://jsfiddle.net/sm9wgLze">https://jsfiddle.net/sm9wgLze</a>.</li>
        </ul>
      </section>
    </div>
  </main>
);

export async function getServerSideProps() {
  return {
    props: {
      namespacesRequired: ['common', 'footer', 'plurals'],
    },
  };
}

export default withTranslation('common')(Plurals);
