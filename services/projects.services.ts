import fs from 'fs'
import { IProjectsList } from '../interfaces/IProjects'

class ProjectsServices {
  projects: IProjectsList[]

  constructor() {
    this.projects = []
    this.getProjects()
  }

  async getProjects() {
    try {
      const listProjects = JSON.parse(fs.readFileSync('./projects.json', 'utf8'))

      this.projects.push(listProjects)
      return this.projects
    } catch (error) {
      console.log(error)
    }
  }

  async findAllProjects() {
    return this.projects[0]
  }

  async findProjectsByLang(headerLang: string = 'es') {
    let langSplit = headerLang.split('-')[0]
    let projects = this.projects[0][langSplit]

    if (projects) {
      return projects
    } else {
      throw Error(`We not foun project with the language ${langSplit}`)
    }

    // return this.projects[0][langSplit]
  }
}

export default ProjectsServices
