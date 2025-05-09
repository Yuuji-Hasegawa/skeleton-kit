/* empty css                *//* empty css               *//* empty css                */const j=({gutter:r,label:c,count:M=5})=>{const p=document.createElement("div");for(let i=1;i<=M;i++){const a=document.createElement("span");a.innerText=c,a.style.borderStyle="solid",a.style.borderColor="var(--c-brd)",a.style.borderWidth="1px",a.className="u-pd-s",p.append(a)}const _=r?`o-stc u-ins-stc u-space-${r}`:"o-stc";return p.className=_,p},l={Default:{label:"Stack"},Small:{label:"Stack S",gutter:"s"},Medium:{label:"Stack M",gutter:"m"},Large:{label:"Stack L",gutter:"l"},ExtraSmall:{label:"Stack XS",gutter:"xs"}},h={title:"Objects/Stack",tags:["autodocs"],render:r=>{const c=l[r.variant]||{};return j({...c})},args:{label:"Stack",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(l),description:"Stack gutter variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n`.o-stc` は、子要素を同じ間隔で積み上げるためのオブジェクトです。\n\n以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：\n\n- `.u-ins-stc`:`--stc-mt`に`var(--custom-space)`を割り当てる\n- `.u-space-*`:`--custom-space`に`var(--s-*)`を割り当てる\n- `--stc-mt`:子要素の間隔(margin-top)\n\n詳しくは、`/src/styles/objects/_stack.scss` をご確認ください。\n      "}}}},e={args:{variant:"Default"},parameters:{docs:{description:{story:"Default Style"}}}},s={args:{variant:"Small"},parameters:{docs:{description:{story:"Gap `s`"}}}},t={args:{variant:"Medium"},parameters:{docs:{description:{story:"Gap `m`"}}}},n={args:{variant:"Large"},parameters:{docs:{description:{story:"Gap `l`"}}}},o={args:{variant:"ExtraSmall"},parameters:{docs:{description:{story:"Gap `xs`"}}}};var m,d,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default Style'
      }
    }
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var S,g,v;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,b,k;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var x,f,E;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(f=n.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var G,D,L;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const C=["Stack","Small","Medium","Large","ExtraSmall"];export{o as ExtraSmall,n as Large,t as Medium,s as Small,e as Stack,C as __namedExportsOrder,h as default};
