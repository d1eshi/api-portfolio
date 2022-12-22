export interface IProjectItem {
  title: string
  description: string
  image: {
    url: string
    alt: string
  }
  technologiesTags: string[]
  links: {
    demo: string
    repository: string
  }
}

export interface IProjectsList {
  [key: string]: {
    projects: IProjectItem[]
  }
}
