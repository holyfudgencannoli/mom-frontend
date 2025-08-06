import './About.css'
import { Card } from 'primereact/card'


export default function About() {

    return(
        <div id='about-card' className='about-card'>
            <Card title="About Us">
                <p className="m-0 about-content">
                    At Magic Of Mushrooms, we believe in spreading the magic properties of nature. Started in 2025 by a lone mycologist, Magic Of Mushrooms is a passion project brought in to the world to revolutionize the way we think about not only gourmet delicacies, but also nature, and even medicine.  When you think of mushrooms, we want you to think of the Magic Of Mushrooms. 
                </p>
            </Card>         
        </div>
    )
    
}