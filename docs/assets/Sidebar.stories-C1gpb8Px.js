/* empty css                *//* empty css                 *//* empty css                */const M=({size:s,label:t})=>{const r=document.createElement("div");r.className="o-sdb u-pd-m",r.style.background="var(--c-bg)",s&&r.classList.add("u-ins-sdb",`u-space-${s}`);const a=document.createElement("div");a.innerText=`${t} Wide Content`,a.style.flexBasis=0,a.style.flexGrow=999,a.style.minWidth="50%",a.className="u-pd-s",a.style.backgroundColor="var(--c-fill-neutral)";const e=document.createElement("div");return e.innerText=`${t} Narrow Content`,e.style.flexBasis="20rem",e.style.flexGrow=1,e.className="u-pd-s",e.style.backgroundColor="var(--c-bg-layer)",e.style.color="var(--c-txt-desc)",r.append(a,e),r},p={Default:{label:"Sidebar"},NoGap:{label:"Sidebar NoGap",size:"none"},Small:{label:"Sidebar GapS",size:"s"},Medium:{label:"Sidebar GapM",size:"l"},ExtraSmall:{label:"Sidebar GapXS",size:"xs"}},j={title:"Objects/Sidebar",tags:["autodocs"],render:s=>{const t=p[s.variant]||{};return M({...t})},args:{label:"Sidebar",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(p),description:"Sidebar gutter variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n`.o-sdb` は、異なる幅を持つ子要素を、水平方向から垂直配置へ切り替えるレスポンシブなオブジェクトです。<br />\n子要素の`flex-grow`や`flex-basis`を工夫して、お好みのスタイルを実現してください。\n\n以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：\n\n- `.u-ins-sdb`:`--sdb-gtt`に`var(--custom-space)`を割り当てる\n- `.u-space-*`:`--custom-space`に`var(--s-*)`を割り当てる\n- `--sdb-gtt`:`sidebar`内の間隔（デフォルトは24px）\n\n詳しくは、`/src/styles/objects/_sidebar.scss` をご確認ください。\n      "}}}},n={args:{variant:"Default"},parameters:{docs:{description:{story:"Default Style. Gap `l`"}}}},o={args:{variant:"NoGap"},parameters:{docs:{description:{story:"Gap `none`"}}}},i={args:{variant:"Small"},parameters:{docs:{description:{story:"Gap `s`"}}}},c={args:{variant:"Medium"},parameters:{docs:{description:{story:"Gap `m`"}}}},d={args:{variant:"ExtraSmall"},parameters:{docs:{description:{story:"Gap `xs`"}}}};var l,m,b;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default Style. Gap \`l\`'
      }
    }
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,S,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(S=o.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var G,y,v;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,f,N;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'Medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Gap \`m\`'
      }
    }
  }
}`,...(N=(f=c.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var E,w,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const z=["Sidebar","SidebarNoGap","SidebarGapS","SidebarGapM","SidebarGapXS"];export{n as Sidebar,c as SidebarGapM,i as SidebarGapS,d as SidebarGapXS,o as SidebarNoGap,z as __namedExportsOrder,j as default};
