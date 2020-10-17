import Head from 'next/head';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>i18next Guide (WIP)</title>

      <link href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" rel="stylesheet" />
      <link href="/static/app.css" rel="stylesheet" />

      <link href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600" rel="stylesheet" />
    </Head>
    <div>
      <header><h1>i18next Guide (WIP)</h1></header>
      <div className="container">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default Layout;
