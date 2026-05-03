# SEO Archive

Esta pasta guarda artefatos SEO **não-deployados** preservados para referência histórica ou extração futura de conteúdo.

Nada aqui é servido publicamente. A pasta `seo/` inteira fica fora do build do Vite — só `public/` e `src/` chegam ao site final.

---

## `city-pages-drafts-2026/`

**Origem:** drafts produzidos por uma operação SEO anterior (anterior à VANT assumir o SEO em Abr 2026).

**Por que foram arquivados (2026-04-30):**

- URL pattern dos canonicals (`/roofing-{city}`) **não existe** no `App.tsx` — as rotas reais são `/service-area/{city}`. Se publicados como estavam, retornariam 404.
- Schema JSON-LD com placeholder `"YOUR_GBP_URL"` e endereço genérico Seattle (não o HQ Sammamish).
- Nunca estiveram no `sitemap.xml` nem foram linkados em lugar nenhum.
- Tom em **1ª pessoa da Brenda** ("I'm Brenda... I walk the roof") — diverge do padrão atual `"Stark Roofing Team"` adotado nas React pages.

**Conteúdo extraível (vale revisitar antes de criar conteúdo novo):**

| Arquivo | Ângulo único não coberto pela React page atual |
|---|---|
| `kirkland-roofing.html` | **Cedar shake conversion** — Kirkland tem alta concentração de telhados antigos de cedro. Conversão para GAF architectural é venda comum local. Não está na `Kirkland.tsx`. |
| `issaquah-roofing.html` | (revisar) |
| `renton-roofing.html` | (revisar) |
| `woodinville-roofing.html` | (revisar) |

**Próximos passos sugeridos:**

1. Antes de produzir post novo sobre Kirkland, ler o draft de cedar shake e considerar incorporar o ângulo numa seção da `Kirkland.tsx` ou em post de blog dedicado (`cedar-shake-to-shingle-conversion-kirkland-wa`).
2. Avaliar voz da Brenda em 1ª pessoa para uso pontual em quote blocks/depoimentos nas React pages quando for autorizado por ela.
3. Quando todos os ângulos forem extraídos, deletar de vez (ou manter como referência permanente — custo zero).

---

*Última atualização: 2026-04-30 · VANT AI Growth*
