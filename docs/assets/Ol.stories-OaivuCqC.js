/* empty css                *//* empty css              *//* empty css                    */const g=({modifier:t,label:a,count:O=10})=>{const s=document.createElement("ol");s.classList.add("c-ol",...t?t.split(" "):[]);for(let o=1;o<=O;o++){const l=document.createElement("li");l.innerText=a,l.className="c-prg-l",s.append(l)}return s},n={Default:{label:"Ol Primary"},Alt:{label:"Ol Alt",modifier:"c-ol--alt"}},y={title:"Components/Ol",tags:["autodocs"],render:t=>{const a=n[t.variant]||{};return g({...a})},args:{label:"Ol Primary",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(n),description:"Ol variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n標準的な**Ol**コンポーネント<br />\n**Show code** または `src/styles/components/_list.scss`をご確認ください。\n- `.c-ol`:**Ol**コンポーネント\n- `.c-ol--alt`:Olのmodifier\n- `.c-entry ol`:`.c-entry`以下の`ol`はセレクタに対して自動でスタイルが割り振られる仕様です。\n      "}}}},e={args:{variant:"Default"}},r={args:{variant:"Alt"}};var c,i,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'Alt'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const A=["Default","OlAlt"];export{e as Default,r as OlAlt,A as __namedExportsOrder,y as default};
