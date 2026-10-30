# Remendo da tela do mri_Qappearance (favoritos)

A estrela de favoritos não existe no mri_Qappearance original: é um remendo no
`html/assets/index.js` (código compilado). Toda atualização da MRI substitui esse
arquivo e o favoritos some (24/10/2026: 1.11.3 → 1.12.0; 30/10/2026: → 1.14.0).

Patches atuais (feitos para a 1.14.0):

- `patch_favoritos.txt`: estrela em cada peça, ★ ao lado de cada aba, filtro só favoritos.
- `patch_grade_blacklist.txt`: a grade de fotos esconde `blacklist.drawables` (componentes e props).

Para reaplicar (Node 18+), a partir desta pasta:

    node apply.js <mri_Qappearance>/html/assets/index.js patch_favoritos.txt a.js
    node apply.js a.js patch_grade_blacklist.txt index.novo.js

- Cada bloco `<<<FIND ... === ... >>>` precisa aparecer **uma vez só**; se falhar, os
  nomes minificados mudaram e o bloco tem que ser refeito olhando o código novo.
- Os dois patches podem ser aplicados em qualquer ordem; rodar de novo não duplica.
- Confira com `node --check` (copiando para `.mjs`), faça backup do index.js atual e
  troque. Precisa de `ensure mri_Qappearance` e logo depois `ensure vel_uniformbag`.
- Os favoritos ficam salvos no KVP deste recurso (por citizenid e modelo), por aba
  (`masks`, `jackets`...) e número da peça. Não se perdem com a atualização.
- A velocidade da grade (memo nos slots) já vem pronta da MRI desde a 1.12.

Versões antigas dos patches: pasta `antigos_v1.12/` (inclui `patch_lojas_fardas.txt`,
que não casa mais com a 1.14.0: a lista de lojas mudou de formato).
