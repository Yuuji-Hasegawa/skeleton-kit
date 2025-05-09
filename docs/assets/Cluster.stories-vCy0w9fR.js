/* empty css                *//* empty css                 *//* empty css                */const _=({size:e,label:l,count:E=5})=>{const s=document.createElement("ul");s.className="o-cls",e&&s.classList.add("u-ins-cls",`u-space-${e}`);for(let p=1;p<=E;p++){const r=document.createElement("li");r.innerText=`${l} `.repeat(p).trim(),r.style.borderStyle="solid",r.style.borderWidth="1px",r.style.borderColor="var(--c-brd)",r.className="u-pd-m",s.append(r)}return s},i={Default:{label:"Cluster"},NoGap:{label:"Cluster NoGap",size:"none"},Small:{label:"Cluster GapS",size:"s"},Large:{label:"Cluster GapL",size:"l"},ExtraSmall:{label:"Cluster GapXS",size:"xs"}},X={title:"Objects/Cluster",tags:["autodocs"],render:e=>{const l=i[e.variant]||{};return _({...l})},args:{label:"Cluster",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(i),description:"Cluster gutter variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n`.o-cls` は、子要素を同じ間隔で水平方向へ並べるためのオブジェクトです。\n\n以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：\n\n- `.u-ins-cls`:`--cls-gtt`に`var(--custom-space)`を割り当てる\n- `.u-space-*`:`--custom-space`に`var(--s-*)`を割り当てる\n- `--cls-gtt`:`cluster`内の間隔（デフォルトは16px）\n\n詳しくは、`/src/styles/objects/_cluster.scss` をご確認ください。\n      "}}}},a={args:{variant:"Default"},parameters:{docs:{description:{story:"Default Style. Gap `m`"}}}},t={args:{variant:"NoGap"},parameters:{docs:{description:{story:"Gap `none`"}}}},n={args:{variant:"Small"},parameters:{docs:{description:{story:"Gap `s`"}}}},o={args:{variant:"Large"},parameters:{docs:{description:{story:"Gap `l`"}}}},c={args:{variant:"ExtraSmall"},parameters:{docs:{description:{story:"Gap `xs`"}}}};var u,d,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default Style. Gap \`m\`'
      }
    }
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var G,g,C;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,S,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var b,x,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'Large'
  },
  parameters: {
    docs: {
      description: {
        story: 'Gap \`l\`'
      }
    }
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var N,L,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const T=["Cluster","ClusterNoGap","ClusterGapS","ClusterGapL","ClusterGapXS"];export{a as Cluster,o as ClusterGapL,n as ClusterGapS,c as ClusterGapXS,t as ClusterNoGap,T as __namedExportsOrder,X as default};
