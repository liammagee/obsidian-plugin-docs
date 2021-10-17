"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[6972],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87669:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],i={},s="ToggleComponent",c={unversionedId:"api/classes/ToggleComponent",id:"api/classes/ToggleComponent",isDocsHomePage:!1,title:"ToggleComponent",description:"Extends ValueComponent",source:"@site/docs/api/classes/ToggleComponent.md",sourceDirName:"api/classes",slug:"/api/classes/ToggleComponent",permalink:"/obsidian-plugin-docs/api/classes/ToggleComponent",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/ToggleComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"TextFileView",permalink:"/obsidian-plugin-docs/api/classes/TextFileView"},next:{title:"ValueComponent",permalink:"/obsidian-plugin-docs/api/classes/ValueComponent"}},p=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"toggleEl",id:"toggleel",children:[]}]},{value:"Methods",id:"methods",children:[{value:"setDisabled",id:"setdisabled",children:[]},{value:"getValue",id:"getvalue",children:[]},{value:"setValue",id:"setvalue",children:[]},{value:"setTooltip",id:"settooltip",children:[]},{value:"onClick",id:"onclick",children:[]},{value:"onChange",id:"onchange",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"togglecomponent"},"ToggleComponent"),(0,a.kt)("p",null,"Extends ",(0,a.kt)("inlineCode",{parentName:"p"},"ValueComponent<boolean>")),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(containerEl: HTMLElement);\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"toggleel"},"toggleEl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"toggleEl: HTMLElement\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"setdisabled"},"setDisabled"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setDisabled(disabled: boolean): this;\n")),(0,a.kt)("h3",{id:"getvalue"},"getValue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"getValue(): boolean;\n")),(0,a.kt)("h3",{id:"setvalue"},"setValue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setValue(on: boolean): this;\n")),(0,a.kt)("h3",{id:"settooltip"},"setTooltip"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setTooltip(tooltip: string): this;\n")),(0,a.kt)("h3",{id:"onclick"},"onClick"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"onClick(): void;\n")),(0,a.kt)("h3",{id:"onchange"},"onChange"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"onChange(callback: (value: boolean) => any): this;\n")))}d.isMDXComponent=!0}}]);