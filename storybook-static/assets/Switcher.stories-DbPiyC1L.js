/* empty css                *//* empty css                */const L=({size:e,label:i,count:E=3})=>{const a=document.createElement("div");a.className="o-swt",e&&a.classList.add("u-ins-swt",`u-space-${e}`);for(let p=1;p<=E;p++){const r=document.createElement("span");r.innerText=i,r.style.borderStyle="solid",r.style.borderWidth="1px",r.style.borderColor="var(--c-brd)",r.className="u-pd-m",a.append(r)}return a},l={Default:{label:"Gap L"},NoGap:{label:"Switcher NoGap",size:"none"},Small:{label:"Switcher GapS",size:"s"},Medium:{label:"Switcher GapL",size:"m"},ExtraSmall:{label:"Switcher GapXS",size:"xs"}},z={title:"Objects/Switcher",tags:["autodocs"],render:e=>{const i=l[e.variant]||{};return L({...i})},args:{label:"Switcher",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(l),description:"Switcher gutter variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n`.o-swt` は、同じ幅を持つ子要素を、水平方向から垂直配置へ切り替えるレスポンシブなオブジェクトです。\n\n以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：\n\n- `.u-ins-swt`:`--swt-gtt`に`var(--custom-space)`を割り当てる\n- `.u-space-*`:`--custom-space`に`var(--s-*)`を割り当てる\n- `--swt-gtt`:`switcher`内の間隔（デフォルトは24px）\n\n詳しくは、`/src/styles/objects/_switcher.scss` をご確認ください。\n      "}}}},s={args:{variant:"Default"},parameters:{docs:{description:{story:"Default Style. Gap `m`"}}}},t={args:{variant:"NoGap"},parameters:{docs:{description:{story:"Gap `none`"}}}},n={args:{variant:"Small"},parameters:{docs:{description:{story:"Gap `s`"}}}},o={args:{variant:"Large"},parameters:{docs:{description:{story:"Gap `l`"}}}},c={args:{variant:"ExtraSmall"},parameters:{docs:{description:{story:"Gap `xs`"}}}};var d,m,S;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(m=s.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var u,w,G;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(G=(w=t.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,b,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,N,D;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(D=(N=c.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const M=["Switcher","SwitcherNoGap","SwitcherGapS","SwitcherGapM","SwitcherGapXl"];export{s as Switcher,o as SwitcherGapM,n as SwitcherGapS,c as SwitcherGapXl,t as SwitcherNoGap,M as __namedExportsOrder,z as default};
