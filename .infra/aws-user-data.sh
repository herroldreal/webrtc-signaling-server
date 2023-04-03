#! /bin/bash
# Install NodeJS 17
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 17
node -v
npm -v

# Install Docker
sudo yum install -y docker
sudo service docker start
sudo docker info



# Test environments
node -e "console.log('Running Node.js ' + process.version)"
