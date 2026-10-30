# Remendo da tela do mri_Qappearance (favoritos)

A estrela de favoritos não existe no mri_Qappearance original: é um remendo no
`html/assets/index.js` (código compilado). Toda atualização da MRI substitui esse
arquivo e o favoritos some (aconteceu em 24/10/2026, versão 1.11.3 → 1.12.0).

Para reaplicar (Node 18+), a partir desta pasta:

    node apply.js <mri_Qappearance>/html/assets/index.js patch_favoritos.txt index.novo.js

- Cada bloco `<<<FIND ... === ... >>>` precisa aparecer **uma vez só**; se falhar, os
  nomes minificados mudaram e o bloco tem que ser refeito olhando o código novo.
- Confira com `node --check` (copiando para `.mjs`), faça backup do index.js atual e
  troque. Precisa de `ensure mri_Qappearance` para os jogadores baixarem a tela nova.
- Os favoritos ficam salvos no KVP deste recurso (por citizenid e modelo), por aba
  (`masks`, `jackets`...) e número da peça. Não se perdem com a atualização.

## Lojas de farda (24/10/2026)

`patch_lojas_fardas.txt` põe os 4 tipos de loja de farda na lista do painel (aba Lojas).
Aplique os dois arquivos de patch; o `apply.js` pula bloco que já está aplicado.
O resto das lojas de farda é Lua (ver STORES.md do mri_Qappearance, "Lojas de farda").

## Grade que respeita a blacklist (25/10/2026)

A grade de fotos da MRI montava todas as peças e ignorava `blacklist.drawables`.
`patch_grade_blacklist.txt` filtra a grade (componentes e props). Sem ele, slots vazios,
fardas escondidas e a blacklist do config não somem da loja.
