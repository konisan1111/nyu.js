const audio = new Audio('music.mp3');
audio.play();

const navButtons = ['github', 'about', 'donate'];
// HEADER ---------------------->>>
const head = document.head;

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/x-icon';
favicon.href = 'favicon.jpg';
head.appendChild(favicon);

const pre1 = document.createElement('link');
pre1.rel = 'preconnect';
pre1.href = 'https://fonts.googleapis.com';
head.appendChild(pre1);

const pre2 = document.createElement('link');
pre2.rel = 'preconnect';
pre2.href = 'https://fonts.gstatic.com';
pre2.crossOrigin = 'anonymous';
head.appendChild(pre2);

const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Meddon&display=swap';
head.appendChild(fontLink);

const script = document.createElement('script');
script.type = 'module';
script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';
head.appendChild(script);

document.title = "nyu.js | The Elfen Lied Fanpage made in JavaScript";

// DIVS --------------------->>>
// pictures
const pictureFirst = document.createElement("div");
const pictureSecond = document.createElement("div");
const pictureThird = document.createElement("div");
const pictureHTML = document.createElement("div");
const pictureJS = document.createElement("div");
// navbar
const navbar = document.createElement("div");
const logoText = document.createElement("div");
const buttonContainer = document.createElement("div");

// container
const container = document.createElement("div");

// content
const logoImage = document.createElement("div");
const musicBox = document.createElement("model-viewer")
const titleText = document.createElement("div");
const subText = document.createElement("div");

// ID ----------------------->>>
navbar.id = "navbar";
container.id = "container";
logoText.id = "logoText";
musicBox.id = "musicBox";
titleText.id = "titleText";
buttonContainer.id = "buttonContainer";
subText.id = "subText";
logoImage.id = "logoImage";

pictureHTML.id = "picureHTML";
pictureJS.id = "pictureJS";

pictureFirst.id = "pictureFirst";
pictureSecond.id = "pictureSecond";
pictureThird.id = "pictureThird";

// CONSTRUCTING ------------->>>
document.body.appendChild(navbar);

document.body.appendChild(pictureFirst);
document.body.appendChild(pictureSecond);
document.body.appendChild(pictureThird);
document.body.appendChild(pictureHTML);
document.body.appendChild(pictureJS);

navbar.appendChild(logoText);
navbar.appendChild(buttonContainer);

document.body.appendChild(container);

container.appendChild(logoImage);
container.appendChild(titleText);
titleText.textContent = "nyu.js! a fanpage in js";
container.appendChild(subText);
subText.textContent = `
Welcome to nyu.js! This is one of my practice projects to learn javascript.
I was like, it would be a fun and intermidate challange to create a website 
only in pure javascript, soooooo~ I did it ^^
`;
//container.appendChild(musicBox);
//musicBox.src = "music_box.glb";
//musicBox.setAttribute("auto-rotate", "");

for (const navObject in navButtons) {
    const navButton = document.createElement("button");
    const buttonSeparator = document.createElement("div");
    
    navButton.textContent = navButtons[navObject];

    navButton.id = "navButton";
    buttonSeparator.id = "buttonSeparator";

    navButton.onmouseover = () => {
        navButton.style.textShadow = `
            0 0 5px #2a2a2a,
            0 0 10px #573c3c,
            0 0 20px #ff0000, 
            0 0 40px #feeaea,
            0 0 60px #cd7a7a
        `;
    };

    navButton.onmouseout = () => {
        navButton.style.textShadow = `
            0 0 5px #000,
            0 0 10px #000,
            0 0 20px #ff0000, 
            0 0 40px #530000,
            0 0 60px #530000
        `;
    };

    navButton.onclick = () => {
        switch (navButton.textContent) {
            case "github": 
                window.location.href = "https://github.com/konisan1111/nyu.js";
                break;

            case "about": 
                window.location.href = "https://github.com/konisan1111";
                break;

            case "donate": 
                window.location.href = "https://ko-fi.com/konisan111";
                break;
        }
    }

    buttonContainer.appendChild(buttonSeparator);
    buttonContainer.appendChild(navButton);

    Object.assign(navButton.style, {
        width: "5em",
        height: "1.3em",
        alignItems: "center",
        display: "flex",
        fontFamily: "Meddon",
        color: "red",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "1.3em",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "all 0.1s ease-in-out",
        textShadow: `
            0 0 5px #000000,
            0 0 10px #000000,
            0 0 20px #ff0000, 
            0 0 40px #530000,
            0 0 60px #530000
        `
    })

    Object.assign(buttonSeparator.style, {
        height: "2em",
        width: "1px",
        backgroundColor: "#a91919",
    })
}

