

A tela "Tenha cautela" do Firefox indica bloqueio por **Cross-Origin-Opener-Policy (COOP)**. Isso acontece porque a CSP atual define `navigate-to`, uma diretiva experimental que o Firefox interpreta de forma estrita e que, combinada com `target="_blank"` dentro de iframe, dispara o aviso de COOP. Além disso, `form-action` está limitando aberturas de formulários e `frame-src` não permite `wa.me` (caso o WhatsApp tente abrir dentro do frame em alguns dispositivos).

**Causa**
- A meta CSP em `index.html` inclui `navigate-to` (não padronizada, bloqueada/avisada pelo Firefox) e `form-action` restritivo.
- Os links `<a target="_blank">` dentro de iframe disparam aviso de COOP em alguns navegadores quando há políticas conflitantes.
- Falta `rel="noopener noreferrer"` consistente + comportamento robusto para abrir fora do iframe.

**Correção proposta**

1. `index.html` — simplificar CSP, removendo `navigate-to` e `form-action` restritivos (que causam o bloqueio do Firefox), mantendo apenas o necessário e seguro:
   ```
   default-src 'self' https: data: blob: 'unsafe-inline' 'unsafe-eval';
   img-src 'self' https: data: blob:;
   frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;
   connect-src 'self' https: wss:;
   ```
   Sem `navigate-to`/`form-action` — links externos passam a abrir normalmente.

2. Criar helper `src/lib/openExternal.ts` com função `openExternal(url)` que:
   - Usa `window.open(url, "_blank", "noopener,noreferrer")`.
   - Em caso de bloqueio (retorno null), faz fallback `window.top.location.href = url` para escapar do iframe.

3. Atualizar os 2 botões de WhatsApp (`HeroSection.tsx`, `CTAFinalSection.tsx`) para:
   - Manter `<a href>` para SEO/acessibilidade.
   - Adicionar `onClick` chamando `openExternal()` com `e.preventDefault()`.
   - Garantir `rel="noopener noreferrer nofollow"` e `target="_blank"`.

**Resultado**
- Acaba o aviso "Tenha cautela" do Firefox (sem COOP/navigate-to).
- WhatsApp abre em nova aba tanto no preview quanto dentro do iframe do WordPress.
- Segurança preservada: `rel="noopener noreferrer"`, CSP ainda restringe scripts, frames e conexões.

