import { Asset } from 'contentful'
import Link from 'next/link'
import React from 'react'
import { IProject } from '../../contentful'
import styles from './Projects.module.scss'

type ProjectsPropsType ={
    projects: IProject[]
}
    const Projects: React.FC<ProjectsPropsType> = ({projects}) => {
    return (
        <section className={styles.projects} id="projects">
            <div className="container">
                <div className={styles.projects__inner}>
                    <h3 className={styles.projects__title + " title"}>Projects</h3>
                    <ul className={styles.projects__list}>
                        {projects.map((project) => <ProjectItem key={project.fields.projectSlug} projectHostingLink={project.fields.projectHostingLink} projectThumbNail={project.fields.projectThumbNail} projectDescription={project.fields.projectDescription} hoverDescription={project.fields.hoverDescription} projectName={project.fields.projectName} />)}
                    </ul>
                </div>
            </div>
        </section>
    )
}
type ProjectPropsType = {
    projectThumbNail: Asset | undefined
    hoverDescription: string | undefined
    projectName: string | undefined
    projectDescription: string | undefined
    projectHostingLink: string | undefined

}
const ProjectItem: React.FC<ProjectPropsType> = ({ projectHostingLink,projectThumbNail, hoverDescription, projectDescription, projectName }) => {
    return (
        <li className={styles.projects__item}>
                <a className={styles.projects__img_wrapper} target='_blank' rel='noreferrer' href={projectHostingLink ? projectHostingLink : '#'}>
                    <img
                        src={projectThumbNail?.fields.file.url}
                        className={styles.projects__img}
                        alt="Project one"
                    />
                    <div className={styles.projects__hover}>
                        <div className={styles.projects__hover_name}>{projectName}</div>
                        <p className={styles.projects__hover_paragraph}>
                            {hoverDescription}
                        </p>
                    </div>
                </a>
            <div className={styles.projects__item_info}>
                <div className={styles.projects__item_title}>{projectName}</div>
                <p className={styles.projects__item_paragraph} >
                    {projectDescription}
                </p>
            </div>
        </li>
    )
}
export default Projects
