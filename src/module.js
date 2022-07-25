import IndexHeader from "./components/IndexHeader";
import Notabletitle from "./components/NotableTitle";
import Sidebar from "./components/Sidebar";

function module() {
  return (
    <div className="module">
      <NotableTitle />
      <body class="is-preload">
        <div id="wrapper">
          <div id="main">
            <IndexHeader />
            <section>
              <header class="module">
                <h1>CS2040S</h1>
              </header>
              <IndexMajor text="Highly Rated Notes" />
              <IndexPosts />
            </section>
          </div>
          <Sidebar />
        </div>
      </body>
    </div>
  );
}