// VARIABLES ---------------->>
const firstColor = "#000000";
const navColor = "#00000095";
const secondColor = "#0e0e0e";
const borderColor = "#2a2a2a71";

// STYLING ------------------>>>
Object.assign(document.body.style, {
    backgroundImage: "url('background.jpg')",
    fontFamily: "Meddon",
    backgroundColor: `${firstColor}`,
    backgroundPosition: "center",
    color: "#fff",  
    fontFamily: "monospace",
    margin: "0",
})

Object.assign(navbar.style, {
    width: "100%",
    height: "5em",
    backgroundColor: `${navColor}`,
    position: "fixed",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    borderBottom: `1px solid ${borderColor}`,
    boxShadow: "0 0 3em 0 rgba(0, 0, 0, 0.81)",
    backgroundPosition:"left",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(10px)",
})

Object.assign(buttonContainer.style, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
    marginRight: "2em",
    gap: "4em",
})

Object.assign(container.style, {
    width: "100%",
    height: "100vh",
    backgroundImage: `
        radial-gradient(circle, transparent 70%, ${firstColor} 86%),
        linear-gradient(rgba(255, 255, 255, 0.06)1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
    `,
    backgroundSize: "100% 100%, 50px 50px, 50px 50px",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
});

Object.assign(logoText.style, {
    backgroundImage: "url('nyujslogo.png')",
    width: "10em",
    height: "6em",
    marginLeft: "1em",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
})

Object.assign(musicBox.style, {
    width: "30em",
    height: "30em",
    marginTop: "-4em",
    marginLeft: "4em",
})

Object.assign(logoImage.style, {
    width: "40em",
    height: "20em",
    marginTop: "-4em",
    marginLeft: "4em",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url('logo.png')", 
    marginLeft: "8em"
})

Object.assign(titleText.style, {
    fontSize: "3.2em",
    fontFamily: "Meddon",
    color: "red",
    marginLeft: "2.3em",
    fontWeight: "bold",
    textShadow: `
        0 0 5px #000000,
        0 0 10px #000000,
        0 0 20px #530000, 
        0 0 40px #530000,
        0 0 60px #530000
    `
})

Object.assign(subText.style, {
    fontSize: "1.5em",
    fontFamily: "Meddon",
    color: "red",
    marginLeft: "5em",
    fontWeight: "bold",
    textWrap: "wrap",
    maxWidth: "30em",
    lineHeight: "2em",
        textShadow: `
        0 0 5px #000000,
        0 0 10px #000000,
        0 0 20px #530000, 
        0 0 40px #530000,
        0 0 60px #530000
    `
})

Object.assign(pictureFirst.style, {
    backgroundImage: "url('picture1.jpg')",
    width: "20em",
    height: "20em",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    display: "flex",
    bottom: "20px",
    right: "20px",
    zIndex: "2000",
    pointerEvents: "none",
    opacity: "0.5",
    borderRadius: "2em"
})

Object.assign(pictureSecond.style, {
    backgroundImage: "url('picture2.jpg')",
    width: "10em",
    height: "10em",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    display: "flex",
    bottom: "20px",
    right: "20px",
    zIndex: "2000",
    pointerEvents: "none",
    marginRight: "21em",
    opacity: "0.5",
    borderRadius: "2em"
})

Object.assign(pictureThird.style, {
    backgroundImage: "url('picture3.jpg')",
    width: "10em",
    height: "10em",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    display: "flex",
    bottom: "20px",
    right: "20px",
    zIndex: "2000",
    pointerEvents: "none",
    marginBottom: "21em",
    opacity: "0.5",
    borderRadius: "2em"
})

Object.assign(pictureHTML.style, {
    backgroundImage: "url('html.png')",
    width: "7em",
    height: "7em",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    display: "flex",
    bottom: "20px",
    right: "20px",
    zIndex: "2000",
    pointerEvents: "none",
    marginBottom: "21em",
    marginRight: "11em",
    opacity: "0.2",
    borderRadius: "2em"
})

Object.assign(pictureJS.style, {
    backgroundImage: "url('js.png')",
    width: "6em",
    height: "6em",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    display: "flex",
    bottom: "20px",
    right: "20px",
    zIndex: "2000",
    pointerEvents: "none",
    marginRight: "21em",
    marginBottom: "11em",
    opacity: "0.2",
    borderRadius: "2em"
})