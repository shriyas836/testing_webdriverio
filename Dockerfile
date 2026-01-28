
FROM node:20

#Install Chrome dependencies
RUN apt-get update && apt-get install -y
wget
gnupg
ca-certificates
fonts-liberation
libasound2
libatk-bridge2.0-0
libatk1.0-0
libcups2
libdrm2
libxkbcommon0
libxcomposite1
libxdamage1
libxrandr2
libgbm1
libgtk-3-0
libnspr4
libnss3
xdg-utils
--no-install-recommends

#Install Chrome browser
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /usr/share/keyrings/google-linux.gpg &&
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google-linux.gpg] http://dl.google.com/linux/chrome/deb/ stable main"
> /etc/apt/sources.list.d/google.list &&
apt-get update &&
apt-get install -y google-chrome-stable

WORKDIR /app

COPY package*.json ./ RUN npm install

COPY . .

CMD ["npx", "wdio", "run", "wdio.conf.js"]
