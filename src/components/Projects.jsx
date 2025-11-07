import { Fragment } from "react";

import projectData from '/assets/json/projects.json';
import LongText from './LongText.jsx';

function Projects() {
    const visibleCategories = projectData.categories.filter(category => 
        category.visible === true
    );
    const categories = visibleCategories.map(category => 
        <div key={category.name} className='category'>
            <h3>{category.name}</h3>
            <ul className='projects'>
                {category.projects.filter(project => project.visible !== false).map( project =>
                    <li className='categoryItem' key={project.name}>
                        <h4>{project.name}</h4>
                        {
                            (project.url || project.sourceCode) && (
                                <ul className='horizontal'>
                                    { project.url && (<li><a href={project.url}>Website</a></li>) }
                                    { project.sourceCode && (<li><a href={project.sourceCode}>Source Code</a></li>) }
                                </ul>
                            )
                        }
                        {
                            project.description && (
                                    <LongText>
                                        {project.description}
                                    </LongText>
                            )
                        }
                        {/* {
                            project.listItems ? (
                                <ul>
                                    {project.listItems.map(item => 
                                        <li key={item}>{item}</li>
                                    )}
                                </ul>
                            ) : (<></>)
                        } */}
                    </li>
                )}
            </ul>
        </div>
    );

    return (
        <>
            {categories}
        </>
    )
}

export default Projects