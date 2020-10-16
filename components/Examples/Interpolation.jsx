import PropTypes from 'prop-types';
import { useState } from 'react';
import { withTranslation } from '../../i18n';

const InterpolationExample = ({ t }) => {
  const [fields, setField] = useState({ name: 'Michael', location: 'London' });
  return (
    <div>
      <dl>
        <dt>
          <label htmlFor="name">{t('interpolation:name')}: </label>
        </dt>
        <dd>
          <input
            id="name"
            onChange={(e) => setField({ ...fields, name: e.target.value })}
            defaultValue={fields.name}
          />
        </dd>
        <dt>
          <label htmlFor="location">{t('interpolation:location')}: </label>
        </dt>
        <dd>
          <input
            id="location"
            onChange={(e) => setField({ ...fields, location: e.target.value })}
            defaultValue={fields.location}
          />
        </dd>
      </dl>
      <p>{t('interpolation:aboutPerson', fields)}</p>
    </div>
  );
};

InterpolationExample.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('interpolation')(InterpolationExample);
