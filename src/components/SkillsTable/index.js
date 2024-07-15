import './index.scss'

const SkillsTable = ({projects}) => {
    return(
       <table>
        <thead>
            <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Skills</th>
            </tr>
        </thead>
        <tbody>
            {projects.map((project, index) => (
                <tr key={index}>
                    <td><a href={project.link} target='_blank' rel='noreferrer'>{project.name}</a></td>
                    <td>{project.description}</td>
                    <td>{project.skills.join(', ')}</td>
                </tr>
            ))}
        </tbody>
       </table>
    );
}
export default SkillsTable 