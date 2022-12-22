import fs from 'fs'
import express from 'express'
import ProjectsServices from './services/projects.services'
import { errorHanlder, logErrors } from './middlewares/error.handler'

const app = express()
const PORT = 3000

const service = new ProjectsServices()

app.get('/', (req, res) => {
  res.send('Hello here is my first path!')
})

app.get('/projects', async (req, res, next) => {
  const userLanguage = req.headers['accept-language']

  try {
    const projects = await service.findProjectsByLang(userLanguage)

    res.send(projects)
  } catch (error) {
    next(error)
  }
})

app.use(logErrors)
app.use(errorHanlder)

app.listen(PORT, () => console.log('Server running in port', PORT))
