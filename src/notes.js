import IndexHeader from './components/IndexHeader'
import Notabletitle from './components/NotableTitle'
import NotesMain from './components/NotesMain'

function notes () {
  return (
    <div className="notes">
      <NotableTitle />
      <body class="is-preload">
        <div id="wrapper">
          <div id="main">
            <div class="inner">
              <IndexHeader />
              <NotesMain />
            </div>
          </div>
        <Sidebar />
        </div>
      </body>
    </div>
  )

}
