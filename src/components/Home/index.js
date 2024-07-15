import './index.scss'
import Profile from '../../assets/images/Me.png'

const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                   Hi, <br />
                   I'm 
                   <br />
                   Lía Da Silva
                   <br />
                   Data Analyst
                </h1>
                <h2>
                    Fullstack Web & Mobile Developer / Computer Programmer Analyst / Game Developer
                </h2>
            </div>
            <div className='picture'>
                <img src={Profile} alt='Profile' />
            </div>
        </div>
    );
}
export default Home