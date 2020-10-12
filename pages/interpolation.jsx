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
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          onChange={(e) => setField({ ...fields, name: e.target.value })}
          defaultValue={fields.name}
        />
        <br />
        <label htmlFor="location">Location: </label>
        <input
          id="location"
          onChange={(e) => setField({ ...fields, location: e.target.value })}
          defaultValue={fields.location}
        />
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
