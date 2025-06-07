# STARTER PACK

Starter pack configurado com frontend e backend engatilhados, utilizando PrismaORM.

## Tecnologias

### Frontend
- ReactJS (Vite)
- Axios
- React-router-dom
- React-icons
- React-hook-form
- React-hot-toast
- Zustand
- JWT-Decode

### Backend
- NodeJS
- Express
- Jsonwebtoken
- Cors
- cookie-parser
- bcryptjs
- @prisma/client

> nodemon & prisma (dev)

## Prisma onConsole

- `npx prisma init`: inicializar o prisma
- `npx prisma db pull`: trazer as modificações do DB para o `schema`
- `npx prisma db push`: enviar as modificações do `schema` ao DB
- `npx prisma migrate dev --name nome_migration`: cria migrations a partir do schema, e as aplica no banco de dados
- `npx prisma migrate deploy`: aplica as migrations pendentes
- `npx prisma studio`: visualizar dados