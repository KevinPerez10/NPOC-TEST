/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'link': '#A8DADC',
        'button-dblue': '#1D3557',
        'button-lblue': '#60829B',
        'bg-dashboard': '#F3F3F3',
        'footer': '#DBDBDB',
        'morning': '#F8FE5E',
        'afternoon': '#FF8000'
      },
      backgroundImage: {
        'npoc--landing__page': "url('./public/images/landing page.jpg')",
        'npoc--appointment__page': "url('./public/images/pexels-ksenia-chernaya-5752254.jpg')",
        'npoc--thankyou__page': "url('./public/images/thank you.jpg')",
        'dashboard--search__svg': "url('./svg/search-svgrepo-com.svg')",
        'signup--image': "url(./public/images/139472517_220155239842825_6914890826448897223_n.jpg)",
        'login--image': "url(./public/images/116839142_906231729862518_2139663056183987943_n.jpg)",
        'emailverification': "url(./public/images/229332455_188066033341715_4624224522904347246_n.jpg)",
        'eye--exam': "url(./public/images/eye exam.png)",
        'new--frame': "url(./public/images/new frame.png)",
        'available--slots': "url(./public/images/pexels-nataliya-vaitkevich-5842835.jpg)"
      },
      fontSize: {
        'xxs': '.60rem'
      },
    },
    fontFamily: {
      'gilmer': '"Gilmer", Arial, sans-serif',
      'poppins': '"Poppins", Arial, sans-serif',
    },
    screens: {
      '2xl': '1536px',  //2xl
      'xl': '1200px',		//xl
      'lg': '1024px',		//lg 
      'md': '768px',			//md
      'sm': '640px',			//sm
      'xs': '480px',
      'xxs': '320px'
    },
  },
  plugins: [],
}
