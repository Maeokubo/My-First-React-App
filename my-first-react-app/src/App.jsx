
import './App.css'

const Ads = () => {
  const ads  = {
    background: '#e3670c',
    color: 'white',
    marginTop: '2em',
    border:'none',
  }

  return (
    <div>
      <button  style={ads}>TeachUp Ads</button>
    </div>
)};

const Header = () => {
  const headerStyle = {
    display: 'flex',
    position: 'absolute',
    gap: '15em',
    top: '0',
    background: '#d8d7d7',
    
  }

  return (
    <header style={headerStyle}>
    <h1> TechUp Thailand</h1>
    <Ads />
  </header>
)};

const Section = () => {
  const sectionStyles = {
    background: '#535a3b',
    padding: '4em 4em', 
    textAlign: 'center', 
    color: 'white',
    borderRadius:'2px',
  }

  const h1Styles = {
     textShadow: '-2px 2px 20px #eff7d3',
     textTransform:'uppercase',
  }

  return(
    <section style={sectionStyles}>
    <h1 style={h1Styles} >My First React App on Vite⚡️</h1>
    <Ads />
  </section> 
  )};

const Footer = () => {

  const footerStyles = {
    display: 'flex',
    position: 'absolute',
    bottom: '0',
    gap: '20em',
    background: '#d8d7d7',
    
  };

  return(
    <footer  style={footerStyles}>
    <h3>DT Hazuki Okubo</h3>
    <Ads />
  </footer>
)};

const App = () => {
  return (
    <>
    <Header />
    <Section />
    <Footer />
    </>  
)};


export default App;
