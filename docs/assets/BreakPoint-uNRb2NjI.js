import{j as n,M as r}from"./index-CM3S6UCf.js";import{useMDXComponents as i}from"./index-Dg8f1RhB.js";import"./iframe-DCUXwx9l.js";import"./index-BiL3ubqk.js";import"./index-DrFu-skq.js";function t(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Tokens/BreakPoint"}),`
`,n.jsx(e.h1,{id:"breakpoint",children:"BreakPoint"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"styles/settings/_sizes.scss"}),"で以下のように定義しています。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sass",children:`$breakxs: 481px; // Mobile
$breaks: 641px;  // Tablet
$breakm: 961px;  // Desktop
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$breakxs"}),":スマートフォン (~480px)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$breaks"}),":タブレット (~640px)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$breakm"}),":PC/大型タブレット (~960px)"]}),`
`]}),`
`,n.jsx(e.h1,{id:"media-query",children:"Media Query"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"styles/tools/_mediaqueries.scss"}),"で以下のように定義しています。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sass",children:`@mixin max-screen($breakpoint) {
  // 引数に設定された画面幅以下のスタイルを指定するメディアクエリ
  @media screen and (max-width: $breakpoint) {
    @content;
  }
}

@mixin min-screen($breakpoint) {
  // 引数に設定された画面幅以下のスタイルを指定するメディアクエリ
  @media screen and (min-width: $breakpoint) {
    @content;
  }
}

// 印刷の設定
@mixin print() {
  @media print {
    @content;
  }
}

// ダークモードの設定
@mixin darkmode() {
  @media (prefers-color-scheme: dark) {
    @content;
  }
}

@mixin retina() {
  @media screen and (min-device-pixel-ratio: 2),
    screen and (resolution >= 192dpi),
    screen and (resolution >= 2dppx) {
    @content;
  }
}

@mixin portrait() {
  @media screen and (orientation: portrait) {
    @content;
  }
}
`})}),`
`,n.jsx(e.h1,{id:"閾値map",children:"閾値Map"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"styles/settings/_sizes.scss"}),"で以下のように定義しています。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sass",children:`$breakpoints: (
  underxs: calc((($breakxs - 1px) - 100vw) * 999),
  unders: calc((($breaks - 1px) - 100vw) * 999),
  underm: calc((($breakm - 1px) - 100vw) * 999),
  overxs: calc((100vw - ($breakxs - 1px)) * 999),
  overs: calc((100vw - ($breaks - 1px)) * 999),
  overm: calc((100vw - ($breakm - 1px)) * 999),
) !default;
`})}),`
`,n.jsx(e.h1,{id:"使用例",children:"使用例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sass",children:`@use '../settings' as setting;
@use '../tools' as tool;

.u-pc-none {
  @include tool.min-screen(setting.$breakm) {
    display: none;
  }
}

.u-pc-only {
  @include tool.max-screen(setting.$breakm - 1px) {
    display: none;
  }
}
`})}),`
`,n.jsx(e.h1,{id:"media-query-1",children:"Media Query"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sass",children:`@use '../settings' as setting;
@use '../tools' as tool;

@each $key, $name in setting.$semantic-light {
  --c-#{$key}: #{($name)};
}

@include tool.darkmode {
  @each $key, $name in setting.$semantic-dark {
    --c-#{$key}: #{($name)};
  }
}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$semantic-light"}),":",n.jsx(e.code,{children:"styles/settings/_colors.scss"}),"で定義した",n.jsx(e.strong,{children:"lightモード"}),"用のカラー"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$semantic-dark"}),":",n.jsx(e.code,{children:"styles/settings/_colors.scss"}),"で定義した",n.jsx(e.strong,{children:"darkモード"}),"用のカラー"]}),`
`]}),`
`,n.jsx(e.h1,{id:"mapgetbreakpoints",children:"map.get(breakpoints)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sass",children:`@use '../settings' as setting;
@use 'sass:map';
.c-map-tbl {
  width: 100%;

  &__key,
  &__val {
    border-style: solid;
  }

  &__key {
    flex-grow: 1;
    flex-basis: var(--map-tbl-key-width, 260px);
    border-width: 1px clamp(0px, map.get(setting.$breakpoints, underm), 1px) 0
      1px;

    .c-map-tbl tr:last-of-type & {
      border-bottom-width: clamp(
        0px,
        map.get(setting.$breakpoints, overm),
        1px
      );
  	}
  }

  &__val {
    flex-grow: 999;
    flex-basis: 0;
    min-width: clamp(
      calc(100% - var(--map-tbl-key-width, 260px)),
      map.get(setting.$breakpoints, underm),
      100%
    );
    border-width: 1px 1px 0;

    .c-map-tbl tr:last-of-type & {
      border-bottom-width: 1px;
    }
  }
}

`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"border-width"}),"を",n.jsx(e.code,{children:"clamp(0px, breakpoint, 1px)"}),"と指定することで、メディアクエリを使わずにレスポンシブ制御が可能です。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"@media"}),"クエリによるスタイルの上書きではなく、計算による切り替えなので、スタイルの衝突や優先順位の複雑化を避けられます。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$breakpoints"}),"としてマップ形式で管理することで、clamp関数での指定を簡潔にでき、保守性・再利用性も優れています。"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sass",children:`@use '../settings' as setting;
@use 'sass:map';

--s-clamp: clamp(
  clamp(
    #{setting.f-get-space(m)},
    #{map.get(setting.$breakpoints, overm)},
    #{setting.f-get-space(xl)}
  ),
  #{map.get(setting.$breakpoints, overs)},
  clamp(
    #{setting.f-get-space(xl)},
    #{map.get(setting.$breakpoints, overm)},
    #{setting.f-get-space(3xl)}
  )
);
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["入れ子にした",n.jsx(e.code,{children:"clamp()"}),"によって、ブレイクポイントを基準とした段階的な最小・最大値の更新が可能。"]}),`
`,n.jsxs(e.li,{children:["複雑な",n.jsx(e.code,{children:"clamp()"}),"の入れ子構造も、カスタムプロパティとして定義することで、可読性と再利用性を両立可能。"]}),`
`,n.jsx(e.li,{children:"メディアクエリを使わずに、レスポンシブ制御が可能。"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sass",children:`.o-grd--t {
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      clamp(
        clamp(
          (100% - var(--grd-gtt, setting.f-get-space(l)) * 2) / 3,
          map.get(setting.$breakpoints, underm),
          (50% - var(--grd-gtt, setting.f-get-space(l)) * 0.5)
        ),
        map.get(setting.$breakpoints, underm),
        clamp(
          (50% - var(--grd-gtt, setting.f-get-space(l)) * 0.5),
          map.get(setting.$breakpoints, unders),
          100%
        )
      ),
      1fr
    )
  );
}

