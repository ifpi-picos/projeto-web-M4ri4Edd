/*The specifics*/
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;

}

@font-face {
    font-family: LTSaeda;
    src: url(fonts/LTSaeada-Regular.otf);
}

@font-face {
    font-family: RosieBrown;
    src: url(fonts/RosieBrownSerifDemo.otf);
}

/*The header*/
.header{
    width: 100%;
    height: 11%;
    background-color: #302F4D;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "LTSaeda", sans-serif;
    font-size: large;
    text-shadow: 2px 2px #120D31;
}

.name{
    color: #F0D3F7;
    font-family: "RosieBrown", serif;
    font-weight: normal;
    margin-left: 2%;
    text-shadow: 3px 3px  #120D31;
}

.align {
    width: 40%;
    display: flex;
    margin-right: 2%;
}

.link{
    color: #F0D3F7;
    text-decoration: none;
    width: 36%;
    text-align: end;
}

#home{
    width: 28%;
}

.igBtn{
    color: #F0D3F7;
    width: 10%;
    margin-right: 1%;
}

/*this is for phones*/
main{
    background-image: url(imgs/54\ Sem\ Título.jpg);
    background-color: #120D31;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
}

.homepage{
    background-image: url(imgs/54\ Sem\ Título.jpg);
    background-color: #120D31;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

body{
    width: 100vw;
    height: 100vh;
}

.container-carrossel{
    max-width: 90%;
    margin: auto;
    margin-top: 6%;
    height: auto;
    overflow: hidden; 
}

.title{
    color: white;
    font-family: "RosieBrown", serif;
    font-weight: normal;
    font-size: 4rem;
    text-shadow: 2px 2px #302F4D;
    margin-top: 3%;
}

/*this is for tablets*/
@media only screen and (min-width: 600px){
    body{
        width: 100vw;
        height: 100vh;
    }

    main{
        background-image: url(imgs/56\ Sem\ Título.jpg);
        background-color: #120D31;
        background-size: cover;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .homepage{
        background-image: url(imgs/56\ Sem\ Título.jpg);
        background-color: #120D31;
        background-size: cover;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container-carrossel{
        max-width: 80%;
        margin: auto;
        margin-top: 4%;
        height: auto;
        overflow: hidden; 
    }

    .title{
        color: white;
        font-family: "RosieBrown", serif;
        font-weight: normal;
        font-size: 6rem;
        text-shadow: 2px 2px 5px #120D31;
    }
}

/*this is for computers*/
@media only screen and (min-width: 768px) {
    body{
        width: 100vw;
        height: 100vh;
    }

    main{
        background-image: url(imgs/56\ Sem\ Título.jpg);
        background-color: #120D31;
        background-size: cover;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .homepage{
        background-image: url(imgs/56\ Sem\ Título.jpg);
        background-color: #120D31;
        background-size: cover;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container-carrossel{
        max-width: 26%;
        margin: auto;
        margin-top: 1.5%;
        width: 26%;
        height: auto;
        overflow: hidden;
    }

    .title{
        color: white;
        font-family: "RosieBrown", serif;
        font-weight: normal;
        font-size: 9rem;
        text-shadow: 2px 2px 5px #120D31;
        margin-bottom: 12%;
    }
}

.carrossel{
    display: flex;
    width: 100%;
    height: 100%;
}

#prevBtn{
    background-color: #F0D3F7;
    width: 50px;
    height: 50px;
    opacity: 70%;
    color: #120D31;
    align-items: center;
    border: none;
    border-radius: 8%;
}

#nextBtn{
    background-color: #F0D3F7;
    width: 50px;
    height: 50px;
    opacity: 70%;
    color: #120D31;
    align-items: center;
    border: none;
    border-radius: 8%;
} 