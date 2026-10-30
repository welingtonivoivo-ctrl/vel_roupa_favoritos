// Aplica blocos <<<FIND ... === ... >>> num arquivo. Bloco já aplicado é pulado;
// FIND que não aparece exatamente uma vez para tudo (código mudou, refazer o bloco).
const fs=require('fs');const [,,src,patch,out]=process.argv;
let s=fs.readFileSync(src,'utf8');const p=fs.readFileSync(patch,'utf8').replace(/\r\n/g,'\n');
const blocks=[...p.matchAll(/<<<FIND\n([\s\S]*?)\n===\n([\s\S]*?)\n>>>/g)];let done=0,skip=0;
for(const [,f,r] of blocks){if(s.includes(r)){skip++;continue}const n=s.split(f).length-1;if(n!==1){console.error('FALHOU ('+n+'x): '+f.slice(0,80));process.exit(1)}s=s.replace(f,()=>r);done++}
fs.writeFileSync(out,s);console.log(done+' aplicados, '+skip+' já estavam, '+s.length+' bytes');
