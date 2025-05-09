/* empty css                *//* empty css                    */const x=({className:e,label:o})=>{const c=document.createElement("div");return c.innerText=`${o}'s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,e&&(c.className=e),c},i={Default:{label:"Heading 1",className:"c-h1"},Level2:{label:"Heading 2",className:"c-h2"},Level3:{label:"Heading 3",className:"c-h3"},Level4:{label:"Heading 4",className:"c-h4"},Level5:{label:"Heading 5",className:"c-h5"}},E={title:"Components/Heading",tags:["autodocs"],render:e=>{const o=i[e.variant]||{};return x({...o})},args:{label:"Heading 1",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(i),description:"Heading variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n**Show code** または `src/styles/components/_text-sizes.scss`をご確認ください。\n- `.c-h*`:**Heading**コンポーネント\n- `.c-entry h*`:`.c-entry`以下の`h2/h3`はセレクタに対して自動でスタイルが割り振られる仕様です。\n      "}}}},a={args:{variant:"Default"}},r={args:{variant:"Level2"}},s={args:{variant:"Level3"}},n={args:{variant:"Level4"}},t={args:{variant:"Level5"}};var d,l,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'Level2'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,H,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'Level3'
  }
}`,...(L=(H=s.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var b,h,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'Level4'
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,S,N;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'Level5'
  }
}`,...(N=(S=t.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const O=["Heading","Heading2","Heading3","Heading4","Heading5"];export{a as Heading,r as Heading2,s as Heading3,n as Heading4,t as Heading5,O as __namedExportsOrder,E as default};
