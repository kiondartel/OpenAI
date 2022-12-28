import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 html {
  font-size: medium;
  scroll-behavior: smooth;
  font-family: "Nunito",sans-serif;;
 }

 body {
  background-color: #040c18; 
 }

 a {
  color: unset;
  text-decoration: none;
 }
 
 `;

export default Global;
