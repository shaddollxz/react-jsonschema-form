"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[1584],{3636:(e,n,a)=>{a.d(n,{Iu:()=>m,yg:()=>u});var t=a(5668);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},m=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,u=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return a?t.createElement(u,s(s({ref:n},m),{},{components:a})):t.createElement(u,s({ref:n},m))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1356:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=a(5307),r=(a(5668),a(3636));const o={},s="oneOf, anyOf, and allOf",l={unversionedId:"json-schema/oneof",id:"json-schema/oneof",title:"oneOf, anyOf, and allOf",description:"react-jsonschema-form supports custom widgets for oneOf, anyOf, and allOf.",source:"@site/docs/json-schema/oneof.md",sourceDirName:"json-schema",slug:"/json-schema/oneof",permalink:"/react-jsonschema-form/docs/json-schema/oneof",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/json-schema/oneof.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Objects",permalink:"/react-jsonschema-form/docs/json-schema/objects"},next:{title:"Single fields",permalink:"/react-jsonschema-form/docs/json-schema/single"}},i={},c=[{value:"oneOf",id:"oneof",level:2},{value:"anyOf",id:"anyof",level:2},{value:"allOf",id:"allof",level:2}],m={toc:c},p="wrapper";function f(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.c)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"oneof-anyof-and-allof"},"oneOf, anyOf, and allOf"),(0,r.yg)("p",null,"react-jsonschema-form supports custom widgets for oneOf, anyOf, and allOf."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A schema with ",(0,r.yg)("inlineCode",{parentName:"li"},"oneOf")," is valid if ",(0,r.yg)("em",{parentName:"li"},"exactly one")," of the subschemas is valid."),(0,r.yg)("li",{parentName:"ul"},"A schema with ",(0,r.yg)("inlineCode",{parentName:"li"},"anyOf")," is valid if ",(0,r.yg)("em",{parentName:"li"},"at least one")," of the subschemas is valid."),(0,r.yg)("li",{parentName:"ul"},"A schema with ",(0,r.yg)("inlineCode",{parentName:"li"},"allOf")," is valid if ",(0,r.yg)("em",{parentName:"li"},"all")," of the subschemas are valid.")),(0,r.yg)("h2",{id:"oneof"},"oneOf"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'object',\n  oneOf: [\n    {\n      properties: {\n        lorem: {\n          type: 'string',\n        },\n      },\n      required: ['lorem'],\n    },\n    {\n      properties: {\n        ipsum: {\n          type: 'string',\n        },\n      },\n      required: ['ipsum'],\n    },\n  ],\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,r.yg)("h2",{id:"anyof"},"anyOf"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'object',\n  anyOf: [\n    {\n      properties: {\n        lorem: {\n          type: 'string',\n        },\n      },\n      required: ['lorem'],\n    },\n    {\n      properties: {\n        lorem: {\n          type: 'string',\n        },\n        ipsum: {\n          type: 'string',\n        },\n      },\n    },\n  ],\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,r.yg)("h2",{id:"allof"},"allOf"),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"allOf")," is specified in a schema, react-jsonschema-form uses the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/mokkabonna/json-schema-merge-allof"},"json-schema-merge-allof")," library to merge the specified subschemas to create a combined subschema that is valid. For example, the below schema evaluates to a combined subschema of ",(0,r.yg)("inlineCode",{parentName:"p"},'{type: "boolean"}'),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  title: 'Field',\n  allOf: [\n    {\n      type: ['string', 'boolean'],\n    },\n    {\n      type: 'boolean',\n    },\n  ],\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")))}f.isMDXComponent=!0}}]);