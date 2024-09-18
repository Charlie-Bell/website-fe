# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.17.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`

# Create vite 
npm create vite@latest fe -- --template react
cd fe

# Install Vite dependencies.
npm install

# Install styles
npm install @fontsource/roboto @fontsource/outfit

# Clean up
rm -r src/assets
rm public/vite.svg