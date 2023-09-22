class thumbnailVideo extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "conteiner");

        const imgThumb = document.createElement("img");
        imgThumb.setAttribute("class", "img_thumb");
        imgThumb.src = this.getAttribute("photoThumb");

        const info = document.createElement("div");
        info.setAttribute("class", "info");

        const imgUser = document.createElement("img");
        imgUser.setAttribute("id", "user-img");
        imgUser.src = this.getAttribute("photoUser");
        info.appendChild(imgUser);

        const infoText = document.createElement("div")
        infoText.setAttribute("class", "info_text");
        info.appendChild(infoText);

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title") || "Titulo ausente";
        linkTitle.href = this.getAttribute("urltitle") || "#";
        infoText.appendChild(linkTitle);

        const userName = document.createElement("span");
        userName.setAttribute("class", "username");
        userName.textContent = this.getAttribute("user") || "Anonimo";
        infoText.appendChild(userName);

        const moreInfo = document.createElement("span");
        moreInfo.textContent = this.getAttribute("moreinfo") || "Informação ausente";
        infoText.appendChild(moreInfo);

        
        componentRoot.appendChild(imgThumb);
        componentRoot.appendChild(info);
        
        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
                * {
                padding: 0;
                margin: 0;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                box-sizing: border-box;
                color: rgb(179, 177, 177);
                text-decoration: none;
            }
    
            .conteiner {
                display: flex;
                flex-direction: column;
                width: 21rem;
                padding: 1rem;
                gap: 1rem;
                cursor: pointer;
            }
            
            .img_thumb {
                width: 100%;
                border-radius: 1rem;
            }

            .img_thumb:hover {
                border-radius: 0;
                transition: all .4s;
                transform: scale(1.01)
            }
            
            .info {
                display: flex;
                gap: 1rem;
                align-items: flex-start;
            }
            
            .info_text {
                display: flex;
                flex-direction: column;
                align-items: start;
                font-size: .8rem;
            }
            
            .info_text a{
                font-size: 1rem;
                font-weight: 500;
                color: white;
            }
            
            .username {
                margin-top: .2rem;
                font-size: .8rem;
            }

            .username:hover {
                color: white;
            }
            
            #user-img {
                background: whitesmoke;
                width: 2rem;
                border-radius: 100%;
            }
        `;

        return style;
    }
}

customElements.define("yt-thumb", thumbnailVideo);