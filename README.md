# vel_roupa_favoritos

Favoritos na loja de roupas do `mri_Qappearance` (Street Roleplay).

- ☆ no canto de cada peça: favorita/desfavorita.
- ★ ao lado de cada aba (Máscaras, Jaquetas...): mostra só as peças favoritadas daquela aba.
- Salvo por personagem (citizenid) e por modelo (masculino/feminino), no KVP do servidor. Máx. 300 por aba.

## Partes

- `client/` e `server/`: o resource (NUI callbacks `fav_get` / `fav_toggle`, chamados pela tela da loja).
- `remendo/`: remendos da tela compilada do `mri_Qappearance` v1.11.3 (`html/assets/index.js`).
  O instalador MRI apaga esses remendos ao atualizar a loja. Para reaplicar, a partir do index.js original:
  ```
  node remendo/grade.cjs index.js g.js        # velocidade da grade (memo nos slots)
  node remendo/favoritos.cjs g.js index.js.novo
  ```
  Cada troca precisa casar 1 vez; se o MRI mudar o arquivo, o script para e avisa.
