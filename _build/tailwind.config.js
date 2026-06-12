/** 統合Tailwind設定（index / preview / food-wholesale / seafood-wholesale の inline config を統合） */
module.exports = {
  content: [
    "C:/Users/NOBU/livnexus-site/index.html",
    "C:/Users/NOBU/livnexus-site/preview.html",
    "C:/Users/NOBU/livnexus-site/food-wholesale.html",
    "C:/Users/NOBU/livnexus-site/seafood-wholesale.html",
  ],
  theme: {
    extend: {
      colors: {
        paper:  '#EFF5FB',
        ink:    '#0B2440',
        slate:  '#3C4D63',
        muted:  '#5A6B82',
        line:   '#DCE7F2',
        sky:    { DEFAULT:'#0EA5E9', soft:'#7DD3FC', deep:'#0369A1' },
        ocean:  '#2563EB',
        teal:   '#0D9488',
        green:  '#16A34A',
        sun:    '#F59E0B',
        navy:   '#0B2440',
      },
      fontFamily: {
        sans:  ['Inter','Noto Sans JP','sans-serif'],
        jp:    ['Noto Sans JP','sans-serif'],
      },
      maxWidth: { content: '1200px' },
      keyframes: {
        'gradient-x': { '0%,100%':{ backgroundPosition:'0% 50%' }, '50%':{ backgroundPosition:'100% 50%' } },
        marquee: { '0%':{ transform:'translateX(0)' }, '100%':{ transform:'translateX(-50%)' } },
        float: { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-10px)' } },
      },
      animation: {
        'gradient-x':'gradient-x 6s ease infinite',
        marquee:'marquee 30s linear infinite',
        float:'float 6s ease-in-out infinite',
      },
    }
  },
  plugins: [],
};
