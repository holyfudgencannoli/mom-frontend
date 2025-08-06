import { Carousel } from 'primereact/carousel'
import './HelloWorld.css' 
import ProductCarouselHome from '../prooduct_carousel_home/ProductCarouselHome'



export default function HelloWorld() {

    return(
        <div id='home-title-box'>
            <h1 id='home-title'>Website Under Construction</h1>
            <h2 id='home-subtitle'>Check back soon to shop thoughtfully crafted mushroom products.</h2>
            {/* <h1 id='home-title'>Mushrooms. Reimagined.</h1>
            <h2 id='home-subtitle'>Shop thoughtfully crafted mushroom products.</h2>
            <h2 id='home-subtitle'>Explore the fruits of wisdom within the mycelial world.</h2>
            <h2><a className='link' href='/shop'>Shop Mushrooms</a> | <a className='link' href='/blog'>Read The Blog</a></h2> */}
        </div>
    )
    
}