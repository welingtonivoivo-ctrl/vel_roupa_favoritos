// Remendo da tela do mri_Qappearance (html/assets/index.js, v1.11.3) para os favoritos.
// Aplicar DEPOIS do remendo de velocidade (grade.cjs). Uso: node favoritos.cjs <entrada.js> <saida.js>
// Cada troca precisa casar exatamente 1 vez; se o MRI mudar o arquivo, o script para e avisa.
const fs = require('fs')
const [entrada, saida] = process.argv.slice(2)
let t = fs.readFileSync(entrada, 'utf8')
const once = (a, b) => {
  const n = t.split(a).length - 1
  if (n !== 1) throw new Error('esperava 1x, achei ' + n + ': ' + a.slice(0, 70))
  t = t.replace(a, b)
}

// 1) estado global dos favoritos + hook que redesenha quem usa quando muda
once('ix.displayName="Items";', 'ix.displayName="Items";' +
  'const __VfCtx=p.exports.createContext("");' +
  'const __vf=window.__vf||(window.__vf={fav:{},view:{},ls:new Set,' +
    'emit(){this.ls.forEach(f=>f())},' +
    'has(s,i){return!!(s&&this.fav[s]&&this.fav[s][String(i)])},' +
    'count(s){return s&&this.fav[s]?Object.keys(this.fav[s]).length:0},' +
    'setView(s,v){this.view[s]=!!v;this.emit()},' +
    'post(n,d){return fetch("https://vel_roupa_favoritos/"+n,{method:"post",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(d||{})}).then(r=>r.json()).catch(()=>null)},' +
    'load(){this.post("fav_get").then(r=>{this.fav=r&&typeof r=="object"&&!Array.isArray(r)?r:{};this.emit()})},' +
    'toggle(s,i){i=String(i);const on=!this.has(s,i);this.fav[s]=this.fav[s]||{};on?this.fav[s][i]=!0:delete this.fav[s][i];this.emit();' +
      'this.post("fav_toggle",{sec:s,id:i,on}).then(ok=>{ok!==!0&&this.load()})}});' +
  'function __useVf(){const[,x]=p.exports.useState(0);p.exports.useEffect(()=>{const f=()=>x(n=>n+1);__vf.ls.add(f);return()=>__vf.ls.delete(f)},[]);return __vf}')

// 2) lista de sub-abas: carrega os favoritos ao abrir, estrela ao lado de cada aba, aba sabe qual secao e
once('[i,l]=p.exports.useState(0);return p.exports.useLayoutEffect(()=>{if(s.length>0){const u=s[i],f=new CustomEvent("mri_appearance_subtab_change"',
  '[i,l]=p.exports.useState(0);__useVf();p.exports.useEffect(()=>{__vf.view={},__vf.load()},[]);return p.exports.useLayoutEffect(()=>{if(s.length>0){const u=s[i],f=new CustomEvent("mri_appearance_subtab_change"')
once('return c(W0,{label:m||"\\xA0",isActive:d,onClick:()=>l(f),skeleton:!m},f)',
  'const _sid=u.props.id||"",_fv=!!__vf.view[_sid],_nf=__vf.count(_sid);' +
  'return k("div",{className:"flex items-stretch gap-1",children:[' +
    'c("div",{className:"flex-1 min-w-0",children:c(W0,{label:m||"\\xA0",isActive:d&&!_fv,onClick:()=>{__vf.setView(_sid,!1),l(f)},skeleton:!m})}),' +
    '_sid&&c("button",{type:"button","data-sound":"tab",title:"Favoritos ("+_nf+")",onClick:()=>{__vf.setView(_sid,!0),l(f)},' +
      'className:`w-7 shrink-0 rounded-sm border flex items-center justify-center text-[15px] leading-none transition-colors ${d&&_fv?"bg-primary text-yellow-300 border-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]":_nf?"bg-background text-yellow-400 border-border hover:bg-secondary/80":"bg-background text-foreground/25 border-border hover:text-yellow-300"}`,' +
      'children:"\\u2605"})]},f)')
once('children:s.map((u,f)=>c(ix,{className:`section-items flex-1 overflow-hidden ${f===i?"":"hidden"}`,children:u},f))',
  'children:s.map((u,f)=>c(ix,{className:`section-items flex-1 overflow-hidden ${f===i?"":"hidden"}`,children:c(__VfCtx.Provider,{value:u.props.id||"",children:u})},f))')

// 3) grade: no modo favoritos mostra so as favoritadas; cada slot recebe a secao e se e favorito
once('const _vSel=p.exports.useRef(a);',
  'const _sec=p.exports.useContext(__VfCtx),_vf=__useVf(),_fvOn=!!(_sec&&_vf.view[_sec]);if(_fvOn)t=t.filter(d=>_vf.has(_sec,d.id));const _vSel=p.exports.useRef(a);')
once('children:t.map(d=>c(f9,{item:d,isActive:d.id===n,onSelect:_vOn,zoom:l},d.id))',
  'children:_fvOn&&t.length===0?c("div",{className:"col-span-3 text-center text-foreground/40 text-xs py-8 px-4 normal-case",children:"Nenhum favorito aqui ainda. Toque na \\u2606 no canto de uma pe\\xE7a para favoritar."}):' +
  't.map(d=>c(f9,{item:d,isActive:d.id===n,onSelect:_vOn,zoom:l,vfSec:_sec,isFav:_vf.has(_sec,d.id)},d.id))')

// 4) slot: estrela no canto superior direito
once('f9=p.exports.memo(({item:e,isActive:t,onSelect:r,zoom:n})=>{', 'f9=p.exports.memo(({item:e,isActive:t,onSelect:r,zoom:n,vfSec:_vs,isFav:_if})=>{')
once('t&&c("div",{className:"absolute top-2 left-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.8)] z-[2]"}),',
  't&&c("div",{className:"absolute top-2 left-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.8)] z-[2]"}),' +
  '_vs&&c("button",{type:"button",title:_if?"Remover dos favoritos":"Favoritar",onClick:_e=>{_e.stopPropagation(),__vf.toggle(_vs,e.id)},' +
    'className:`absolute top-1 right-1.5 z-[3] text-[17px] leading-none transition-transform hover:scale-125 ${_if?"text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]":"text-foreground/25 hover:text-yellow-300"}`,' +
    'children:_if?"\\u2605":"\\u2606"}),')
// a foto do slot ficava por cima da estrela e pegava o clique: a camada da foto nao recebe mouse (o clique de vestir e do quadrado de fora)
once('className:"w-full h-full flex items-center justify-center overflow-hidden rounded-xl relative",style:e.studioBackground',
  'className:"w-full h-full flex items-center justify-center overflow-hidden rounded-xl relative pointer-events-none",style:e.studioBackground')
once('className:`absolute top-1 right-1.5 z-[3] text-[17px]', 'className:`absolute top-1 right-1.5 z-[20] pointer-events-auto text-[17px]')
once('(x,y)=>x.isActive===y.isActive&&x.zoom===y.zoom&&', '(x,y)=>x.isActive===y.isActive&&x.zoom===y.zoom&&x.isFav===y.isFav&&x.vfSec===y.vfSec&&')

fs.writeFileSync(saida, t)
console.log('ok', saida, t.length)
