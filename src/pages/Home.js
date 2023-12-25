import React from 'react'
import Layout from '../component/Layout/Layout'
import { Link } from 'react-router-dom'
import Menu from '../pages/Menu'
import Banner from "../images/banner1.jpeg"
//above : created a custom component for image named 'Banner'
import "../styles/HomeStyles.css"


const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage: `url(${Banner})`}}>
        <div className="home-container">
          <h2>Enjoy our delicious meal</h2>
          <p>Step into a world where passion for food meets warm hospitality. At QuickBite, we invite you to embark on a culinary journey that transcends the ordinary. Our Home page is the gateway to an experience that blends delectable flavors with a welcoming atmosphere.</p>

          <p>Our Home is where hospitality thrives. Picture yourself in our inviting space, where modern aesthetics meet timeless charm. Whether you're planning an intimate dinner, a family celebration, or a casual get-together, QuickBite sets the stage for memorable moments.</p>
          <Link to={"/Menu"}>
          <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
