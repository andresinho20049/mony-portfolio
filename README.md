# 🌸 Portfólio Profissional — Monique Martins

> _"Conectando pessoas, oferecendo suporte e entregando excelência — seja na linha de frente do atendimento ou à mesa, com comida que aconchega."_

Este repositório contém o código-fonte do portfólio web profissional de **Monique da Silva Martins**. Desenvolvido com uma abordagem moderna, imponente e sensível, o projeto combina a sobriedade do preto com a delicadeza de tons pastéis e harmonias de rosa, apresentando de forma autêntica tanto a atuação corporativa em **Atendimento ao Cliente & Recepção** quanto a essência e paixão pela **Gastronomia**.

---

## 📸 Prévia do Projeto

| Seção                         | Descrição                                                                                     |
| :---------------------------- | :-------------------------------------------------------------------------------------------- |
| **Hero & Apresentação**       | Destaque imponente com fotografia profissional, proposta de valor e CTA direto para WhatsApp. |
| **Perfis Interativos (Tabs)** | Divisão clara entre o perfil técnico corporativo e o perfil afetivo "Paixão por Comida".      |
| **Trajetória & Competências** | Seção unificada de experiências com _badge pills_ de skills técnicas e operacionais.          |
| **Galeria & Essência**        | Blocos visuais destacando os momentos em família, o dom culinário e os sonhos de futuro.      |

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js 14+](https://nextjs.org/)** — App Router, Server Components (SSG por padrão para alta performance de SEO) e renderização híbrida.
- **[React 18+](https://react.dev/)** — Construção da interface baseada em componentes reutilizáveis.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática rigorosa para garantir consistência de dados e manutenção.
- **[Tailwind CSS v3.4](https://tailwindcss.com/)** — Estilização utilitária refinada com classes customizadas e suporte nativo a temas.
- **[OKLCH / HEX Color Systems]** — Paleta de cores moderna com harmonia de tons pastéis terrosos, rosa quartzo e preto carvão com suporte a Light & Dark Mode.
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** — Formatação elegante para textos e conteúdos longos.

---

## 🎨 Identidade Visual & Design System

A identidade foi projetada sob medida para refletir a personalidade da Monique: **profissionalismo ético aliado a um acolhimento humano ("gente da gente")**.

- **Paleta de Cores:**
  - `Primary` (`#dd8ebc` / `#e6a1c9`): Rosa Quartzo vibrante e elegante.
  - `Secondary` (`#f3e9e3` / `#282025`): Nude terroso aveludado.
  - `Background` (`#faf7f5` / `#121011`): Transição entre o creme fosco e o preto carvão profundo.
  - `Accent` (`#b86b98` / `#e083b8`): Rosé antigo para destaques e estados interativos.
- **Tipografia:**
  - _Display_: **Cormorant Garamond** (serifada, imponente e sofisticada para títulos).
  - _Sans_: **Karla** (clean, altamente legível e moderna para corpo de texto e UI).

---

## 📂 Estrutura do Repositório

```bash
mony-portfolio/
├── public/
│   └── photos/              # Ativos de imagem (Retratos, Galeria Gastronômica e Pessoal)
├── src/
│   ├── app/
│   │   ├── globals.css      # Design System, variáveis CSS, temas e utility classes
│   │   ├── layout.tsx       # Root Layout com configurações globais de Metadata/SEO
│   │   └── page.tsx         # Página principal estática (SSG)
│   ├── components/
│   │   ├── perfil-tabs.tsx  # Componente interativo (Client Side) para alternância de perfil
│   │   ├── photo/           # Componente estruturado para exibição e efeito de imagens
│   │   └── sections/        # Sub-seções modulares (Experiência e Formação)
│   └── data/                # Datasets tipados para experiências, skills e formações
├── tailwind.config.ts       # Mapeamento do Tailwind estendido com tokens do projeto
├── tsconfig.json            # Configurações do compilador TypeScript
└── package.json             # Dependências e scripts do projeto

```

## 💼 Destaques da Copywriting & Estrutura

1. **Abordagem Dupla Estratégica:**

- **Atendimento Corporativo:** Foco na ética, agilidade em ambientes de alto fluxo (rede Giraffas), gestão de caixa e acolhimento receptivo.
- **Gastronomia & Afeto:** Foco na vivência prática de cozinha comercial (Padaria Peg Pão), versatilidade entre pratos doces/salgados e a vocação do servir.

2. **Scannability para RH & Recrutadores:**

- Apresentação de competências-chave agrupadas em _badges_ ao final de cada experiência profissional.

3. **Conexão Pessoal e Ambições de Futuro:**

- Seção autêntica dedicada à família e ao objetivo profissional de ingressar na faculdade de **Podologia Infantil**.

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

- **Node.js** (v18.17.0 ou superior)
- Gerenciador de pacotes **npm**, **yarn** ou **pnpm**

### Passo a Passo

1. **Clone o repositório:**

```bash
git clone [https://github.com/seu-usuario/mony-portfolio.git](https://github.com/seu-usuario/mony-portfolio.git)
cd mony-portfolio

```

2. **Instale as dependências:**

```bash
npm install

```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev

```

4. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) para visualizar a aplicação em execução.
5. **Gerar Build de Produção:**

```bash
npm run build
npm run start

```
