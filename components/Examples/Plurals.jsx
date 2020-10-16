import { useState } from 'react';
import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';

const PluralsExample = ({ t }) => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
        defaultValue={number}
      />
      <p>{t('plurals:ambiguous', { count: number })}</p>
      <p>{t('plurals:withNumber', { count: number })}</p>
    </div>
  );
};

PluralsExample.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('plurals')(PluralsExample);
