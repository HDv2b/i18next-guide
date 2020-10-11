import { i18n, withTranslation } from '../i18n';

const LanguagePicker = ({ t }) => (
  <section>
    <p>
      Current Locale:
      <code>{i18n.language}</code>
    </p>
    <button
      type="button"
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
    >
      {t('change-locale')}
    </button>
  </section>
);

export default withTranslation('common')(LanguagePicker);
