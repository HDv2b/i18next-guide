import PropTypes from 'prop-types';
import { useState } from 'react';
import { withTranslation } from '../i18n';
import Header from '../components/Header';

const InterpolationDemo = ({ t }) => {
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

const Homepage = ({ t }) => (
  <main>
    <Header title="Interpolation Example" />
    <div className="preview">
      <InterpolationDemo t={t} />
    </div>
    <div>
      <h2>Tips</h2>
      <ul>
        <li>In the case of dynamic text, it's not enough to simply translate and swap word for word, because different languages will order their words differently. For example, switch to German and watch the verb take the place place instead of the city name.</li>
      </ul>
    </div>
  </main>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'interpolation'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('basic')(Homepage);
