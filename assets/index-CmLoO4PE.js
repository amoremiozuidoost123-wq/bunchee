function s(n){const t=n.trim();if(/^{|\[/g.test(t))try{const r=new Function(`return ${t}`)();return JSON.parse(JSON.stringify(r))}catch{return/^\[/g.test(t)?[]:{}}else return{}}export{s as o};
