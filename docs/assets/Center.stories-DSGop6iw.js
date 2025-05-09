/* empty css                *//* empty css                *//* empty css                */const D=({size:a,label:c})=>{const r=document.createElement("div");return r.innerText=c,r.className="o-ctr u-mw-cnt",r.style.backgroundColor="var(--c-bg-secondary)",r.style.color="var(--c-txt-desc)",a&&r.classList.add("u-ins-ctr",`u-space-${a}`),r},p={Default:{label:"Center"},Small:{label:"Center S",size:"s"},Large:{label:"Center L",size:"l"},ExtraSmall:{label:"Center XS",size:"xs"},Clamp:{label:"Center Clamp",size:"clamp"}},w={title:"Objects/Center",tags:["autodocs"],render:a=>{const c=p[a.variant]||{};return D({...c})},args:{label:"Center",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(p),description:"Center padding variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n`.o-ctr` は、ブロック要素を中央揃えするためのオブジェクトです。<br />\n`box-sizing: content-box;`を指定しているため、`max-width`や`width`で指定した幅の外側に余白を追加し、中央揃えを実現します。\n\n以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：\n\n- `.u-ins-ctr`:`--ctr-pd`に`var(--custom-space)`を割り当てる\n- `.u-space-*`:`--custom-space`に`var(--s-*)`を割り当てる\n- `--ctr-pd`:左右に持たせる`padding`（外側余白。デフォルトは16px）\n\n詳しくは、`/src/styles/objects/_center.scss` をご確認ください。\n      "}}}},e={args:{variant:"Default"},parameters:{docs:{description:{story:"Default Style. padding `m`"}}}},s={args:{variant:"Small"},parameters:{docs:{description:{story:"padding `s`"}}}},t={args:{variant:"Large"},parameters:{docs:{description:{story:"padding `l`"}}}},n={args:{variant:"ExtraSmall"},parameters:{docs:{description:{story:"padding `xs`"}}}},o={args:{variant:"Clamp"},parameters:{docs:{description:{story:"padding `clamp`. for Content Wrapper"}}}};var i,d,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default Style. padding \`m\`'
      }
    }
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'Small'
  },
  parameters: {
    docs: {
      description: {
        story: 'padding \`s\`'
      }
    }
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var C,v,y;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'Large'
  },
  parameters: {
    docs: {
      description: {
        story: 'padding \`l\`'
      }
    }
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var S,b,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'ExtraSmall'
  },
  parameters: {
    docs: {
      description: {
        story: 'padding \`xs\`'
      }
    }
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,E,L;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'Clamp'
  },
  parameters: {
    docs: {
      description: {
        story: 'padding \`clamp\`. for Content Wrapper'
      }
    }
  }
}`,...(L=(E=o.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const O=["Center","Small","Large","ExtraSmall","Clamp"];export{e as Center,o as Clamp,n as ExtraSmall,t as Large,s as Small,O as __namedExportsOrder,w as default};
