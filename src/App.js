import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import PopupCard from './components/PopupCard';

import './App.css';

const App = () => (
  <div className = 'container'>
    <div className = 'first-container'>
        <div className='icon-container'>
          <img src = './images/main-icon.jpg' className='main-icon' alt = 'icon' />
        </div>
        <div className='caption-container'>
        <h1 className='heading'>The choice is yours. <br/> Because they don't have one.</h1>
        <button type='button' className='btn'>QUICK VIEW</button>
        </div>
    </div>
    <div className='middle-container'>
        <div className='about-heading-container'>
          <hr className='line' />
          <p className='heading2'>About</p>
          <hr className='line'/>
        </div>
        <div className='about-text-container'>
        <p className='about-description'>Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them.</p>
        <p className='about-caption'>The choice is yours. Because they don’t have one.</p>
        </div>
        <div className='about-heading-container'>
          <hr className='line' />
          <p className='heading2'>Our products</p>
          <hr className='line'/>
        </div>
        <div className='products-container'>
            <div className='product-container'>
              <img src = './images/normal-image.jpg' className='product-image' alt = 'product' />
              <div className='quick-view-container'>
                  <p className='product-name'>Raju Rassibomb</p>
                  <Popup modal trigger={<button type = 'button' className='btn2'>QUICK VIEW</button>}>
                      <PopupCard name='Raju Rassibomb' />
                  </Popup>
                  
              </div>
            </div>
            <div className='product-container'>
              <img src = './images/normal-image.jpg' className='product-image' alt = 'product' />
              <div className='quick-view-container'>
                  <p className='product-name'>Ladiyon ki Rani Chani</p>
                  <Popup modal trigger={<button type = 'button' className='btn2'>QUICK VIEW</button>}>
                      <PopupCard name='Ladiyon ki Rani Chani' />
                  </Popup>
                  
              </div>
            </div>
        </div>
        <hr className='full-line' />
    </div>
    <div className='last-container'>
        <img src='./images/decor-icon.jpg' className='decor-icon' alt='icon' /> 
        <div className='follow-us-container'>
            <p className='follow-us-text'>Follow us on</p>
            <div>
                <img src='./images/001-instagram.jpg' className='icon' alt='instagram' />
                <img src='./images/002-youtube.jpg' className='icon' alt='youtube' />
                <img src='./images/003-twitter.jpg' className='icon' alt='twitter' />
                <img src='./images/004-facebook.jpg' className='icon' alt='facebook' />
                <img src='./images/005-linkedin.jpg' className='icon' alt='ilinkedin' />
            </div>
        </div>   
        <img src='./images/decor-icon.jpg' className='decor-icon' alt='icon' />    
    </div>
  </div>
)

export default App;
