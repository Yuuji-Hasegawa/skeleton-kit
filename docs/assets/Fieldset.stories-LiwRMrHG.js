/* empty css                *//* empty css             *//* empty css              *//* empty css                    *//* empty css              *//* empty css                *//* empty css                */const m=()=>{const t=document.createElement("form");t.action="#";const s=document.createElement("fieldset");s.className="c-frm-grp u-pos-r u-mb-l",s.innerHTML=`<legend
            class="c-frm-ttl c-prg-l u-pos-r u-flx-y-ctr u-dsp-ifx u-mb-s"
            data-placeholder="例）お名前"
          >
            お名前
          </legend>
          <input
            class="o-bx c-frm-txt c-prg-l u-pd-s u-w-max"
            id="name"
            name="your-name"
            type="text"
            aria-required="true"
            aria-describedby="name-helper name-error"
            autocapitalize="none"
            autocomplete="name"
            autocorrect="off"
            autofocus=""
            aria-invalid="false"
            placeholder="例）お名前"
          />
          <span id="name-helper" class="sr-only">
						お名前を入力してください。
					</span>
          <span
            class="c-frm-tip c-sml-l u-brd-r-s"
            id="name-error"
            aria-live="polite"
          >
						必須項目です。
					</span>`;const e=document.createElement("div");return e.className="o-bx c-frm-msg c-prg-l u-brd-r-s",e.id="formMessage",e.setAttribute("aria-hidden","true"),e.innerText="aaa",t.appendChild(s),t.appendChild(e),t},b={title:"Components/Fieldset",tags:["autodocs"],render:()=>m()},r={};var a,o,u,c,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(o=r.parameters)==null?void 0:o.docs)==null?void 0:u.source},description:{story:"**Fieldset**構築イメージ<br />\n詳細は、**Show code** または `src/styles/components/_form.scss`をご確認ください。\n- `.c-frm-*`:**Form**コンポーネント",...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.description}}};const g=["Examples"];export{r as Examples,g as __namedExportsOrder,b as default};
