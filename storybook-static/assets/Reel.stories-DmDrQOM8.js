/* empty css                *//* empty css              *//* empty css                */const _=({size:a,label:c,count:E=5})=>{const r=document.createElement("ol");r.className="o-rl",a&&r.classList.add("u-ins-rl",`u-space-${a}`);for(let p=1;p<=E;p++){const e=document.createElement("li");e.innerText=`${c} `.repeat(p).trim(),e.style.borderStyle="solid",e.style.borderWidth="1px",e.style.borderColor="var(--c-brd)",e.className="u-pd-m",r.append(e)}return r},i={Default:{label:"Reel"},NoGap:{label:"Reel NoGap",size:"none"},Small:{label:"Reel GapS",size:"s"},Large:{label:"Reel GapL",size:"l"},ExtraSmall:{label:"Reel GapXS",size:"xs"}},X={title:"Objects/Reel",tags:["autodocs"],render:a=>{const c=i[a.variant]||{};return _({...c})},args:{label:"Reel",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(i),description:"Reel gutter variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n`.o-rl` は、水平スクロールを実現するためのオブジェクトです。\n\n以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：\n\n- `.u-ins-rl`:`--rl-gtt`に`var(--custom-space)`を割り当てる\n- `.u-space-*`:`--custom-space`に`var(--s-*)`を割り当てる\n- `--rl-gtt`:`reel`内の間隔（デフォルトは16px）\n\n詳しくは、`/src/styles/objects/_reel.scss` をご確認ください。\n      "}}}},s={args:{variant:"Default"},parameters:{docs:{description:{story:"Default Style. Gap `m`"}}}},t={args:{variant:"NoGap"},parameters:{docs:{description:{story:"Gap `none`"}}}},n={args:{variant:"Small"},parameters:{docs:{description:{story:"Gap `s`"}}}},o={args:{variant:"Large"},parameters:{docs:{description:{story:"Gap `l`"}}}},l={args:{variant:"ExtraSmall"},parameters:{docs:{description:{story:"Gap `xs`"}}}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var G,g,R;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(R=(g=t.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var y,S,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var N,L,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(L=l.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const T=["Reel","ReelNoGap","ReelGapS","ReelGapL","ReelGapXS"];export{s as Reel,o as ReelGapL,n as ReelGapS,l as ReelGapXS,t as ReelNoGap,T as __namedExportsOrder,X as default};
