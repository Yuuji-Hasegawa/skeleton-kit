/* empty css                *//* empty css             *//* empty css             *//* empty css              *//* empty css                    *//* empty css             *//* empty css                *//* empty css              *//* empty css              *//* empty css                */const d=()=>{const e=document.querySelector("#share-url"),t=document.querySelector(".c-btn--copy"),r=document.querySelector("#tooltip-share-url");function s(a){a.select()}async function p(a){try{await navigator.clipboard.writeText(a.value),r&&(r.textContent="Copied!",r.setAttribute("aria-label","Copied!"),r.setAttribute("aria-hidden","false")),t&&t.setAttribute("aria-label","URL copied to clipboard")}catch{return}finally{setTimeout(()=>{r&&(r.textContent="Copy url to clipboard",r.setAttribute("aria-label","Copy url to clipboard"),r.setAttribute("aria-hidden","true")),t.disabled=!1,t&&(t.setAttribute("aria-label","copy"),t.setAttribute("aria-disabled","false"))},1e3)}}e&&(e.addEventListener("click",()=>{s(e)}),e.addEventListener("focus",()=>{s(e)})),t!=null&&t.addEventListener("click",()=>{t.disabled=!0,t.setAttribute("aria-disabled","true"),p(e)})},b=()=>{const e=document.createElement("div");return e.className="u-dsp-flx u-pos-r",e.innerHTML=`<label for="share-url" class="sr-only">Copy Share URL</label>
        <input
          class="o-bx c-frm-txt c-prg-l u-pd-s u-w-max"
          id="share-url"
          type="text"
          value="https://bbns.jp/services/1314/"
          readonly=""
        />
        <button
          type="button"
          class="o-bx c-btn c-btn--sq c-btn--txt c-btn--copy u-brd-r-s u-ml-m u-flx-shn"
          aria-label="copy"
          aria-disabled="false"
          aria-describedby="tooltip-share-url"
        >
          <svg
            class="c-icn-cpy"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            class="c-icn-chk"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              fill="currentColor"
            />
          </svg>
        </button>
        <span
          id="tooltip-share-url"
          class="c-tip c-tip--cpy c-sml-l u-px-s u-py-2xs"
          aria-label="Copy url to clipboard"
          aria-hidden="true"
          popover="auto"
        >
					Copy url to clipboard
				</span>`,d(),e},L={title:"Components/Bar/Sharebar",tags:["autodocs"],render:()=>b()},o={};var c,i,l,n,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source},description:{story:"詳細は、**Show code** をご確認ください。",...(u=(n=o.parameters)==null?void 0:n.docs)==null?void 0:u.description}}};const S=["Examples"];export{o as Examples,S as __namedExportsOrder,L as default};
