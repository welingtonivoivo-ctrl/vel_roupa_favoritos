const fs = require('fs')
let t = fs.readFileSync(process.argv[2], 'utf8')
const once = (a, b) => { const n = t.split(a).length - 1; if (n !== 1) throw new Error('esperava 1x, achei ' + n + ': ' + a.slice(0, 60)); t = t.replace(a, b) }
// 1) quadradinho da grade so redesenha quando muda o que ele mostra
once('f9=({item:e,isActive:t,onSelect:r,zoom:n})=>{', 'f9=p.exports.memo(({item:e,isActive:t,onSelect:r,zoom:n})=>{')
once('children:e.id})]})},p9=', 'children:e.id})]})},(x,y)=>x.isActive===y.isActive&&x.zoom===y.zoom&&x.item.id===y.item.id&&x.item.image===y.item.image&&x.item.fallbackImage===y.item.fallbackImage&&x.item.studioBackground===y.item.studioBackground&&x.item.studioShadow===y.item.studioShadow&&x.item.studio===y.item.studio&&x.item.fallbackStudio===y.item.fallbackStudio),p9=')
// 2) a grade passa um onSelect estavel que sempre chama o atual (o memo nao segura um handler velho)
once('zoom:l=1.45})=>{const f=t.find(', 'zoom:l=1.45})=>{const _vSel=p.exports.useRef(a);_vSel.current=a;const _vOn=p.exports.useCallback(_x=>_vSel.current&&_vSel.current(_x),[]);const f=t.find(')
once('c(f9,{item:d,isActive:d.id===n,onSelect:a,zoom:l},d.id)', 'c(f9,{item:d,isActive:d.id===n,onSelect:_vOn,zoom:l},d.id)')
fs.writeFileSync(process.argv[3], t)
console.log('ok', t.length)
