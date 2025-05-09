/* empty css                *//* empty css             *//* empty css              *//* empty css                    *//* empty css                */const d=({modifier:t,label:s})=>{const r=document.createElement("input");return r.classList.add("o-bx","c-prg-l","u-pd-s","c-frm-txt",...t?t.split(" "):[]),r.type="text",r.setAttribute("placeholder",`例) ${s}`),r},n={Default:{label:"Input Primary"},FullWidth:{label:"Input FullWidth",modifier:"u-w-max"}},v={title:"Components/Input",tags:["autodocs"],render:t=>{const s=n[t.variant]||{};return d({...s})},args:{label:"Input Primary",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(n),description:"Input variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n**Input**コンポーネント<br />\n**Show code** または `src/styles/components/_form.scss`をご確認ください。\n- `.c-frm-txt`:**Input/Textarea**コンポーネント\n"}}}},e={args:{variant:"Default"}},a={args:{variant:"FullWidth"}};var o,p,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,u,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'FullWidth'
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const h=["Default","InputFullWidth"];export{e as Default,a as InputFullWidth,h as __namedExportsOrder,v as default};
