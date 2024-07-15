import SkillsTable from '../SkillsTable';
import './index.scss'

const Skills = () => {
    const projects = [
        {
            link:'https://github.com/programat3/LCOScripts',
            name:'Grafana Dashboard project for Las Campanas Observatory',
            description:'A project to create a Grafana Dashboard for the Las Campanas Observatory in Chile. The dashboard will display information about the weather, the status of the telescopes, and other relevant data.',
            skills: ['Grafana', 'JavaScript', 'Python', 'Plotly js']
        },
        {
            link:'https://lincan-lsd.itch.io/ecotrader',
            name:'EcoTrader: Valdivia Recovery',
            description:'A mobile game, centered around recycling and sustainability, that was developed for the Global Gamers GameJam 2024',
            skills: ['Flutter', 'Google Wallet', 'Dart']
        },
        {
            link:'https://programat3.github.io/',
            name: 'Personal Portfolio',
            description: 'A portfolio website to showcase my projects and skills',
            skills: ['React js', 'JavaScript', 'HTML', 'CSS']
        }
    ];
    const jobs = [
        {
            link:'https://www.linkedin.com/in/lia-dsr/',
            name: 'BI Analyst at Miniso',
            description: 'I worked as a BI Analyst at Miniso, where I was responsible for creating reports and dashboards to help the company make data-driven decisions.',
            skills: ['Present day', '05/2024']
        },
        {
            link:'https://www.linkedin.com/in/lia-dsr/',
            name: 'Data Analyst at Las Campanas Observatory',
            description: 'I worked as an Intern at the observatory, where I was responsible for analyzing data from the telescopes and creating reports for the astronomers.',
            skills:['01/2024', '03/2024']
        },
        {
            link:'https://www.linkedin.com/in/lia-dsr/',
            name: 'Data Analyst at UC',
            description: 'I worked as a Data Analyst at Universidad Católica de Chile, where I was responsible of analyzing data from the university and creating reports for the administration. Using SalesForce, Power BI and Python',
            skills:['08/2023', '12/2023']
        }
    ];
    return(
        <div className="container skills-page">
            <div className='text-zone'>
                <h1>Projects</h1>
                <SkillsTable projects={projects} />
            </div>
            <div className='text-zone'>
                <h1>Work Experience</h1>
                <SkillsTable projects={jobs} />
        </div>
        </div>
    );
}

export default Skills