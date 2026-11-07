# 🚀 Guia de Deploy - PropostaPro

Este guia explica como fazer o deploy do PropostaPro em diferentes plataformas.

## 📋 Índice

- [Vercel (Recomendado)](#vercel-recomendado)
- [Netlify](#netlify)
- [Railway](#railway)
- [AWS Amplify](#aws-amplify)
- [Servidor VPS](#servidor-vps)

---

## Vercel (Recomendado)

A Vercel é a plataforma oficial do Next.js e oferece deploy gratuito com excelente performance.

### Passo a Passo

1. **Criar conta na Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub, GitLab ou Bitbucket

2. **Fazer deploy**
   ```bash
   # Instalar Vercel CLI (opcional)
   npm i -g vercel
   
   # Deploy via CLI
   vercel
   ```
   
   **OU**
   
   - Acesse o dashboard da Vercel
   - Clique em "Add New Project"
   - Importe seu repositório do GitHub
   - Clique em "Deploy"

3. **Configurações**
   - Framework: Next.js (detectado automaticamente)
   - Build Command: `npm run build` (padrão)
   - Output Directory: `.next` (padrão)

4. **Domínio**
   - Use o domínio gratuito: `seu-projeto.vercel.app`
   - Ou configure um domínio personalizado

### Vantagens
✅ Deploy automático a cada push  
✅ Preview de branches  
✅ CDN global  
✅ HTTPS automático  
✅ Gratuito para projetos pessoais  

---

## Netlify

Outra excelente opção gratuita com ótima integração.

### Passo a Passo

1. **Criar conta**
   - Acesse [netlify.com](https://netlify.com)
   - Faça login com GitHub

2. **Deploy**
   - Clique em "Add new site"
   - Selecione "Import an existing project"
   - Conecte seu repositório GitHub
   - Configure:
     ```
     Build command: npm run build
     Publish directory: .next
     ```

3. **Instalar Plugin Next.js**
   - O Netlify pedirá para instalar o plugin Next.js Runtime
   - Aceite a instalação

4. **Deploy**
   - Clique em "Deploy site"

### Configuração Adicional

Crie o arquivo `netlify.toml` na raiz:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## Railway

Platform-as-a-Service moderna e fácil de usar.

### Passo a Passo

1. **Criar conta**
   - Acesse [railway.app](https://railway.app)
   - Faça login com GitHub

2. **Criar projeto**
   - Clique em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Escolha seu repositório

3. **Configuração**
   - Railway detecta Next.js automaticamente
   - Variáveis de ambiente (se necessário):
     ```
     NODE_ENV=production
     ```

4. **Deploy**
   - O deploy inicia automaticamente
   - Acesse o domínio fornecido: `*.up.railway.app`

### Vantagens
✅ Deploy automático  
✅ Banco de dados integrado (se precisar no futuro)  
✅ Logs em tempo real  

---

## AWS Amplify

Para integração com o ecossistema AWS.

### Passo a Passo

1. **Console AWS**
   - Acesse [console.aws.amazon.com/amplify](https://console.aws.amazon.com/amplify)
   - Crie uma conta AWS (se não tiver)

2. **Criar app**
   - Clique em "New app" > "Host web app"
   - Conecte seu repositório GitHub
   - Autorize o AWS Amplify

3. **Configuração de build**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Deploy**
   - Clique em "Save and deploy"

---

## Servidor VPS

Para deploy em servidor próprio (DigitalOcean, Linode, etc).

### Pré-requisitos
- Servidor Linux (Ubuntu recomendado)
- Node.js instalado
- Nginx ou Apache
- PM2 para gerenciamento de processos

### Passo a Passo

1. **Conectar ao servidor**
   ```bash
   ssh usuario@seu-servidor.com
   ```

2. **Instalar dependências**
   ```bash
   # Atualizar sistema
   sudo apt update && sudo apt upgrade -y
   
   # Instalar Node.js
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   
   # Instalar PM2
   sudo npm install -g pm2
   ```

3. **Clonar projeto**
   ```bash
   cd /var/www
   git clone https://github.com/seu-usuario/propostapro.git
   cd propostapro
   ```

4. **Configurar ambiente**
   ```bash
   # Instalar dependências
   npm install
   
   # Build de produção
   npm run build
   ```

5. **Iniciar com PM2**
   ```bash
   pm2 start npm --name "propostapro" -- start
   pm2 save
   pm2 startup
   ```

6. **Configurar Nginx**
   ```nginx
   server {
       listen 80;
       server_name seu-dominio.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **SSL com Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d seu-dominio.com
   ```

---

## 🔒 Variáveis de Ambiente

Se você adicionar variáveis de ambiente no futuro, configure em cada plataforma:

### Vercel
```bash
vercel env add NOME_DA_VARIAVEL
```

### Netlify
- Dashboard > Site settings > Environment variables

### Railway
- Dashboard > Variables

### AWS Amplify
- Console > Environment variables

---

## 📊 Monitoramento

### Logs

**Vercel:**
```bash
vercel logs
```

**Railway:**
- Logs em tempo real no dashboard

**VPS com PM2:**
```bash
pm2 logs propostapro
```

### Analytics

Considere adicionar:
- Google Analytics
- Vercel Analytics (gratuito)
- Plausible Analytics

---

## 🚀 Otimizações

### Antes do Deploy

1. **Teste local**
   ```bash
   npm run build
   npm start
   ```

2. **Verifique erros**
   ```bash
   npm run lint
   ```

3. **Otimize imagens** (se adicionar)
   - Use formato WebP
   - Utilize Image Optimization do Next.js

### Após o Deploy

- Configure CDN
- Ative cache
- Monitore performance
- Configure backups

---

## 💡 Dicas Importantes

✅ **Sempre use HTTPS** (configurado automaticamente na maioria das plataformas)  
✅ **Configure domínio personalizado** para maior profissionalismo  
✅ **Monitore uso de recursos** para evitar custos inesperados  
✅ **Mantenha dependências atualizadas**  
✅ **Configure CI/CD** para deploys automáticos  

---

## 🆘 Problemas Comuns

### Build falha

**Erro de memória:**
```json
// package.json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max_old_space_size=4096' next build"
  }
}
```

**Erro de tipo TypeScript:**
```bash
npm run lint
# Corrija os erros antes do deploy
```

### Site não carrega

1. Verifique logs de erro
2. Confirme que a porta está correta
3. Verifique variáveis de ambiente

---

## 📞 Suporte

Para mais ajuda:
- Documentação Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)

**Bom deploy! 🚀**
