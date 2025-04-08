FROM node:18-alpine as base


RUN apk add --no-cache libtool automake autoconf nasm build-base

FROM base AS deps

WORKDIR /app
COPY package*.json ./


RUN npm install 

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json ./

RUN npm install --platform=linux --arch=x64 --target=20x sharp@0.32.6 --force
RUN npm install 


RUN npm ci

COPY . .

RUN npm run build 


FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/.env.production .env
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/postcss.config.mjs ./postcss.config.js


RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

RUN chown -R nextjs:nodejs /app/.next
USER nextjs

EXPOSE 3000

CMD ["npm","run", "start"]
