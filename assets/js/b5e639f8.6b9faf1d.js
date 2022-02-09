"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[892],{5318:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var a=r(7378);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),u=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=u(r),m=t,g=p["".concat(i,".").concat(m)]||p[m]||c[m]||l;return r?a.createElement(g,o(o({ref:n},s),{},{components:r})):a.createElement(g,o({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=p;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d.mdxType="string"==typeof e?e:t,o[1]=d;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7044:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var a=r(5773),t=r(808),l=(r(7378),r(5318)),o=["components"],d={slug:"/general"},i="General",u={unversionedId:"auto-generated/general",id:"auto-generated/general",title:"General",description:"`rand`",source:"@site/docs/auto-generated/general.mdx",sourceDirName:"auto-generated",slug:"/general",permalink:"/falso/docs/general",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/auto-generated/general.mdx",tags:[],version:"current",frontMatter:{slug:"/general"},sidebar:"falso",previous:{title:"Food",permalink:"/falso/docs/food"},next:{title:"Git",permalink:"/falso/docs/git"}},s=[{value:"<code>rand</code>",id:"rand",children:[],level:3},{value:"<code>randBoolean</code>",id:"randboolean",children:[],level:3},{value:"<code>randFloat</code>",id:"randfloat",children:[],level:3},{value:"<code>randImg</code>",id:"randimg",children:[],level:3},{value:"<code>randNumber</code>",id:"randnumber",children:[],level:3},{value:"<code>randPriority</code>",id:"randpriority",children:[],level:3},{value:"<code>randSequence</code>",id:"randsequence",children:[],level:3},{value:"<code>randShape</code>",id:"randshape",children:[],level:3},{value:"<code>randStatus</code>",id:"randstatus",children:[],level:3},{value:"<code>randSvg</code>",id:"randsvg",children:[],level:3},{value:"<code>randUuid</code>",id:"randuuid",children:[],level:3},{value:"<code>random</code>",id:"random",children:[],level:3},{value:"<code>seed</code>",id:"seed",children:[],level:3}],c={toc:s};function p(e){var n=e.components,r=(0,t.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"general"},"General"),(0,l.kt)("h3",{id:"rand"},(0,l.kt)("inlineCode",{parentName:"h3"},"rand")),(0,l.kt)("p",null,"Get a random item from array."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { rand } from '@ngneat/falso';\n\nrand([1, 2, 3])\nrand([1, 2, 3], { length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => rand([1,2,3])}/>;\n}\n")),(0,l.kt)("h3",{id:"randboolean"},(0,l.kt)("inlineCode",{parentName:"h3"},"randBoolean")),(0,l.kt)("p",null,"Generate a random boolean."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randBoolean } from '@ngneat/falso';\n\nrandBoolean()\nrandBoolean({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randBoolean().toString()}/>;\n}\n")),(0,l.kt)("h3",{id:"randfloat"},(0,l.kt)("inlineCode",{parentName:"h3"},"randFloat")),(0,l.kt)("p",null,"Generate a random random float."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFloat } from '@ngneat/falso';\n\nrandFloat()\nrandFloat({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randFloat()}/>;\n}\n")),(0,l.kt)("h3",{id:"randimg"},(0,l.kt)("inlineCode",{parentName:"h3"},"randImg")),(0,l.kt)("p",null,"Generate a random img."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randImg } from '@ngneat/falso';\n\nrandImg()\nrandImg({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randImg()}/>;\n}\n")),(0,l.kt)("h3",{id:"randnumber"},(0,l.kt)("inlineCode",{parentName:"h3"},"randNumber")),(0,l.kt)("p",null,"Generate a random random number."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randNumber } from '@ngneat/falso';\n\nrandNumber()\nrandNumber({ length: 10 })\nrandNumber({ min: 10, max: 1000 }) // default is 'min': 0, 'max': 999_999\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randNumber()}/>;\n}\n")),(0,l.kt)("h3",{id:"randpriority"},(0,l.kt)("inlineCode",{parentName:"h3"},"randPriority")),(0,l.kt)("p",null,"Generate a random priority."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPriority } from '@ngneat/falso';\n\nrandPriority()\nrandPriority({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randPriority()}/>;\n}\n")),(0,l.kt)("h3",{id:"randsequence"},(0,l.kt)("inlineCode",{parentName:"h3"},"randSequence")),(0,l.kt)("p",null,"Generate a random random sequence."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSequence } from '@ngneat/falso';\n\nrandSequence()\nrandSequence({ size: 10 })\nrandSequence({ chars: 'aAbBcC@#' })\nrandSequence({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSequence()}/>;\n}\n")),(0,l.kt)("h3",{id:"randshape"},(0,l.kt)("inlineCode",{parentName:"h3"},"randShape")),(0,l.kt)("p",null,"Generate a random shape."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randShape } from '@ngneat/falso';\n\nrandShape()\nrandShape({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randShape()}/>;\n}\n")),(0,l.kt)("h3",{id:"randstatus"},(0,l.kt)("inlineCode",{parentName:"h3"},"randStatus")),(0,l.kt)("p",null,"Generate a random status."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randStatus } from '@ngneat/falso';\n\nrandStatus()\nrandStatus({ type: 'User Story' })\nrandStatus({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randStatus()}/>;\n}\n")),(0,l.kt)("h3",{id:"randsvg"},(0,l.kt)("inlineCode",{parentName:"h3"},"randSvg")),(0,l.kt)("p",null,"Generate a random svg."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSvg } from '@ngneat/falso';\n\nrandSvg()\nrandSvg({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSvg()}/>;\n}\n")),(0,l.kt)("h3",{id:"randuuid"},(0,l.kt)("inlineCode",{parentName:"h3"},"randUuid")),(0,l.kt)("p",null,"Generate a random random uuid."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randUuid } from '@ngneat/falso';\n\nrandUuid()\nrandUuid({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randUuid()}/>;\n}\n")),(0,l.kt)("h3",{id:"random"},(0,l.kt)("inlineCode",{parentName:"h3"},"random")),(0,l.kt)("p",null,"Create a seed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { random } from '@ngneat/falso';\n\nrandom()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => random()}/>;\n}\n")),(0,l.kt)("h3",{id:"seed"},(0,l.kt)("inlineCode",{parentName:"h3"},"seed")),(0,l.kt)("p",null,"Sets and Resets random seed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { seed } from '@ngneat/falso';\n\nseed()\nseed('some-constant-seed')\n")))}p.isMDXComponent=!0}}]);