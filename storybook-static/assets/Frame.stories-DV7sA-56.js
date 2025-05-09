/* empty css                *//* empty css               *//* empty css                *//* empty css                */const hr=({size:e,label:z,round:L})=>{const r=document.createElement("div");r.className="o-frm",r.style.maxWidth="500px",r.borderStyle="solid",r.borderWidth="1px",r.borderColor="var(--c-brd)",e&&r.classList.add(`u-asp-${e}`),L&&r.classList.add(`u-frm-r-${L}`);const a=document.createElement("span");return a.style.backgroundColor="var(--c-bg-primary)",a.style.color="var(--c-txt-on-primary)",a.innerText=z,a.className="u-pd-m",r.append(a),r},f={Default:{label:"Frame"},Square:{label:"Square Frame",size:"sq"},Small:{label:"Small Frame",size:"s"},Middle:{label:"Middle Frame",size:"m"},PortraitSmall:{label:"Portrait Small Frame",size:"ys"},PortraitMiddle:{label:"Portrait Middle Frame",size:"ym"},PortraitLarge:{label:"Portrait Large Frame",size:"yl"},Paper:{label:"Paper Frame",size:"ppr"},PortraitPaper:{label:"Portrait Paper Frame",size:"yppr"},LandscapeBronze:{label:"Landscape Bronze Frame",size:"brz"},PortraitBronze:{label:"Portrait Bronze Frame",size:"ybrz"},LandscapeBanner:{label:"Landscape Banner Frame",size:"xbnr"},PortraitBanner:{label:"Portrait Banner Frame",size:"ybnr"},FullBanner:{label:"FullBanner Frame",size:"fbnr"},HalfBanner:{label:"Half Banner Frame",size:"hbnr"},RectBanner:{label:"RectBanner Frame",size:"rbnr"},WideSkyscraperBanner:{label:"WideSkyscraper Banner Frame",size:"wsbnr"},RoundCornerSFrame:{label:"Round Corner S Frame",round:"s"},RoundCornerMFrame:{label:"Round Corner M Frame",round:"m"},RoundCornerLFrame:{label:"Round Corner L Frame",round:"l"},RoundFrame:{label:"Round Frame",size:"sq",round:"r"}},Tr={title:"Objects/Frame",tags:["autodocs"],render:e=>{const z=f[e.variant]||{};return hr({...z})},args:{label:"Frame",variant:"Default"},argTypes:{variant:{control:{type:"select"},options:Object.keys(f),description:"Frame AspectRatio variant"},label:{table:{disable:!0}}},parameters:{docs:{description:{component:"\n`.o-frm` は、指定したアスペクト比に合わせて子要素をクロップ（切り抜き）するオブジェクトです。\n\n以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：\n\n- `--frm-asp`:`frame`のアスペクト比（デフォルトは16:9）\n- `--frm-r`:`frame`内のborder-radius\n- `.u-asp-*`:`--frm-asp`に指定のaspect-ratioを割り当てる\n- `.u-frm-*`:`--frm-r`に指定のborder-radiusを割り当てる\n\n詳しくは、`/src/styles/objects/_frame.scss` をご確認ください。\n      "}}}},s={args:{variant:"Default"},parameters:{docs:{description:{story:"Aspect ratio `16:9`"}}}},n={args:{variant:"Square"},parameters:{docs:{description:{story:"Aspect ratio `1:1`"}}}},t={args:{variant:"Small"},parameters:{docs:{description:{story:"Aspect ratio `3:2`"}}}},o={args:{variant:"Middle"},parameters:{docs:{description:{story:"Aspect ratio `4:3`"}}}},c={args:{variant:"PortraitSmall"},parameters:{docs:{description:{story:"Aspect ratio `2:3`"}}}},i={args:{variant:"PortraitMiddle"},parameters:{docs:{description:{story:"Aspect ratio `3:4`"}}}},p={args:{variant:"PortraitLarge"},parameters:{docs:{description:{story:"Aspect ratio `9:16`"}}}},d={args:{variant:"Paper"},parameters:{docs:{description:{story:"Aspect ratio `√2:1`"}}}},m={args:{variant:"PortraitPaper"},parameters:{docs:{description:{story:"Aspect ratio `1:√2`"}}}},l={args:{variant:"LandscapeBronze"},parameters:{docs:{description:{story:"Aspect ratio `(3+√13)/2:1`"}}}},u={args:{variant:"PortraitBronze"},parameters:{docs:{description:{story:"Aspect ratio `1:(3+√13)/2`"}}}},F={args:{variant:"LandscapeBanner"},parameters:{docs:{description:{story:"Aspect ratio `8:1`"}}}},g={args:{variant:"PortraitBanner"},parameters:{docs:{description:{story:"Aspect ratio `1:2`"}}}},y={args:{variant:"FullBanner"},parameters:{docs:{description:{story:"Aspect ratio `39:5`"}}}},v={args:{variant:"HalfBanner"},parameters:{docs:{description:{story:"Aspect ratio `39:10`"}}}},S={args:{variant:"RectBanner"},parameters:{docs:{description:{story:"Aspect ratio `6:5`"}}}},P={args:{variant:"WideSkyscraperBanner"},parameters:{docs:{description:{story:"Aspect ratio `4:15`"}}}},B={args:{variant:"RoundCornerSFrame"},parameters:{docs:{description:{story:"All corners rounded to 8px * 1 / 1.618 (≈4.94px)"}}}},A={args:{variant:"RoundCornerMFrame"},parameters:{docs:{description:{story:"All corners rounded to 8px."}}}},b={args:{variant:"RoundCornerLFrame"},parameters:{docs:{description:{story:"All corners rounded to 16px."}}}},R={args:{variant:"RoundFrame"},parameters:{docs:{description:{story:"All corners rounded to 50%."}}}};var C,M,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'Default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`16:9\`'
      }
    }
  }
}`,...(x=(M=s.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var k,q,W;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'Square'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`1:1\`'
      }
    }
  }
}`,...(W=(q=n.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var H,D,_;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'Small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`3:2\`'
      }
    }
  }
}`,...(_=(D=t.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var h,j,E;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'Middle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`4:3\`'
      }
    }
  }
}`,...(E=(j=o.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var O,N,T;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'PortraitSmall'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`2:3\`'
      }
    }
  }
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var $,w,G;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'PortraitMiddle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`3:4\`'
      }
    }
  }
}`,...(G=(w=i.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var I,J,K;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'PortraitLarge'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`9:16\`'
      }
    }
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,V;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'Paper'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`√2:1\`'
      }
    }
  }
}`,...(V=(U=d.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: 'PortraitPaper'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`1:√2\`'
      }
    }
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var rr,ar,er;l.parameters={...l.parameters,docs:{...(rr=l.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    variant: 'LandscapeBronze'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`(3+√13)/2:1\`'
      }
    }
  }
}`,...(er=(ar=l.parameters)==null?void 0:ar.docs)==null?void 0:er.source}}};var sr,nr,tr;u.parameters={...u.parameters,docs:{...(sr=u.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    variant: 'PortraitBronze'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`1:(3+√13)/2\`'
      }
    }
  }
}`,...(tr=(nr=u.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var or,cr,ir;F.parameters={...F.parameters,docs:{...(or=F.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    variant: 'LandscapeBanner'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`8:1\`'
      }
    }
  }
}`,...(ir=(cr=F.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var pr,dr,mr;g.parameters={...g.parameters,docs:{...(pr=g.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  args: {
    variant: 'PortraitBanner'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`1:2\`'
      }
    }
  }
}`,...(mr=(dr=g.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var lr,ur,Fr;y.parameters={...y.parameters,docs:{...(lr=y.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    variant: 'FullBanner'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`39:5\`'
      }
    }
  }
}`,...(Fr=(ur=y.parameters)==null?void 0:ur.docs)==null?void 0:Fr.source}}};var gr,yr,vr;v.parameters={...v.parameters,docs:{...(gr=v.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    variant: 'HalfBanner'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`39:10\`'
      }
    }
  }
}`,...(vr=(yr=v.parameters)==null?void 0:yr.docs)==null?void 0:vr.source}}};var Sr,Pr,Br;S.parameters={...S.parameters,docs:{...(Sr=S.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
  args: {
    variant: 'RectBanner'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`6:5\`'
      }
    }
  }
}`,...(Br=(Pr=S.parameters)==null?void 0:Pr.docs)==null?void 0:Br.source}}};var Ar,br,Rr;P.parameters={...P.parameters,docs:{...(Ar=P.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
  args: {
    variant: 'WideSkyscraperBanner'
  },
  parameters: {
    docs: {
      description: {
        story: 'Aspect ratio \`4:15\`'
      }
    }
  }
}`,...(Rr=(br=P.parameters)==null?void 0:br.docs)==null?void 0:Rr.source}}};var zr,Lr,fr;B.parameters={...B.parameters,docs:{...(zr=B.parameters)==null?void 0:zr.docs,source:{originalSource:`{
  args: {
    variant: 'RoundCornerSFrame'
  },
  parameters: {
    docs: {
      description: {
        story: 'All corners rounded to 8px * 1 / 1.618 (≈4.94px)'
      }
    }
  }
}`,...(fr=(Lr=B.parameters)==null?void 0:Lr.docs)==null?void 0:fr.source}}};var Cr,Mr,xr;A.parameters={...A.parameters,docs:{...(Cr=A.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  args: {
    variant: 'RoundCornerMFrame'
  },
  parameters: {
    docs: {
      description: {
        story: 'All corners rounded to 8px.'
      }
    }
  }
}`,...(xr=(Mr=A.parameters)==null?void 0:Mr.docs)==null?void 0:xr.source}}};var kr,qr,Wr;b.parameters={...b.parameters,docs:{...(kr=b.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  args: {
    variant: 'RoundCornerLFrame'
  },
  parameters: {
    docs: {
      description: {
        story: 'All corners rounded to 16px.'
      }
    }
  }
}`,...(Wr=(qr=b.parameters)==null?void 0:qr.docs)==null?void 0:Wr.source}}};var Hr,Dr,_r;R.parameters={...R.parameters,docs:{...(Hr=R.parameters)==null?void 0:Hr.docs,source:{originalSource:`{
  args: {
    variant: 'RoundFrame'
  },
  parameters: {
    docs: {
      description: {
        story: 'All corners rounded to 50%.'
      }
    }
  }
}`,...(_r=(Dr=R.parameters)==null?void 0:Dr.docs)==null?void 0:_r.source}}};const $r=["Frame","SquareFrame","SmallFrame","MiddleFrame","PortraitSmallFrame","PortraitMiddleFrame","PortraitLargeFrame","PaperFrame","PortraitPaperFrame","LandscapeBronzeFrame","PortraitBronzeFrame","LandscapeBannerFrame","PortraitBannerFrame","FullBannerFrame","HalfBannerFrame","RectBannerFrame","WideSkyscraperBannerFrame","RoundCornerSFrame","RoundCornerMFrame","RoundCornerLFrame","RoundFrame"];export{s as Frame,y as FullBannerFrame,v as HalfBannerFrame,F as LandscapeBannerFrame,l as LandscapeBronzeFrame,o as MiddleFrame,d as PaperFrame,g as PortraitBannerFrame,u as PortraitBronzeFrame,p as PortraitLargeFrame,i as PortraitMiddleFrame,m as PortraitPaperFrame,c as PortraitSmallFrame,S as RectBannerFrame,b as RoundCornerLFrame,A as RoundCornerMFrame,B as RoundCornerSFrame,R as RoundFrame,t as SmallFrame,n as SquareFrame,P as WideSkyscraperBannerFrame,$r as __namedExportsOrder,Tr as default};
