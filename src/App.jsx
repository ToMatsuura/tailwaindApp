import About from "./About";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">title</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="home" className="mr-5 hover:text-blue-400 duration">
              Home
            </a>
            <a href="about" className="mr-5 hover:text-blue-400 duration">
              <Router>
                <Routes>
                  <Route path="about" element={<About />} />
                </Routes>
              </Router>
              About
            </a>
            <a href="blog" className="mr-5 hover:text-blue-400 duration">
              Blog
            </a>
            <a href="contact" className="hover:text-blue-400 duration">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              Hi!
              <br />
              I'm Tomoya
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              provident iusto id. Tempora harum vitae ducimus commodi suscipit
              minima obcaecati velit alias itaque odio, laboriosam enßim
              provident voluptatibus natus ullam?
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              Contact
            </button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/icon.jpeg" alt="" />
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
              About Me
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              voluptate qui aliquam necessitatibus quisquam ipsam possimus
              accusamus cum eum voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              mollitia nam! Ipsum, cumque, at laborum ipsam nostrum expedita
              consectetur quidem rerum minus, voluptates perspiciatis dolores
              possimus velit sint autem? Magni laborum eum, tempore in ab atque
              nesciunt, commodi est vel animi reprehenderit dolorem ea aliquid
              quia dignissimos, nisi nemo ducimus fuga facilis. Beatae
              distinctio provident voluptas reiciendis culpa eius sint illum
              aliquam officia quia perspiciatis, nisi aut optio quae tenetur
              consequuntur. Debitis, error! Quis voluptate provident quae
              aspernatur incidunt molestiae unde, saepe cumque atque placeat
              iusto laborum esse in, voluptatum non error! Eos eveniet
              dignissimos delectus? Quos eius consequuntur odit!
            </p>
          </div>

          {/* カードのdivタグ */}
          <div className="flex flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita eveniet saepe quaerat ipsum soluta et optio
                    suscipit, natus nisi voluptatibus.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita eveniet saepe quaerat ipsum soluta et optio
                    suscipit, natus nisi voluptatibus.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita eveniet saepe quaerat ipsum soluta et optio
                    suscipit, natus nisi voluptatibus.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* Left Side */}
          <div className=" mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
            <img src="./img/pc.jpg" alt="" className="rounded" />
          </div>
          {/* Right Side */}
          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text3xl font-medium text-gray-900 mb-10 text-center lg:text-left">My Skills</h1>
            <div className="w-full">
              <h2>HTML</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"85%"}}>85%</div>
              </div>
              <h2>CSS</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"75%"}}>85%</div>
              </div>
              <h2>JavaScript</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"55%"}}>85%</div>
              </div>
              <h2>React</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"45%"}}>85%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
