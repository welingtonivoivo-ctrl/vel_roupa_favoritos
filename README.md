# vel_roupa_favoritos

Favoritos na loja de roupas do `mri_Qappearance` (Street Roleplay).

- ☆ no canto de cada peça: favorita/desfavorita.
- ★ ao lado de cada aba (Máscaras, Jaquetas...): mostra só as peças favoritadas daquela aba.
- Salvo por personagem (citizenid) e por modelo (masculino/feminino), no KVP do servidor. Máx. 300 por aba.

## Partes

- `client/` e `server/`: o resource (NUI callbacks `fav_get` / `fav_toggle`, chamados pela tela da loja).
- `patch/`: remendos da tela compilada do `mri_Qappearance` (`html/assets/index.js`), feitos para a **v1.14.0**.
  O instalador MRI apaga esses remendos ao atualizar a loja. Para reaplicar, a partir do index.js original:
  ```
  node patch/apply.js index.js patch/patch_favoritos.txt a.js
  node patch/apply.js a.js patch/patch_grade_blacklist.txt index.novo.js
  ```
  Cada bloco precisa casar 1 vez; se a MRI mudar o arquivo, o script para e avisa.
  Os dois patches podem ir em qualquer ordem e rodar de novo não duplica. Detalhes em `patch/LEIA.md`.
- `patch/antigos_v1.12/` e `patch/antigos_v1.11.3/`: remendos das versões anteriores, só como referência.

## Licença

GPL-3.0 — pode usar, modificar e redistribuir, desde que o código continue aberto com a mesma licença.

Os arquivos em `patch/` trazem trechos curtos do código compilado do `mri_Qappearance` (baseado no illenium-appearance, licença MIT), usados só para localizar onde aplicar o remendo.
