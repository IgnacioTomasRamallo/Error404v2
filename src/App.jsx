import scarecrow from '../src/img/scarecrow.png'



import './App.css'

function App() {
  

  return (
    <>
      <h1 className='logo'>404 Not Found</h1>
      <div className='contenedor'>
        
          <div className='imagen'>
            <img src={scarecrow}/>
          </div>

          <div className='box'>
            <h2 className='title'>I have bad news for you</h2>
            <p>
              The page you are looking for might be removed or is temporarily unavailable
            </p>

            <button className='boton'>
              BACK TO HOMEPAGE
            </button>
        </div>
      </div>
      <footer className='footers'>
        <p className='credit'>created by <span className='username'>Ignacio</span> - devChalllenge.io</p>
      </footer>
    </>
  )
}

export default App
