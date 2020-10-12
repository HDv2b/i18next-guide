import PropTypes from 'prop-types';
import { useState } from 'react';
import { withTranslation } from '../i18n';
import Header from '../components/Header';

const Homepage = ({ t }) => {
  const [fields, setField] = useState({ name: 'Michael', location: 'London' });

  return (
    <main>
      <Header title="Interpolation Example" />
      <div className="preview">
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
        <br />
        <br />
        <p>{t('interpolation:aboutPerson', fields)}</p>
      </div>
    </main>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'interpolation'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('basic')(Homepage);
