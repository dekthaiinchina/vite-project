import { useRef, useState } from 'react'
import './index.css'

function Wordmark() { return <>page<span>.dekthaiinchina</span></> }

function App() {
  const [entered, setEntered] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  function enter() {
    setEntered(true)
    requestAnimationFrame(() => heading.current?.focus())
  }
  return (
    <>
      <button className={`splash ${entered ? 'hidden' : ''}`} onClick={enter} tabIndex={entered ? -1 : 0} aria-hidden={entered} aria-label="enter to dekthaiinchina.com">
        <span className="splash-logo"><Wordmark /></span>
        <span className="splash-cta">click to continue</span>
      </button>
      <main className={`page ${entered ? 'visible' : ''}`} inert={!entered}>
        <header className="header">
          <h1 className="logo" ref={heading} tabIndex={-1}><Wordmark /></h1>
        </header>
        <section className="announcement" aria-labelledby="notice-title">
          <h2 id="notice-title">Notice</h2>
          <p>This is my personal webpage. If you would like to get in touch or visit my GitHub repository, please click on the options below.</p>
          <p>This website is currently under development. We sincerely apologize for any errors you may encounter.</p>
        </section>
        <section aria-labelledby="downloads-title">
          <h2 className="downloads-label" id="downloads-title">Projects | Contact Channels</h2>
          <div className="downloads">
            <article className="download-card">
              <div className="download-info"><h3>GitHub</h3><p>visit my github repository</p></div>
              <a href="https://github.com/dekthaiinchina" aria-label="GitHub repository">GO <span aria-hidden="true">→</span></a>
            </article>
            <article className="download-card">
              <div className="download-left">
                <div className="download-info"><h3>Contact Me</h3><p>Send me an email directly</p></div>
              </div>
              <a href="mailto:contactme@dekthaiinchina.com" aria-label="">GO <span aria-hidden="true">→</span></a>
            </article>
          </div>
        </section>
        <footer>- Made with ❤️ by dekthaiinchina -</footer>
      </main>
    </>
  )
}
export default App
