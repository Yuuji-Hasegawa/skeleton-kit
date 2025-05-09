/* empty css                *//* empty css                    */const _=({className:a,label:n})=>{const c=document.createElement("p");return c.innerText=`${n}'s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,a&&(c.className=a),c},m={Default:{label:"Paragraph",className:"c-prg-l"},ParagraphSmall:{label:"Paragraph Small",className:"c-prg-m"},Label:{label:"Label",className:"c-lbl-l"},LabelSmall:{label:"Label Small",className:"c-lbl-m"},Small:{label:"Small",className:"c-sml-l"},SmallSmall:{label:"Small Small",className:"c-sml-m"}},j={title:"Components/Text",tags:["autodocs"],render:a=>{const n=m[a.variant]||{};return _({...n})},args:{label:"Paragraph",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(m),description:"TextSize variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\nテキストサイズを段階的に調整した**Text**コンポーネント<br />\n**Show code** または `src/styles/components/_text-sizes.scss`をご確認ください。\n- `.c-entry p`:`.c-entry`以下の`p`はセレクタに対して自動でスタイルが割り振られる仕様です。\n      "}}}},r={args:{variant:"Default"}},e={args:{variant:"ParagraphSmall"}},s={args:{variant:"Label"}},l={args:{variant:"Label Small"}},t={args:{variant:"Small"}},o={args:{variant:"Small Small"}};var i,p,S;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  }
}`,...(S=(p=r.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var d,g,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'ParagraphSmall'
  }
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,v,L;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'Label'
  }
}`,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var h,P,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'Label Small'
  }
}`,...(x=(P=l.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var T,f,y;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'Small'
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var N,z,D;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'Small Small'
  }
}`,...(D=(z=o.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const k=["Paragraph","ParagraphSmall","Label","LabelSmall","Small","SmallSmall"];export{s as Label,l as LabelSmall,r as Paragraph,e as ParagraphSmall,t as Small,o as SmallSmall,k as __namedExportsOrder,j as default};
