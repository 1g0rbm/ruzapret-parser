#!/usr/bin/env node

import { program } from 'commander'
import app from '../index.js'

program
  .description('Load data from https://ruzapret.com')
  .version('0.0.1')
  .arguments('<filepath>')
  .action((filepath) => {
    app(filepath, (numPage) => {
      console.info(`Page number ${numPage} was parsed`)
    })
      .then(() => {
        console.log('Job is done!')
      })
      .catch((err) => {
        console.error('ERROR!!!', err)
      })
  })

program.parse()
