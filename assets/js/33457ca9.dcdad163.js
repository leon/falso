"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[421],{5318:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7378);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),p=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,g=s["".concat(d,".").concat(m)]||s[m]||c[m]||l;return r?t.createElement(g,i(i({ref:n},u),{},{components:r})):t.createElement(g,i({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2537:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var t=r(5773),a=r(808),l=(r(7378),r(5318)),i=["components"],o={slug:"/flight"},d="Flight",p={unversionedId:"auto-generated/flight",id:"auto-generated/flight",title:"Flight",description:"`randAirline`",source:"@site/docs/auto-generated/flight.mdx",sourceDirName:"auto-generated",slug:"/flight",permalink:"/falso/docs/flight",editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/flight"},sidebar:"falso",previous:{title:"Finance",permalink:"/falso/docs/finance"},next:{title:"Food",permalink:"/falso/docs/food"}},u=[{value:"<code>randAirline</code>",id:"randairline",children:[],level:3},{value:"<code>randAirport</code>",id:"randairport",children:[],level:3},{value:"<code>randAirportCode</code>",id:"randairportcode",children:[],level:3},{value:"<code>randAirportName</code>",id:"randairportname",children:[],level:3},{value:"<code>randFlightDetails</code>",id:"randflightdetails",children:[],level:3},{value:"<code>randFlightNumber</code>",id:"randflightnumber",children:[],level:3},{value:"<code>randSeatNumber</code>",id:"randseatnumber",children:[],level:3}],c={toc:u};function s(e){var n=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flight"},"Flight"),(0,l.kt)("h3",{id:"randairline"},(0,l.kt)("inlineCode",{parentName:"h3"},"randAirline")),(0,l.kt)("p",null,"Generate a random airline."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAirline } from '@ngneat/falso';\n\nrandAirline()\nrandAirline({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAirline()}/>;\n}\n")),(0,l.kt)("h3",{id:"randairport"},(0,l.kt)("inlineCode",{parentName:"h3"},"randAirport")),(0,l.kt)("p",null,"Generate a random airport."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAirport } from '@ngneat/falso';\n\nrandAirport()\nrandAirport({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAirport()}/>;\n}\n")),(0,l.kt)("h3",{id:"randairportcode"},(0,l.kt)("inlineCode",{parentName:"h3"},"randAirportCode")),(0,l.kt)("p",null,"Generate a random airport code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAirportCode } from '@ngneat/falso';\n\nrandAirportCode()\nrandAirportCode({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAirportCode()}/>;\n}\n")),(0,l.kt)("h3",{id:"randairportname"},(0,l.kt)("inlineCode",{parentName:"h3"},"randAirportName")),(0,l.kt)("p",null,"Generate a random airport name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAirportName } from '@ngneat/falso';\n\nrandAirportName()\nrandAirportName({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAirportName()}/>;\n}\n")),(0,l.kt)("h3",{id:"randflightdetails"},(0,l.kt)("inlineCode",{parentName:"h3"},"randFlightDetails")),(0,l.kt)("p",null,"Generate a random flight details."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFlightDetails } from '@ngneat/falso';\n\nrandFlightDetails()\nrandFlightDetails({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randFlightDetails()}/>;\n}\n")),(0,l.kt)("h3",{id:"randflightnumber"},(0,l.kt)("inlineCode",{parentName:"h3"},"randFlightNumber")),(0,l.kt)("p",null,"Generate a random flight number."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFlightNumber } from '@ngneat/falso';\n\nrandFlightNumber()\nrandFlightNumber({ airline: 'RyanAir' })\nrandFlightNumber({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randFlightNumber()}/>;\n}\n")),(0,l.kt)("h3",{id:"randseatnumber"},(0,l.kt)("inlineCode",{parentName:"h3"},"randSeatNumber")),(0,l.kt)("p",null,"Generate a random seat number."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSeatNumber } from '@ngneat/falso';\n\nrandSeatNumber()\nrandSeatNumber({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSeatNumber()}/>;\n}\n")))}s.isMDXComponent=!0}}]);