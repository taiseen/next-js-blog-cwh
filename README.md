18 March 2022 

# Next Js + Tailwind CSS | App 

### installed process

* yarn create next-app [yourProjectName]
* yarn add -D tailwindcss postcss autoprefixer

* npx tailwindcss init -p

```
content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

```
<a href=" " target="_blank" rel="noopener noreferrer">

    <Image src="" alt="" width={72} height={16} />

</a>
```

```
"scripts": {
    ...
    "export": "next build && next export"
},
```

* yarn export

`trailingSlash: true,` ==> in `next.config.js` file for `SSG` link working + reload/refresh working properly.

<br/>

<video src="./demo.mp4" width="100%" height="100%" controls>

<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/690287431?h=7c3cd5aaaa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="demo.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>