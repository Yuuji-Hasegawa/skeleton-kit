/* empty css                *//* empty css               *//* empty css                */const x=({topClass:a,middleClass:s,bottomClass:p,label:i})=>{const t=document.createElement("div");t.className="o-cvr",t.style.minHeight="240px",t.style.backgroundColor="var(--c-bg-layer)";const o=document.createElement("span");o.innerText=`${i} TopItem`,o.style.backgroundColor="var(--c-bg-primary)",o.style.color="var(--c-txt-on-bg-primary)",o.classList.add("u-pd-s",...a?a.split(" "):[]),t.append(o);const r=document.createElement("span");r.innerText=`${i} MiddleItem`,r.style.backgroundColor="var(--c-bg-secondary)",r.style.color="var(--c-txt-on-bg-secondary)",r.classList.add("u-pd-s",...s?s.split(" "):[]),t.append(r);const e=document.createElement("span");return e.innerText=`${i} BottomItem`,e.style.backgroundColor="var(--c-bg-tertiary)",e.style.color="var(--c-txt-on-bg-tertiary)",e.classList.add("u-pd-s",...p?p.split(" "):[]),t.append(e),t},d={Default:{label:"Cover",middleClass:"u-my-auto"},TopAuto:{label:"Cover Top Auto",topClass:"u-mb-auto"},BottomAuto:{label:"Cover Bottom Auto",bottomClass:"u-mt-auto"}},k={title:"Objects/Cover",tags:["autodocs"],render:a=>{const s=d[a.variant]||{};return x({...s})},args:{label:"Cover",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(d)},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n`.o-cvr` は、垂直方向の`margin:auto`を有効にするためのオブジェクトです。<br />\n`margin-top: auto;`や`margin-bottom:auto`が有効になる範囲を示すための**Cover**（被膜）です。\n\n詳しくは、`/src/styles/objects/_cover.scss` をご確認ください。\n      "}}}},n={args:{variant:"Default"},parameters:{docs:{description:{story:"middle `margin-top/margin-bottom` `auto`."}}}},c={args:{variant:"TopAuto"},parameters:{docs:{description:{story:"Top Item `margin-bottom` `auto`."}}}},m={args:{variant:"BottomAuto"},parameters:{docs:{description:{story:"Bottom Item `margin-top` `auto`."}}}};var u,l,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  },
  parameters: {
    docs: {
      description: {
        story: 'middle \`margin-top/margin-bottom\` \`auto\`.'
      }
    }
  }
}`,...(v=(l=n.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var g,b,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'TopAuto'
  },
  parameters: {
    docs: {
      description: {
        story: 'Top Item \`margin-bottom\` \`auto\`.'
      }
    }
  }
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var C,T,A;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'BottomAuto'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bottom Item \`margin-top\` \`auto\`.'
      }
    }
  }
}`,...(A=(T=m.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const E=["Cover","CoverTopAuto","CoverBottomAuto"];export{n as Cover,m as CoverBottomAuto,c as CoverTopAuto,E as __namedExportsOrder,k as default};
