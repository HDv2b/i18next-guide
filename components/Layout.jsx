import Head from 'next/head';
import Footer from './Footer';
import Sidebar from './Sidebar';
import LanguagePicker from './LanguagePicker';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>next-i18next</title>

      <link href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" rel="stylesheet" />
      <link href="/static/app.css" rel="stylesheet" />

      <link href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600" rel="stylesheet" />
      <link data-react-helmet="true" rel="icon" href="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&amp;alt=media" />
    </Head>
    <div>
      <header><h1>next-18next examples</h1></header>
      <div className="container">
        <Sidebar />
        <div className="content">
          <LanguagePicker />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default Layout;
