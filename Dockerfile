# 1️⃣ Base image
FROM node:18

# 1️⃣ Install Chrome + required libs
RUN apt-get update && apt-get install -y \
    chromium \
    chromium-driver \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    --no-install-recommends \
 && rm -rf /var/lib/apt/lists/*

# 2️⃣ Chrome path
ENV CHROME_BIN=/usr/bin/chromium

# 3️⃣ App directory
WORKDIR /app

# 4️⃣ Copy package files
COPY package*.json ./

# 5️⃣ Install node dependencies
RUN npm install

# 6️⃣ Copy project files
COPY . .

# 7️⃣ Run WDIO
CMD ["npx", "wdio", "run", "wdio.conf.js"]

