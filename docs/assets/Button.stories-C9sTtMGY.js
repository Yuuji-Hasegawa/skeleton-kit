/* empty css                *//* empty css             *//* empty css             *//* empty css                    *//* empty css                *//* empty css                */const it=({className:r="",label:y="",disabled:st=!1})=>{const t=document.createElement("button");return t.type="button",t.innerText=y,t.className="o-bx c-btn u-brd-r-s c-prg-l u-py-s u-px-m",r&&r.trim().split(/\s+/).forEach(ct=>t.classList.add(ct)),st&&(t.disabled=!0,t.setAttribute("aria-disabled","true")),t},b={Default:{label:"Default Button"},FilledButton:{label:"Filled Button",className:"c-btn--fll"},FilledSecButton:{label:"Filled Secondary Button",className:"c-btn--fll-sec"},FilledTerButton:{label:"Filled Tertiary Button",className:"c-btn--fll-ter"},FilledInvButton:{label:"Filled Invert Button",className:"c-btn--fll-inv"},TonalButton:{label:"Tonal Button",className:"c-btn--tnl"},TonalSecButton:{label:"Tonal Secondary Button",className:"c-btn--tnl-sec"},TonalTerButton:{label:"Tonal Tertiary Button",className:"c-btn--tnl-ter"},TonalGrayButton:{label:"Tonal Gray Button",className:"c-btn--tnl-gry"},ElevateButton:{label:"Elevate Button",className:"c-btn--elv"},LineButton:{label:"Line Button",className:"c-btn--lne"},TextButton:{label:"Text Button",className:"c-btn--txt"},SquareButton:{label:"Square Button",className:"c-btn--sq"},DisabledButton:{label:"Disabled Button",disabled:!0}},Tt={title:"Components/Button",tags:["autodocs"],render:r=>{const y=b[r.variant]||{};return it({...y})},args:{label:"Default Button",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(b),description:"Button variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n**Button**コンポーネント<br />\n**Show code** または `src/styles/components/_btn.scss`をご確認ください。\n- `.o-bx`:**Box**オブジェクト\n- `.c-btn-*`:**Button**コンポーネント\n"}}}},e={args:{variant:"Default"}},a={args:{variant:"FilledButton"},parameters:{docs:{description:{story:"Tier `1` / `Primary`"}}}},n={args:{variant:"FilledSecButton"},parameters:{docs:{description:{story:"Tier `1` / `Secondary`"}}}},o={args:{variant:"FilledTerButton"},parameters:{docs:{description:{story:"Tier `1` / `Tertiary`"}}}},s={args:{variant:"FilledInvButton"},parameters:{docs:{description:{story:"Tier `1` / `Invert`"}}}},c={args:{variant:"TonalButton"},parameters:{docs:{description:{story:"Tier `2` / `Primary`"}}}},i={args:{variant:"TonalSecButton"},parameters:{docs:{description:{story:"Tier `2` / `Secondary`"}}}},l={args:{variant:"TonalTerButton"},parameters:{docs:{description:{story:"Tier `2` / `Tertiary`"}}}},u={args:{variant:"TonalGrayButton"},parameters:{docs:{description:{story:"Tier `2` / `Monotone`"}}}},d={args:{variant:"ElevateButton"},parameters:{docs:{description:{story:"Tier `3`"}}}},p={args:{variant:"LineButton"},parameters:{docs:{description:{story:"Tier `4`"}}}},m={args:{variant:"TextButton"},parameters:{docs:{description:{story:"Tier `5`"}}}},B={args:{variant:"SquareButton"}},T={args:{variant:"DisabledButton"}};var v,g,S;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  }
}`,...(S=(g=e.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var F,f,x;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'FilledButton'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tier \`1\` / \`Primary\`'
      }
    }
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var D,N,E;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'FilledSecButton'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tier \`1\` / \`Secondary\`'
      }
    }
  }
}`,...(E=(N=n.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var I,q,L;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'FilledTerButton'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tier \`1\` / \`Tertiary\`'
      }
    }
  }
}`,...(L=(q=o.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var G,P,_;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'FilledInvButton'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tier \`1\` / \`Invert\`'
      }
    }
  }
}`,...(_=(P=s.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var h,M,O;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'TonalButton'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tier \`2\` / \`Primary\`'
      }
    }
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var j,k,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'TonalSecButton'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tier \`2\` / \`Secondary\`'
      }
    }
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var A,C,z;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'TonalTerButton'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tier \`2\` / \`Tertiary\`'
      }
    }
  }
}`,...(z=(C=l.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'TonalGrayButton'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tier \`2\` / \`Monotone\`'
      }
    }
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,U;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'ElevateButton'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tier \`3\`'
      }
    }
  }
}`,...(U=(R=d.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,W,X;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'LineButton'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tier \`4\`'
      }
    }
  }
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'TextButton'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tier \`5\`'
      }
    }
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var tt,rt,et;B.parameters={...B.parameters,docs:{...(tt=B.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    variant: 'SquareButton'
  }
}`,...(et=(rt=B.parameters)==null?void 0:rt.docs)==null?void 0:et.source}}};var at,nt,ot;T.parameters={...T.parameters,docs:{...(at=T.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    variant: 'DisabledButton'
  }
}`,...(ot=(nt=T.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};const yt=["Default","FilledButton","FilledSecButton","FilledTerButton","FilledInvButton","TonalButton","TonalSecButton","TonalTerButton","TonalGrayButton","ElevateButton","LineButton","TextButton","SquareButton","DisabledButton"];export{e as Default,T as DisabledButton,d as ElevateButton,a as FilledButton,s as FilledInvButton,n as FilledSecButton,o as FilledTerButton,p as LineButton,B as SquareButton,m as TextButton,c as TonalButton,u as TonalGrayButton,i as TonalSecButton,l as TonalTerButton,yt as __namedExportsOrder,Tt as default};
