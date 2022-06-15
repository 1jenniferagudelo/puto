import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';



export default function Uno() {

    const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-color:  RGB(248,243,233);
    }
    `;
    const Div = styled.div`
    padding-left:20%;
    width: 80%;
    `
    const Tittle = styled.h1`
    padding-left:42%;
    padding-top: 0.5%;
    width: 58%;
    height: 5vh;
    `
    const Conteiner = styled.div`
    width: 100%;
    `
    const Form = styled.form`
    padding-left:30%;
    padding-top: 1%;
    width: 70%;
    height: 15vh;
    `
    const Barra = styled.input`
    width: 30vw;
    height: 3vw;
    font-family: 'Gilroy-Medium';
    font-size: 20px;
    `
    const M1h13button = styled.input`
   background-color: RGB(61,61,63);
   border: none;
   border-radius: 5px;
   width: 10vw;
   height: 3vw;
   font-family: 'Gilroy-Medium';
   font-size: 20px;
   line-height: 23px;
   text-align: center;
   text-transform: uppercase;
   color: #FFFFFF;
   margin-top: 1vw;
   
   &:hover {
       transform: scale(1.1);
       color: orange;
   }
   `;
    const Div3 = styled.div`
    padding-left:21%;
    width: 79%;
    `;
    const Impon = styled.div`
    -webkit-column-count :4;
 -moz-column-count : 4;
 column-count : 4;
 text-align:center;
 width: 100%;
 height: 7vw;
 font-size: 16px;
line-height: 27px;
padding-top: 12%;
padding-bottom: 3%;
    `;
    const Footer = styled.footer`
    background-color: RGB(61,61,63);
    text-align:center;
    padding-top: 2%;
    width: 100%;
 height: 3vw;
 font-family: 'Gilroy-Medium';
font-size: 14px;
line-height: 16px;
    `;
    return (
        <div>
            <GlobalStyle />
            <Div>
                <img src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1655256991/reto1-sprint03/negrita_ip2xks.jpg" />
            </Div>
            <Conteiner>
                <Tittle>Join J-Shop’s Family</Tittle>
                <Form>
                    <label>
                        <Barra type="text" value="Enter your mail" />
                    </label>
                    <M1h13button type="submit" value="JOIN FAMILY" />
                </Form>
            </Conteiner>
            <Div3>
                <img src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1655260314/reto1-sprint03/imagenes_777_l1fo8u.jpg" />
            </Div3>
            <Impon>
                <div>
                    <h1>Product</h1>
                    <p>Email Row</p>
                    <p>Free Tools</p>
                    <p>Agents</p>
                    <p>Blog</p>
                </div>
                <div>
                    <h1>Resources</h1>
                    <p>Our Agents</p>
                    <p>Member Stories</p>
                    <p>Video</p>
                    <p>Free Trial</p>
                </div>
                <div>
                    <h1>Company</h1>
                    <p>Patnerships</p>
                    <p>Terms of use</p>
                    <p>Privacy</p>
                    <p>Sitemap</p>
                </div>
                <div>
                    <h1> Get in touch</h1>
                    <p>You’ll find your next Marketing value you prefer.</p>
                    <img src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1655262691/reto1-sprint03/iconos_abajo_njn0zo.jpg" />
                </div>
            </Impon>
            <Footer>
                Copyright 2021 j-shop.com, All rights reserved.
            </Footer>
        </div>
    )
}

