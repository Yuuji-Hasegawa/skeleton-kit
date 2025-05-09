/* empty css                *//* empty css                    *//* empty css              */const k=({modifier:e,label:a})=>{const t=document.createElement("a");return t.innerText=`${a}`,t.classList.add("c-prg-l","c-a",...e?e.split(" "):[]),t},s={Default:{label:"Link"},UnderLink:{label:"Underline Link",modifier:"c-a--und"}},g={title:"Components/Link",tags:["autodocs"],render:e=>{const a=s[e.variant]||{};return k({...a})},args:{label:"Link",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(s),description:"Link variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n**Link**コンポーネント<br />\n**Show code** または `src/styles/components/_link.scss`をご確認ください。\n- `.c-a`:**Link**コンポーネント\n- `.c-a--und`:`text-decoration:underline`付きの**modifier**\n- `.c-entry a`:`.c-entry`以下の`a`はセレクタに対して自動でスタイルが割り振られる仕様です。\n      "}}}},n={args:{variant:"Default"}},r={args:{variant:"UnderLink"}};var i,o,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  }
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'UnderLink'
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const v=["Link","UnderlineLink"];export{n as Link,r as UnderlineLink,v as __namedExportsOrder,g as default};
