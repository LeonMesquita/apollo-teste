# Stage 1: Build the React application
FROM node:20 as builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos necessários para instalar as dependências
COPY package.json ./

# COPY apply-patch.sh ./

# Instala as dependências
RUN yarn install

# Copia o restante dos arquivos do projeto
COPY . .

# Compila o projeto React para produção
RUN yarn build

# Stage 2: Configure um servidor da web leve para servir o aplicativo React
FROM nginx:1.21.1-alpine

# Copia o build da aplicação React para o diretório padrão do servidor Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Expõe a porta 80 para acesso externo
EXPOSE 80

# O comando CMD inicia o servidor Nginx quando o contêiner for iniciado
CMD ["nginx", "-g", "daemon off;"]