.o-grd--q {
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      clamp(
        clamp(
          (100% - var(--grd-gtt, setting.f-get-space(l)) * 3) / 4,
          map.get(setting.$breakpoints, underm),
          (50% - var(--grd-gtt, setting.f-get-space(l)) * 0.5)
        ),
        map.get(setting.$breakpoints, underm),
        clamp(
          (50% - var(--grd-gtt, setting.f-get-space(l)) * 0.5),
          map.get(setting.$breakpoints, unders),
          100%
        )
      ),
      1fr
    )
  );
}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".o-grd--t"}),"(tri)の場合、",n.jsx(e.code,{children:"unders"}),"以下では1カラム、",n.jsx(e.code,{children:"underm"}),"以下では2カラム、",n.jsx(e.code,{children:"underm"}),"以上では3カラム。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".o-grd--q"}),"(quart)の場合、",n.jsx(e.code,{children:"underm"}),"以下までは、",n.jsx(e.code,{children:".o-grd--t"}),"と同様の挙動で、",n.jsx(e.code,{children:"underm"}),"以上では4カラム。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"display:grid"}),"の",n.jsx(e.code,{children:"gap"}),"にはカスタムプロパティ",n.jsx(e.code,{children:"--grd-gtt"}),"を設定しているため、外部から値を注入可能"]}),`
`]}),`
`,n.jsx(e.h1,{id:"readable-width",children:"Readable Width"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"styles/settings/_sizes.scss"}),"で以下のように定義しています。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sass",children:`$readableLength: 40em;
$readableLengthEn: 70em;
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"styles/utils/_spaces.scss"}),"で以下のようにヘルパーを定義しています。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sass",children:`@use '../settings' as setting;
@use 'sass:map';

.u-mw-r {
  max-width: setting.$readableLength;

  html:lang(en) & {
    max-width: setting.$readableLengthEn;
  }
}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$readableLength"}),"は全角で読みやすい文字数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$readableLengthEn"}),"は半角で読みやすい文字数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".u-mw-r"}),"は、読みやすさを考慮した",n.jsx(e.code,{children:"max-width"}),"を制限するヘルパークラス"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<html lang="ja">
	<head>
		<title>Documents</title>
	</head>
	<body>
		<main style="width: 100%">
			<p class="u-mw-r u-mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			<!-- u-mw-rの幅で水平中央揃え -->
		</main>
	</body>
</html>
`})}),`
`,n.jsx(e.h1,{id:"menuwidth",children:"menuWidth"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"styles/settings/_sizes.scss"}),"で以下のように定義しています。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sass",children:`$menuWidth: 240px;
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"dropdown"}),"や",n.jsx(e.strong,{children:"drawer"}),"の基準値"]}),`
`]})]})}function x(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{x as default};
