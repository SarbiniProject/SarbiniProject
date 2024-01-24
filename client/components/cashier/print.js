export const Print =({products,tables,total})=>{
  

  return (
    `
  <html>
    <body>
    <div class="div">
    <span class="span">
      <div class="div-2">order #: ${tables.id}</div>
      <div class="div-3">
        <span class="span-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f315ba6c6733b9d83f31aa701df25b0d855e0bac76fbaa3f30acabac3ada7fb0?"
            class="img"
          />
          <div class="div-4">table:</div>
          <div class="div-5">${tables.name}</div>
        </span>
        <span class="span-3">
          <img
            loading="lazy"
            srcset="..."
            class="img-2"
          />
          <div class="div-6">time:</div>
          <div class="div-7">${tables.createdAt.slice(0, 10)}</div>
        </span>
      </div>
    </span>
    <div class="div-8"></div>
    <div class="div-9">
      <span class="span-4">
        <div class="div-10">item</div>
        <div class="div-11">price</div>
      </span>
    
      ${products.map((item, index) => `
                <span class="span-5">
                  <span class="span-6">
                    <div class="div-12">${item.product_name}</div>
                  </span>
                  <div class="div-14">${item.price}DT</div>
                </span>
                <div class="div-15"></div>
              `).join('')}
    
      <div class="div-15"></div>
  
      <div class="div-19"></div>
   
      <div class="div-23"></div>
    </div>
    <span class="span-11">
      <div class="div-24">total</div>
      <div class="div-25">${total}dt</div>
    </span>
    <span class="span-12">
      <div class="div-26">tables open:</div>
      <div class="div-27">
        <span class="span-13">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f69ec7cfc73527fdebb6f2152686ad3116f02eaa4e32a9e85fc5db0d657c6562?"
            class="img"
          />
          <div class="div-28">table:</div>
          <div class="div-29">${tables.id}</div>
        </span>
        <span class="span-14">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a503a08644383c64ec475be2080b2704447817f340aaf839d1a458476a33eb58?"
            class="img"
          />
          <div class="div-30">table:</div>
          <div class="div-31">${tables.name}</div>
        </span>
      </div>
    </span>
  </div>
  <style>
    .div {
      border-radius: 30px;
      box-shadow: 0px 0px 50px 5px rgba(6, 6, 34, 0.4);
      background-color: #fff9fa;
      display: flex;
      max-width: 480px;
      width: 100%;
      flex-direction: column;
      margin: 0 auto;
      padding: 50px 0;
    }
    .span {
      align-self: stretch;
      display: flex;
      margin-top: 47px;
      width: 100%;
      flex-direction: column;
      padding: 0 13px;
    }
    .div-2 {
      color: #000;
      text-transform: uppercase;
      font: 600 30px Quicksand, sans-serif;
    }
    .div-3 {
      display: flex;
      margin-top: 23px;
      width: 100%;
      align-items: start;
      justify-content: space-between;
      gap: 20px;
      padding: 0 1px;
    }
    .span-2 {
      display: flex;
      gap: 7px;
    }
    .img {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 17px;
      overflow: hidden;
      max-width: 100%;
    }
    .div-4 {
      color: var(--green-green-600, #2c3832);
      text-transform: uppercase;
      align-self: center;
      margin: auto 0;
      font: 500 15px Quicksand, sans-serif;
    }
    .div-5 {
      color: var(--salmon-salmon, #d89f65);
      text-transform: uppercase;
      align-self: start;
      white-space: nowrap;
      font: 500 23px Quicksand, sans-serif;
    }
    .span-3 {
      align-self: stretch;
      display: flex;
      justify-content: space-between;
      gap: 6px;
      margin-right: 17px;
    }
    .img-2 {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 20px;
      overflow: hidden;
      max-width: 100%;
    }
    .div-6 {
      color: var(--green-green-600, #2c3832);
      text-transform: uppercase;
      align-self: center;
      margin: auto 0;
      font: 500 15px Quicksand, sans-serif;
    }
    .div-7 {
      color: var(--salmon-salmon, #d89f65);
      text-align: right;
      text-transform: uppercase;
      align-self: center;
      flex-grow: 1;
      white-space: nowrap;
      margin: auto 0;
      font: 500 23px Quicksand, sans-serif;
    }
    .div-8 {
      background-color: #eceded;
      align-self: stretch;
      min-height: 1px;
      margin-top: 18px;
      width: 100%;
    }
    .div-9 {
      justify-content: flex-end;
      align-items: flex-start;
      border-radius: 14px;
      background-color: var(--Actions-extras-light-gray-50, #fafafa);
      align-self: stretch;
      display: flex;
      margin-top: 19px;
      width: 100%;
      padding-bottom: 50px;
      flex-direction: column;
    }
    .span-4 {
      justify-content: space-between;
      border-radius: 8px 8px 0px 0px;
      background-color: var(--Actions-extras-Light-bue-background, #eaf0f0);
      align-self: stretch;
      display: flex;
      width: 100%;
      gap: 20px;
      padding: 20px 0px;
    }
    .div-10 {
      color: #000;
      text-transform: uppercase;
      font: 500 15px Quicksand, sans-serif;
      margin-left: 30px;
    }
    .div-11 {
      color: #000;
      text-transform: uppercase;
      font: 500 15px Quicksand, sans-serif;
      margin-right: 60px;
    }
    .span-5 {
      align-self: start;
      display: flex;
      width: 254px;
      max-width: 100%;
      align-items: start;
      justify-content: space-between;
      gap: 20px;
      margin: 25px 0 0 28px;
    }
    .span-6 {
      display: flex;
      flex-direction: column;
    }
    .div-12 {
      color: #000;
      text-transform: uppercase;
      white-space: nowrap;
      font: 500 15px Quicksand, sans-serif;
    }
    .div-13 {
      color: #000;
      margin-top: 8px;
      font: 400 15px Quicksand, sans-serif;
    }
    .div-14 {
      color: #000;
      text-transform: uppercase;
      font: 500 15px Quicksand, sans-serif;
      margin-right: -137px;
    }
    .div-15 {
      background-color: #eceded;
      align-self: stretch;
      min-height: 1px;
      margin-top: 12px;
      width: 100%;
    }
    .span-7 {
      align-self: stretch;
      display: flex;
      margin-top: 21px;
      width: 100%;
      flex-direction: column;
      align-items: start;
      padding: 0 80px 0 28px;
    }
    .span-8 {
      display: flex;
      align-items: start;
      justify-content: space-between;
      gap: 20px;
    }
    .div-16 {
      color: #000;
      text-transform: uppercase;
      font: 500 15px Quicksand, sans-serif;
    }
    .div-17 {
      color: #000;
      text-transform: uppercase;
      align-self: stretch;
      font: 500 15px Quicksand, sans-serif;
    }
    .div-18 {
      color: #000;
      margin-top: 6px;
      font: 400 15px Quicksand, sans-serif;
    }
    .div-19 {
      background-color: #eceded;
      align-self: stretch;
      min-height: 1px;
      margin-top: 12px;
      width: 100%;
    }
    .span-9 {
      align-self: start;
      display: flex;
      width: 245px;
      max-width: 100%;
      align-items: start;
      justify-content: space-between;
      gap: 20px;
      margin: 21px 0 0 28px;
    }
    .span-10 {
      display: flex;
      flex-direction: column;
    }
    .div-20 {
      color: #000;
      text-transform: uppercase;
      white-space: nowrap;
      font: 500 15px Quicksand, sans-serif;
    }
    .div-21 {
      color: #000;
      margin-top: 8px;
      font: 400 15px Quicksand, sans-serif;
    }
    .div-22 {
      color: #000;
      text-transform: uppercase;
      font: 500 15px Quicksand, sans-serif;
    }
    .div-23 {
      background-color: #eceded;
      align-self: stretch;
      min-height: 1px;
      width: 100%;
      margin: 12px 0 18px;
    }
    .span-11 {
      align-self: center;
      display: flex;
      margin-top: 17px;
      width: 100%;
      max-width: 299px;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
    .div-24 {
      color: #000;
      text-transform: uppercase;
      margin: auto 0;
      font: 600 30px Quicksand, sans-serif;
    }
    .div-25 {
      color: #000;
      text-align: right;
      text-transform: uppercase;
      align-self: stretch;
      font: 600 30px Quicksand, sans-serif;
    }
    .span-12 {
      background-color: var(--Actions-extras-Light-bue-background, #eaf0f0);
      align-self: stretch;
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      margin: 28px 0 45px;
      padding: 20px 0px 20px 0px;
    }
    .div-26 {
      color: #000;
      text-transform: uppercase;
      white-space: nowrap;
      font: 500 23px Quicksand, sans-serif;
    }
    .div-27 {
      align-self: stretch;
      display: flex;
      margin-top: 24px;
      width: 90%;
      align-items: start;
      justify-content: space-between;
      gap: 20px;
      margin-left: 15px;
    }
    .span-13 {
      display: flex;
      gap: 7px;
    }
    .div-28 {
      color: var(--green-green-600, #2c3832);
      text-transform: uppercase;
      align-self: center;
      margin: auto 0;
      font: 500 15px Quicksand, sans-serif;
    }
    .div-29 {
      color: var(--salmon-salmon, #d89f65);
      text-transform: uppercase;
      align-self: start;
      white-space: nowrap;
      font: 500 23px Quicksand, sans-serif;
    }
    .span-14 {
      display: flex;
      gap: 7px;
    }
    .div-30 {
      color: var(--green-green-600, #2c3832);
      text-transform: uppercase;
      align-self: center;
      margin: auto 0;
      font: 500 15px Quicksand, sans-serif;
    }
    .div-31 {
      color: var(--Actions-extras-unactive-btn, #d9d9d9);
      text-transform: uppercase;
      align-self: start;
      white-space: nowrap;
      font: 500 23px Quicksand, sans-serif;
    }
  </style>
  
    </body>
  </html>
  `)
  }