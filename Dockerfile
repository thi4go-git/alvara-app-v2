# Use a imagem base do Node.js
FROM node:18.13.0

# Define o diretório de trabalho
WORKDIR /app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código fonte para o diretório de trabalho
COPY . .

# Execute o comando para compilar o projeto Angular
RUN npm run build

# Exponha a porta padrão do servidor web
EXPOSE 80

# Defina o comando para iniciar o servidor web
CMD ["npm", "start"]