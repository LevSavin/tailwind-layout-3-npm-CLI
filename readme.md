Быстрая настройка npm + CLI

echo node_modules/ >> .gitignore
npm init -y 
npm i -d tailwindcss@latest postcss@latest autoprefixer@latest cssnano@latest
npm install -D postcss-cli && node_modules/.bin/postcss --version

touch postcss.config.js
в нём:
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

mkdir src
touch src/styles.css
npx tailwindcss init

вставить в tailwind.config.js:
  purge: [
    './dist/**/*.html',
    './dist/**/*.js',
    './dist/**/*.jsx',
    './dist/**/*.vue',
  ],

дописать в package.json:
  "scripts": {    
    "dev": "node_modules/.bin/postcss src/styles.css -o dist/compiled.css --watch",
    "build": "node_modules/.bin/postcss src/styles.css -o dist/compiled.css"      
  },

npm run dev 
и
npx tailwindcss -i ./src/styles.css -o ./dist/compiled.css --watch
touch dist/index.html


Продакшн в GitBash
NODE_ENV=production npx tailwindcss -i ./src/styles.css -o ./dist/compiled.css --minify

Продакшн в PowerShell
$env:NODE_ENV="production"
npx tailwindcss -i ./src/styles.css -o ./dist/compiled.css --minify