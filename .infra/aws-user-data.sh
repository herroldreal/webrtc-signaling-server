#! /bin/bash
sudo apt-get update
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. ~/.nvm/nvm.sh

nvm install --lts
node -e "console.log('Running Node.js ' + process.version)"
