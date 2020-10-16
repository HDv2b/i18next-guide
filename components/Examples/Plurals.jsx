import { useState } from 'react';
import { withTranslation } from '../../i18n';

const PluralsExample = ({ t }) => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
        defaultValue={number}
      />
      <p>{t('plurals:keyWithCount', { count: number })}</p>
    </div>
  );
};

export default withTranslation('plurals')(PluralsExample);
