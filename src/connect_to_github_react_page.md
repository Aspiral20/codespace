# Connect to GitHub react-app

1) Create new react app
2) Start new repository (not create)
3) Instal into project GitHub pages:
   yarn add gh-pages —save-dev / npm install gh-pages —save-dev

   “devDependencies”: {
   “gh-pages”: “^4.0.0”
   }

4) Add into package.json:
  - “homepage”: “http//(username).github.io/(repository-name)”
  - check if gh-pages was successfull installed
  - scripts {
    “predeploy”: “npm run build”
    “deploy”: “gh-pages -d build”
    }

5) Git add / commit, deploy project with command:
  - npm run deploy / yarn run deploy

6) git push origin -u (main-branch)

[*Deploy]: Enter x2 passphrase