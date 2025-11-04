import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import { Fragment } from "react";

import projectData from '/assets/json/projects.json';

function Projects() {
    const visibleCategories = projectData.categories.filter(category => 
        category.visible === true
    );
    const categories = visibleCategories.map(category => 
        <Fragment key={category.name}>
            <h3>{category.name}</h3>
            <ul>
                {category.projects.filter(project => project.visible !== false).map( project =>
                    <li>
                        {
                            project.url ? (
                                <a href={project.url}><strong>{project.name}</strong></a>
                            ) : (
                                <strong>{project.name}</strong>
                            )
                        }
                        {
                            project.description ? (
                                <p>
                                    {project.description}
                                </p>
                            ) : (<></>)
                        }
                        {
                            project.listItems ? (
                                <ul>
                                    {project.listItems.map(item => 
                                        <li key={item}>{item}</li>
                                    )}
                                </ul>
                            ) : (<></>)
                        }
                    </li>
                )}
            </ul>
        </Fragment>
    );

    return (
        <>
            {categories}
        </>
    )
}

export default Projects