# 1️⃣ Base image
FROM node:18

# 2️⃣ Working directory inside container
WORKDIR /app

# 3️⃣ Copy package files
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy project files
COPY . .

# 6️⃣ Install Chrome
RUN apt-get update && apt-get install -y \
    chromium \
    chromium-driver \
    --no-install-recommends

# 7️⃣ Chrome path
ENV CHROME_BIN=/usr/bin/chromium

# 8️⃣ Default command
CMD ["npx", "wdio", "run", "wdio.conf.js"]
