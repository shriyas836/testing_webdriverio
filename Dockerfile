
# FROM node:20-bullseye

# ENV DEBIAN_FRONTEND=noninteractive

# RUN apt-get update && apt-get install -y \
#     chromium \
#     chromium-driver \
#     fonts-liberation \
#     libasound2 \
#     libatk-bridge2.0-0 \
#     libatk1.0-0 \
#     libcups2 \
#     libdrm2 \
#     libxkbcommon0 \
#     libxcomposite1 \
#     libxdamage1 \
#     libxrandr2 \
#     libgbm1 \
#     libgtk-3-0 \
#     libnspr4 \
#     libnss3 \
#     xdg-utils \
#     --no-install-recommends \
#     && rm -rf /var/lib/apt/lists/*

# WORKDIR /app

# COPY package*.json ./

# RUN rm -rf node_modules package-lock.json && \
#     npm install --legacy-peer-deps --no-audit --no-fund

# COPY . .

# CMD ["npx", "wdio", "run", "wdio.conf.js"]
FROM node:20-bullseye

ENV DEBIAN_FRONTEND=noninteractive
ENV CHROME_BIN=/usr/bin/chromium
ENV CHROMEDRIVER_BIN=/usr/bin/chromedriver

RUN apt-get update && apt-get install -y \
    chromium \
    chromium-driver \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdrm2 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    xdg-utils \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps --no-audit --no-fund

COPY . .

CMD ["npx", "wdio", "run", "wdio.conf.js"]
