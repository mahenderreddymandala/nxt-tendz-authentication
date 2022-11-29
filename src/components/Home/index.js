// Write your JS code here
import './index.css'

import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="Home-container">
      <div className="description">
        <h1 className="heading">Clothes That Get You Noticed</h1>
        <p className="paragraph">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="log-button" type="button">
          Shop Now
        </button>
      </div>
      <div className="image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-image"
        />
      </div>
    </div>
  </>
)

export default Home
