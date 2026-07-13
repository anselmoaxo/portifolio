#!/bin/sh
set -eu

rm -rf dist
mkdir -p dist/css dist/assets dist/projetos

cp index.html style.css script.js i18n.js favicon.svg robots.txt sitemap.xml dist/
cp css/tailwind.min.css dist/css/
cp -R assets/. dist/assets/
cp -R projetos/. dist/projetos/
touch dist/.nojekyll
