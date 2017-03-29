node('master') {
  checkout scm

  stage 'Install Dependencies'

  sh 'npm install'
  sh 'bower install'

  stage 'Build'

  sh 'node_modules/.bin/gulp build'

  stage 'Test'

  sh 'npm run lint'
  sh 'node_modules/.bin/gulp karma:unit'

  milestone 1
}

