/* empty css                *//* empty css               *//* empty css                 *//* empty css                    *//* empty css             *//* empty css                */import{l as M,s as _}from"./set-int-size-DZc624IO.js";/* empty css                *//* empty css              */const G=({size:r})=>{const a=document.createElement("div");return a.className="o-sdb c-mda",a.style.backgroundColor="var(--c-fill-neutral)",r&&a.classList.add("u-ins-sdb",`u-space-${r}`),a.innerHTML=`
		<div class="c-mda__img">
          <picture class="o-frm j-cnt-auto">
            <source
              type="image/avif"
              srcset="
                ./img/thumb-320.avif   320w,
                ./img/thumb-640.avif   640w,
                ./img/thumb-960.avif   960w,
                ./img/thumb-1920.avif 1920w,
                ./img/thumb.avif      1921w
              "
              sizes="
										(max-width: 320px) 320px,
										(max-width: 640px) 640px,
										(max-width: 960px) 960px,
										(max-width: 1920px) 1920px,
										100vw"
            />
            <source
              type="image/webp"
              srcset="
                ./img/thumb-320.webp   320w,
                ./img/thumb-640.webp   640w,
                ./img/thumb-960.webp   960w,
                ./img/thumb-1920.webp 1920w,
                ./img/thumb.webp      1921w
              "
              sizes="
										(max-width: 320px) 320px,
										(max-width: 640px) 640px,
										(max-width: 960px) 960px,
										(max-width: 1920px) 1920px,
										100vw"
            />
            <img
              src="./img/thumb.png"
              srcset="
                ./img/thumb-320.png   320w,
                ./img/thumb-640.png   640w,
                ./img/thumb-960.png   960w,
                ./img/thumb-1920.png 1920w,
                ./img/thumb.png      1921w
              "
              sizes="
										(max-width: 320px) 320px,
										(max-width: 640px) 640px,
										(max-width: 960px) 960px,
										(max-width: 1920px) 1920px,
										100vw"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </div>
        <div class="c-mda__txt">
          <h2 class="c-h4-ext u-fnt-wb u-mb-m">
            セロもかっこうのかっか外国弾を砂糖から出一疋
          </h2>
          <p class="c-prg-l u-mb-m u-txt-trim u-txt-trim--3">
            弾きすぎ君はゴーシュに恨めしんて今日の扉のうち弾から叫び第六音楽汁のかっかを見ていだござい。血は途中云いてだしまし。意地悪も一けり野ねずみのようを座ってくださいた。ゴーシュもヴァイオリンみみずくたりそれがありています。力は楽譜にまだとして腹がかっこうのようで降りて病院をはいりてぼろぼろセロにきってしまえまし。
          </p>
          <span class="c-lbl-l u-py-xs u-px-s" style="background-color: var(--c-fill);color:var(--c-txt-on-fill);">カテゴリー名</span>
        </div>
				`,M(),_(),a},o={Default:{},NoGap:{size:"none"},Small:{size:"s"},Middle:{size:"m"},ExtraSmall:{size:"xs"}},T={title:"Components/Media",tags:["autodocs"],render:r=>{const a=o[r.variant]||{};return G({...a})},args:{label:"Media",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(o),description:"Media gutter variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n画像とテキストを水平方向に配置した横長のコンポーネント<br />\n**Show code** または `src/styles/components/_row.scss`をご確認ください。\n- `.c-mda`:**Media**コンポーネント\n- `.c-mda__img`:画像部分の子要素\n- `.c-mda__txt`:テキスト部分の子要素\n- `--row-narrow`:画像側の横幅を調整するカスタムプロパティ\n            "}}}},t={args:{variant:"Default"}},s={args:{variant:"NoGap"},parameters:{docs:{description:{story:"Gap `none`"}}}},e={args:{variant:"Small"},parameters:{docs:{description:{story:"Gap `s`"}}}},i={args:{variant:"Middle"},parameters:{docs:{description:{story:"Gap `m`"}}}},n={args:{variant:"ExtraSmall"},parameters:{docs:{description:{story:"Gap `xs`"}}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,x,w;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(x=e.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var b,h,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'Middle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Gap \`m\`'
      }
    }
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,y,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const X=["Default","None","Small","Middle","XS"];export{t as Default,i as Middle,s as None,e as Small,n as XS,X as __namedExportsOrder,T as default};
