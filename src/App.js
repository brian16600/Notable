import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/css/main.css';
import IndexActions from './components/IndexActions'
import IndexForm from './components/IndexForm'
import IndexHeader from './components/IndexHeader'
import IndexInput from './components/IndexInput'
import IndexMajor from './components/IndexMajor'
import IndexMenu from './components/IndexMenu'
import IndexMiniPosts from './components/IndexMiniPosts'
import IndexPosts from './components/IndexPosts'
import IndexSection from './components/IndexSection'
import IndexTopContributors from './components/IndexTopContributors'
import NotableTitle from './components/NotableTitle'
import Sidebar from './components/Sidebar'

function App() {
  return (

      <div className="App">

        <NotableTitle />
        <body class="is-preload">
          <div id="wrapper">
            <div id="main">
              <IndexHeader />
              <IndexSection />
              <IndexMajor text="Newest Uploads" />
              <IndexPosts />
            </div>
            <Sidebar />
          </div>
          <script src="assets/js/jquery.min.js"></script>
    			<script src="assets/js/browser.min.js"></script>
    			<script src="assets/js/breakpoints.min.js"></script>
    			<script src="assets/js/util.js"></script>
    			<script src="assets/js/main.js"></script>
        </body>
      </div>
  );
}

export default App;
