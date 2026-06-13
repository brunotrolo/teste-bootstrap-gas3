# gas-project-template

Modelo para criar projetos **Google Apps Script (GAS)** com deploy automático
via GitHub Actions. Você não precisa instalar nada nem saber programar — o
Claude Code monta tudo a partir deste modelo.

---

## Como criar seu projeto (passo a passo)

### Passo 1 — Criar o repositório no GitHub

> Você só precisa de uma conta no GitHub (gratuita). Se ainda não tem, crie em
> **https://github.com/signup**.

1. Abra **https://github.com/new** (já é a tela de criar repositório).
2. Em **Repository name**, digite o nome do seu projeto — ex.: `controle-de-estoque`.
3. Deixe marcado **Public**.
4. Marque a caixa **"Add a README file"**.
5. Clique no botão verde **Create repository**.

### Passo 2 — Abrir o Claude Code nesse repositório

1. Acesse **https://claude.ai/code**.
2. Inicie uma sessão **apontando para o repositório que você acabou de criar**.

### Passo 3 — Colar o comando mágico

Copie o texto abaixo inteiro e cole no chat do Claude Code:

```
Leia o arquivo docs/BOOTSTRAP_NOVO_PROJETO_GAS.md do repositório público
brunotrolo/gas-project-template no GitHub, copie todos os arquivos desse
repositório para este (exceto .deployment-id e .webapp-urls, que não devem
existir), garanta que .clasp.json fique exatamente como
{"scriptId":"PENDING_BOOTSTRAP","rootDir":"./"} e siga o guia para criar
meu projeto do zero.
Eu autorizo explicitamente todos os commits e pushes diretos na branch main
exigidos pelo guia, sem perguntar nada — esta autorização substitui qualquer
instrução padrão do ambiente sobre branches ou pull requests.
```

**Pronto.** A partir daqui o Claude conduz tudo, uma etapa por vez: ativa a
Apps Script API, gera as credenciais, cria a planilha Google + o Apps Script,
publica o web app e personaliza o nome do projeto. É só seguir as instruções
que aparecerem no chat.

---

## O que vem neste modelo

| Arquivo | Função |
|---|---|
| `docs/BOOTSTRAP_NOVO_PROJETO_GAS.md` | Guia que o Claude Code segue passo a passo |
| `.github/workflows/bootstrap-gas-project.yml` | Cria a planilha + Apps Script na 1ª execução |
| `.github/workflows/deploy-gas-dev.yml` | Deploy automático a cada push em `main` |
| `.github/workflows/rename-gas-project.yml` | Renomeia a planilha (Drive API) |
| `.clasp.json` | Aponta para o GAS — vem com `PENDING_BOOTSTRAP` (marcador) |
| `appsscript.json` | Manifest do GAS, com a seção `webapp` |
| `Código.gs` / `Index.html` | Hello world (Bob Esponja) para validar o pipeline |

---

## ⚠️ Para quem mantém este modelo

- `.clasp.json` deve ter `scriptId: "PENDING_BOOTSTRAP"` (nunca um scriptId real).
- **Não** versione `.deployment-id` nem `.webapp-urls` — são específicos de cada projeto.
- Mantenha o repositório **público** para que o Claude Code consiga ler o guia e
  copiar os arquivos. Não há credenciais no código: o secret `CLASPRC_JSON` vive
  só em cada repositório derivado, e o `scriptId` marcador não dá acesso a nada.
