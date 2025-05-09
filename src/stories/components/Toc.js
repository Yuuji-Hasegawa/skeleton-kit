import '../../styles/generic/_resets.scss'
import '../../styles/objects/_box.scss'
import '../../styles/objects/_icon.scss'
import '../../styles/components/_accessory.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/components/_link.scss'
import '../../styles/components/_list.scss'
import '../../styles/utils/_frames.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_display.scss'
import '../../styles/utils/_flex.scss'
import '../../styles/utils/_interaction.scss'

export const createToc = () => {
	const Toc = document.createElement('details')
	Toc.className = 'o-bx c-toc'
	const Summary = document.createElement('summary')
	Summary.className = 'c-toc__hd c-prg-l u-pos-r u-cur-ptr u-px-m u-py-s u-dsp-flx u-flx-y-ctr'
	Summary.innerHTML = `<svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            class="o-icn u-mr-s"
          >
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z"
              fill="currentColor"
            ></path>
          </svg>
          目次
          <svg
            viewBox="0 0 320 512"
            xmlns="http://www.w3.org/2000/svg"
            class="o-icn"
          >
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
              fill="currentColor"
            ></path>
          </svg>`
	const count = 10
	const innerList = document.createElement('ul')
	innerList.className = 'c-ul u-pb-m u-pr-m'
	for (let i = 1; i <= count; i++) {
		const item = document.createElement('li')
		const link = document.createElement('a')
		link.className = 'c-a c-a--und u-dsp-blc u-py-s'
		link.innerText = `TOC item ${i}`
		link.href = '#'
		item.appendChild(link)
		innerList.append(item)
	}
	Toc.appendChild(Summary)
	Toc.appendChild(innerList)
	return Toc
}
