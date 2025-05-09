/* empty css                *//* empty css             *//* empty css              *//* empty css                    *//* empty css                */const d=({modifier:a,label:r})=>{const s=document.createElement("textarea");return s.classList.add("o-bx","c-prg-l","u-pd-s","c-frm-txt",...a?a.split(" "):[]),s.setAttribute("placeholder",`例) ${r}`),s},o={Default:{label:"Textarea Primary"},FullWidth:{label:"Textarea FullWidth",modifier:"u-w-max"}},g={title:"Components/Textarea",tags:["autodocs"],render:a=>{const r=o[a.variant]||{};return d({...r})},args:{label:"Textarea Primary",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(o),description:"Textarea variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n**Textarea**コンポーネント<br />\n**Show code** または `src/styles/components/_form.scss`をご確認ください。\n- `.c-frm-txt`:**Input/Textarea**コンポーネント\n"}}}},e={args:{variant:"Default"}},t={args:{variant:"FullWidth"}};var n,l,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'FullWidth'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const v=["Default","TextareaFullWidth"];export{e as Default,t as TextareaFullWidth,v as __namedExportsOrder,g as default};
