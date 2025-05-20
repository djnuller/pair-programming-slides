# Build stage
FROM node:20 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Serve stage
FROM node:20

WORKDIR /app
COPY --from=builder /app /app
RUN npm install -g vite
EXPOSE 4173
CMD ["vite", "preview", "--host", "--port", "4173"]