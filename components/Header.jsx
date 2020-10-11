import PropTypes from 'prop-types'
import Head from 'next/head'

const Header = ({ title }) => (
    <>
        <h2>
            {title}
        </h2>
        <hr />
        <a
            className="github"
            href="//github.com/isaachinman/next-i18next"
        >
        </a>
    </>
)

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
