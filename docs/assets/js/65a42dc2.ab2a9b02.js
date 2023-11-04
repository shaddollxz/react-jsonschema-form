"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[9139],{876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=c(t),u=a,h=l["".concat(d,".").concat(u)]||l[u]||m[u]||i;return t?r.createElement(h,s(s({ref:n},p),{},{components:t})):r.createElement(h,s({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[l]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(7896),a=(t(2784),t(876));const i={},s="Dependencies",o={unversionedId:"usage/dependencies",id:"version-3.2.1/usage/dependencies",title:"Dependencies",description:"react-jsonschema-form supports the dependencies keyword from an earlier draft of JSON Schema (note that this is not part of the latest JSON Schema spec, though). Dependencies can be used to create dynamic schemas that change fields based on what data is entered.",source:"@site/versioned_docs/version-3.2.1/usage/dependencies.md",sourceDirName:"usage",slug:"/usage/dependencies",permalink:"/react-jsonschema-form/docs/version-3.2.1/usage/dependencies",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/versioned_docs/version-3.2.1/usage/dependencies.md",tags:[],version:"3.2.1",frontMatter:{},sidebar:"docs",previous:{title:"Schema definitions and references",permalink:"/react-jsonschema-form/docs/version-3.2.1/usage/definitions"},next:{title:"Objects",permalink:"/react-jsonschema-form/docs/version-3.2.1/usage/objects"}},d={},c=[{value:"Property dependencies",id:"property-dependencies",level:2},{value:"Unidirectional",id:"unidirectional",level:3},{value:"Bidirectional",id:"bidirectional",level:3},{value:"Schema dependencies",id:"schema-dependencies",level:2},{value:"Conditional",id:"conditional",level:3},{value:"Dynamic",id:"dynamic",level:3}],p={toc:c},l="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"react-jsonschema-form supports the ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," keyword from an earlier draft of JSON Schema (note that this is not part of the latest JSON Schema spec, though). Dependencies can be used to create dynamic schemas that change fields based on what data is entered."),(0,a.kt)("h2",{id:"property-dependencies"},"Property dependencies"),(0,a.kt)("p",null,"This library supports conditionally making fields required based on the presence of other fields."),(0,a.kt)("h3",{id:"unidirectional"},"Unidirectional"),(0,a.kt)("p",null,"In the following example the ",(0,a.kt)("inlineCode",{parentName:"p"},"billing_address")," field will be required if ",(0,a.kt)("inlineCode",{parentName:"p"},"credit_card")," is defined."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  "type": "object",\n\n  "properties": {\n    "name": { "type": "string" },\n    "credit_card": { "type": "number" },\n    "billing_address": { "type": "string" }\n  },\n\n  "required": ["name"],\n\n  "dependencies": {\n    "credit_card": ["billing_address"]\n  }\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,a.kt)("h3",{id:"bidirectional"},"Bidirectional"),(0,a.kt)("p",null,"In the following example the ",(0,a.kt)("inlineCode",{parentName:"p"},"billing_address")," field will be required if ",(0,a.kt)("inlineCode",{parentName:"p"},"credit_card")," is defined and the ",(0,a.kt)("inlineCode",{parentName:"p"},"credit_card"),"\nfield will be required if ",(0,a.kt)("inlineCode",{parentName:"p"},"billing_address")," is defined, making them both required if either is defined."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  "type": "object",\n\n  "properties": {\n    "name": { "type": "string" },\n    "credit_card": { "type": "number" },\n    "billing_address": { "type": "string" }\n  },\n\n  "required": ["name"],\n\n  "dependencies": {\n    "credit_card": ["billing_address"],\n    "billing_address": ["credit_card"]\n  }\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(Sample schemas courtesy of the ",(0,a.kt)("a",{parentName:"em",href:"https://spacetelescope.github.io/understanding-json-schema/reference/object.html#property-dependencies"},"Space Telescope Science Institute"),")")),(0,a.kt)("h2",{id:"schema-dependencies"},"Schema dependencies"),(0,a.kt)("p",null,"This library also supports modifying portions of a schema based on form data."),(0,a.kt)("h3",{id:"conditional"},"Conditional"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  "type": "object",\n\n  "properties": {\n    "name": { "type": "string" },\n    "credit_card": { "type": "number" }\n  },\n\n  "required": ["name"],\n\n  "dependencies": {\n    "credit_card": {\n      "properties": {\n        "billing_address": { "type": "string" }\n      },\n      "required": ["billing_address"]\n    }\n  }\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,a.kt)("p",null,"In this example the ",(0,a.kt)("inlineCode",{parentName:"p"},"billing_address")," field will be displayed in the form if ",(0,a.kt)("inlineCode",{parentName:"p"},"credit_card")," is defined."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(Sample schemas courtesy of the ",(0,a.kt)("a",{parentName:"em",href:"https://spacetelescope.github.io/understanding-json-schema/reference/object.html#schema-dependencies"},"Space Telescope Science Institute"),")")),(0,a.kt)("h3",{id:"dynamic"},"Dynamic"),(0,a.kt)("p",null,"The JSON Schema standard says that the dependency is triggered if the property is present. However, sometimes it's useful to have more sophisticated rules guiding the application of the dependency. For example, maybe you have three possible values for a field, and each one should lead to adding a different question. For this, we support a very restricted use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"oneOf")," keyword."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "Do you have any pets?": {\n      "type": "string",\n      "enum": [\n        "No",\n        "Yes: One",\n        "Yes: More than one"\n      ],\n      "default": "No"\n    }\n  },\n  "required": [\n    "Do you have any pets?"\n  ],\n  "dependencies": {\n    "Do you have any pets?": {\n      "oneOf": [\n        {\n          "properties": {\n            "Do you have any pets?": {\n              "enum": [\n                "No"\n              ]\n            }\n          }\n        },\n        {\n          "properties": {\n            "Do you have any pets?": {\n              "enum": [\n                "Yes: One"\n              ]\n            },\n            "How old is your pet?": {\n              "type": "number"\n            }\n          },\n          "required": [\n            "How old is your pet?"\n          ]\n        },\n        {\n          "properties": {\n            "Do you have any pets?": {\n              "enum": [\n                "Yes: More than one"\n              ]\n            },\n            "Do you want to get rid of any?": {\n              "type": "boolean"\n            }\n          },\n          "required": [\n            "Do you want to get rid of any?"\n          ]\n        }\n      ]\n    }\n  }\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,a.kt)("p",null,"In this example the user is prompted with different follow-up questions dynamically based on their answer to the first question."),(0,a.kt)("p",null,'In these examples, the "Do you have any pets?" question is validated against the corresponding property in each schema in the ',(0,a.kt)("inlineCode",{parentName:"p"},"oneOf")," array. If exactly one matches, the rest of that schema is merged with the existing schema."))}m.isMDXComponent=!0}}]);