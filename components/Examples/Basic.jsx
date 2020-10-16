import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';

const BasicExample = ({ t }) => (
  <div>
    <p>{t('greeting')}</p>
  </div>
);

BasicExample.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('basic')(BasicExample);
