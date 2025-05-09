/* empty css                *//* empty css             *//* empty css                */const _=({textColor:e,borderWidth:t,borderColor:c,outlineColor:i,bgColor:d,label:P})=>{const r=document.createElement("div");return r.innerText=P,r.className="o-bx u-pd-m",e&&r.style.setProperty("--bx-txt-clr",e),t&&r.style.setProperty("--bx-brd-w",t),c&&r.style.setProperty("--bx-brd-clr",c),i&&r.style.setProperty("--bx-otl-clr",i),d&&r.style.setProperty("--bx-bg-clr",d),r.style.minWidth="100px",r},p={Default:{label:"Box"},Ghost:{label:"GhostBox",borderColor:"var(--c-brd-ghost)",textColor:"var(--c-placeholder)"},Filled:{label:"FilledBox",borderColor:"transparent",bgColor:"var(--c-fill)",textColor:"var(--c-txt-on-fill)"},Bold:{label:"BoldBox",borderWidth:"2px"},Outline:{label:"HasOutLineBox",borderColor:"transparent",outlineColor:"var(--c-fill)"}},L={title:"Objects/Box",tags:["autodocs"],render:e=>{const t=p[e.variant]||{};return _({...t})},args:{label:"Box",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(p),description:"Box style variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n`.o-bx` は、背景とボーダーを持つ汎用ボックスです。\n\n以下のカスタムプロパティを使って、柔軟にスタイルを調整できます：\n\n- `--bx-txt-clr`:テキストカラー\n- `--bx-bg-clr`:背景色\n- `--bx-brd-w`:ボーダーの太さ\n- `--bx-brd-clr`:ボーダーの色\n- `--bx-otl-clr`:アウトラインの色\n\n詳しくは、`/src/styles/objects/_box.scss` をご確認ください。\n      "}}}},s={args:{variant:"Default"},parameters:{docs:{description:{story:"Default Style"}}}},o={args:{variant:"Ghost"},parameters:{docs:{description:{story:"Dimmed Style"}}}},a={args:{variant:"Filled"},parameters:{docs:{description:{story:"Filled Style"}}}},n={args:{variant:"Bold"},parameters:{docs:{description:{story:"Bold Style"}}}},l={args:{variant:"Outline"},parameters:{docs:{description:{story:"Visible colored outline"}}}};var m,x,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var u,y,B;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'Ghost'
  },
  parameters: {
    docs: {
      description: {
        story: 'Dimmed Style'
      }
    }
  }
}`,...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var v,g,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'Filled'
  },
  parameters: {
    docs: {
      description: {
        story: 'Filled Style'
      }
    }
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,h,O;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'Bold'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bold Style'
      }
    }
  }
}`,...(O=(h=n.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var D,F,G;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'Outline'
  },
  parameters: {
    docs: {
      description: {
        story: 'Visible colored outline'
      }
    }
  }
}`,...(G=(F=l.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const w=["Box","GhostBox","FilledBox","BoldBox","HasOutLineBox"];export{n as BoldBox,s as Box,a as FilledBox,o as GhostBox,l as HasOutLineBox,w as __namedExportsOrder,L as default};
