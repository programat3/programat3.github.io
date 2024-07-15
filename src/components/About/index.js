import './index.scss';
import Face1 from '../../assets/images/Cube/1.png'
import Face2 from '../../assets/images/Cube/2.png'
import Face3 from '../../assets/images/Cube/3.png'
import Face4 from '../../assets/images/Cube/4.png'
import Face5 from '../../assets/images/Cube/5.png'
import Face6 from '../../assets/images/Cube/6.png'
const About = () => {

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    About Me
                </h1>
                <p>
                I am a Computer Programmer Analyst with a passion for technology and innovation. I have experience in Fullstack Web & Mobile Development, Data Analysis, and Game Development.
                </p>
                <p>
                As a student at Duoc UC, I was assigned CITT Leader (Centro de Innovación y Transferencia Tecnológica), where I was responsible for guiding and mentoring my peers in developing their projects as well as being assigned MMT Leader (Más Mujeres en las TICs) where I was responsible for promoting the participation of women in the technology industry.
                </p>
                <p>
                I enjoy new challenges, learning opportunities, volunteering, and advocating for social causes. I am currently looking for a new opportunity to grow my career.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <img src={Face1} alt='Face1'/>
                    </div>
                    <div className='face2'>
                        <img src={Face2} alt='Face1'/>
                    </div>
                    <div className='face3'>
                        <img src={Face3} alt='Face1'/>
                    </div>
                    <div className='face4'>
                        <img src={Face4} alt='Face1'/>
                    </div>
                    <div className='face5'>
                        <img src={Face5} alt='Face1'/>
                    </div>
                    <div className='face6'>
                        <img src={Face6} alt='Face1'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;