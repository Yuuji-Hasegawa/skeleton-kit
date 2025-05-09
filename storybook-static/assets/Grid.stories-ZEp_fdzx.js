/* empty css                *//* empty css              *//* empty css                */const z=({size:a,label:c,className:m,count:j=12})=>{const s=document.createElement("ul");s.classList.add("o-grd",...m?m.split(" "):[]),a&&s.classList.add("u-ins-grd",`u-space-${a}`);for(let p=1;p<=j;p++){const r=document.createElement("li");r.innerText=`${c} ${p}`,r.style.borderStyle="solid",r.style.borderWidth="1px",r.style.borderColor="var(--c-brd)",r.className="u-pd-m",s.append(r)}return s},l={Default:{label:"Grid",className:"o-grd--t"},Quart:{label:"Grid Quart",className:"o-grd--q"},Small:{label:"Grid GapS",size:"s",className:"o-grd--t"},Medium:{label:"Grid GapM",size:"m",className:"o-grd--t"},ExtraSmall:{label:"Grid GapXS",size:"xs",className:"o-grd--t"},NoGap:{label:"Grid NoGap",size:"none",className:"o-grd--t"}},k={title:"Objects/Grid",tags:["autodocs"],render:a=>{const c=l[a.variant]||{};return z({...c})},args:{label:"Stack",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(l),description:"Grid gutter variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n`.o-grd` は、子要素を同じ幅で規則的に並べるオブジェクトです。\n\n以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：\n\n- `.u-ins-grd`:`--grd-gtt`に`var(--custom-space)`を割り当てる\n- `.u-space-*`:`--custom-space`に`var(--s-*)`を割り当てる\n- `--grd-gtt`:`grid`内の間隔（デフォルトは24px）\n- `.o-grd--*`:グリッドのカラム数。`t`（tri：3列）や `q`（quart：4列）を実装済み\n\n詳しくは、`/src/styles/objects/_grid.scss` をご確認ください。\n      "}}}},e={args:{variant:"Default"},parameters:{docs:{description:{story:"Grid with gap `l` and modifier `o-grd--t` (3 columns)"}}}},t={args:{variant:"Quart"},parameters:{docs:{description:{story:"Grid with gap `l` and modifier `o-grd--q` (4 columns)"}}}},o={args:{variant:"Small"},parameters:{docs:{description:{story:"Gap `s`"}}}},n={args:{variant:"Medium"},parameters:{docs:{description:{story:"Gap `m`"}}}},i={args:{variant:"ExtraSmall"},parameters:{docs:{description:{story:"Gap `xs`"}}}},d={args:{variant:"NoGap"},parameters:{docs:{description:{story:"Gap `none`"}}}};var u,G,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with gap \`l\` and modifier \`o-grd--t\` (3 columns)'
      }
    }
  }
}`,...(g=(G=e.parameters)==null?void 0:G.docs)==null?void 0:g.source}}};var v,y,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'Quart'
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with gap \`l\` and modifier \`o-grd--q\` (4 columns)'
      }
    }
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var b,N,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'Small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Gap \`s\`'
      }
    }
  }
}`,...(f=(N=o.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var x,E,M;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'Medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Gap \`m\`'
      }
    }
  }
}`,...(M=(E=n.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var Q,h,q;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'ExtraSmall'
  },
  parameters: {
    docs: {
      description: {
        story: 'Gap \`xs\`'
      }
    }
  }
}`,...(q=(h=i.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};var w,D,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'NoGap'
  },
  parameters: {
    docs: {
      description: {
        story: 'Gap \`none\`'
      }
    }
  }
}`,...(_=(D=d.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const L=["Grid","GridQuart","GridGapS","GridGapM","GridGapXS","GridNoGap"];export{e as Grid,n as GridGapM,o as GridGapS,i as GridGapXS,d as GridNoGap,t as GridQuart,L as __namedExportsOrder,k as default};
