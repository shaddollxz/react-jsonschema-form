"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[209],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[p]="string"==typeof e?e:r,o[1]=m;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5236:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={},o="Arrays",m={unversionedId:"usage/arrays",id:"usage/arrays",title:"Arrays",description:"Arrays are defined with a type equal to array, and array items' schemas are specified in the items keyword.",source:"@site/docs/usage/arrays.md",sourceDirName:"usage",slug:"/usage/arrays",permalink:"/react-jsonschema-form/docs/usage/arrays",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/usage/arrays.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Objects",permalink:"/react-jsonschema-form/docs/usage/objects"},next:{title:"Schema definitions and references",permalink:"/react-jsonschema-form/docs/usage/definitions"}},s={},l=[{value:"Arrays of a single field",id:"arrays-of-a-single-field",level:2},{value:"Arrays of objects",id:"arrays-of-objects",level:2},{value:"uiSchema for array items",id:"uischema-for-array-items",level:2},{value:"The <code>additionalItems</code> keyword",id:"the-additionalitems-keyword",level:2},{value:"Array item uiSchema options",id:"array-item-uischema-options",level:2},{value:"<code>orderable</code> option",id:"orderable-option",level:3},{value:"<code>addable</code> option",id:"addable-option",level:3},{value:"<code>copyable</code> option",id:"copyable-option",level:3},{value:"<code>removable</code> option",id:"removable-option",level:3},{value:"Multiple-choice list",id:"multiple-choice-list",level:2},{value:"Custom widgets",id:"custom-widgets",level:2},{value:"Specifying the minimum or maximum number of items",id:"specifying-the-minimum-or-maximum-number-of-items",level:2},{value:"Inline checkboxes",id:"inline-checkboxes",level:2}],c={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arrays"},"Arrays"),(0,r.kt)("p",null,"Arrays are defined with a type equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),", and array items' schemas are specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," keyword."),(0,r.kt)("h2",{id:"arrays-of-a-single-field"},"Arrays of a single field"),(0,r.kt)("p",null,"Arrays of a single field type can be specified as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  items: {\n    type: 'string',\n  },\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,r.kt)("h2",{id:"arrays-of-objects"},"Arrays of objects"),(0,r.kt)("p",null,"Arrays of objects can be specified as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      name: {\n        type: 'string',\n      },\n    },\n  },\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,r.kt)("h2",{id:"uischema-for-array-items"},"uiSchema for array items"),(0,r.kt)("p",null,"To specify a uiSchema that applies to array items, specify the uiSchema value within the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  items: {\n    type: 'string',\n  },\n};\n\nconst uiSchema = {\n  items: {\n    'ui:widget': 'textarea',\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,r.kt)("h2",{id:"the-additionalitems-keyword"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"additionalItems")," keyword"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalItems")," keyword allows the user to add additional items of a given schema. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  items: {\n    type: 'string',\n  },\n  additionalItems: {\n    type: 'boolean',\n  },\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,r.kt)("h2",{id:"array-item-uischema-options"},"Array item uiSchema options"),(0,r.kt)("p",null,"Any of these options can be set globally if they are contained within the ",(0,r.kt)("inlineCode",{parentName:"p"},"ui:globalOptions")," block.\nThey can also be overridden on a per-field basis inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"ui:options")," block as shown below."),(0,r.kt)("h3",{id:"orderable-option"},(0,r.kt)("inlineCode",{parentName:"h3"},"orderable")," option"),(0,r.kt)("p",null,"Array items are orderable by default, and react-jsonschema-form renders move up/down buttons alongside them. The uiSchema ",(0,r.kt)("inlineCode",{parentName:"p"},"orderable")," options allows you to disable ordering:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  items: {\n    type: 'string',\n  },\n};\n\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    orderable: false,\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,r.kt)("h3",{id:"addable-option"},(0,r.kt)("inlineCode",{parentName:"h3"},"addable")," option"),(0,r.kt)("p",null,"If either ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalItems")," contains a schema object, an add button for new items is shown by default. You can turn this off with the ",(0,r.kt)("inlineCode",{parentName:"p"},"addable")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"uiSchema"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  items: {\n    type: 'string',\n  },\n};\n\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    addable: false,\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,r.kt)("h3",{id:"copyable-option"},(0,r.kt)("inlineCode",{parentName:"h3"},"copyable")," option"),(0,r.kt)("p",null,"A copy button is ",(0,r.kt)("strong",{parentName:"p"},"NOT")," shown by default for an item if ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," contains a schema object, or the item is an ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalItems")," instance.\nYou can turn this ",(0,r.kt)("strong",{parentName:"p"},"ON")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"copyable")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"uiSchema"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  items: {\n    type: 'string',\n  },\n};\n\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    copyable: true,\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,r.kt)("h3",{id:"removable-option"},(0,r.kt)("inlineCode",{parentName:"h3"},"removable")," option"),(0,r.kt)("p",null,"A remove button is shown by default for an item if ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," contains a schema object, or the item is an ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalItems")," instance. You can turn this off with the ",(0,r.kt)("inlineCode",{parentName:"p"},"removable")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"uiSchema"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  items: {\n    type: 'string',\n  },\n};\n\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    removable: false,\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,r.kt)("h2",{id:"multiple-choice-list"},"Multiple-choice list"),(0,r.kt)("p",null,"The default behavior for array fields is a list of text inputs with add/remove buttons. There are two alternative widgets for picking multiple elements from a list of choices. Typically, this applies when a schema has an ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," list for the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," property of an ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," field, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"uniqueItems")," property set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  title: 'A multiple-choice list',\n  items: {\n    type: 'string',\n    enum: ['foo', 'bar', 'fuzz', 'qux'],\n  },\n  uniqueItems: true,\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,r.kt)("p",null,"By default, this will render a multiple select box. If you prefer a list of checkboxes, just set the uiSchema ",(0,r.kt)("inlineCode",{parentName:"p"},"ui:widget")," directive to ",(0,r.kt)("inlineCode",{parentName:"p"},"checkboxes")," for that field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  title: 'A multiple-choice list',\n  items: {\n    type: 'string',\n    enum: ['foo', 'bar', 'fuzz', 'qux'],\n  },\n  uniqueItems: true,\n};\n\nconst uiSchema: UiSchema = {\n  'ui:widget': 'checkboxes',\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,r.kt)("h2",{id:"custom-widgets"},"Custom widgets"),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-templates#arrayfieldtemplate"},"ArrayFieldTemplate")," you use your own widget by providing it to the uiSchema with the property of ",(0,r.kt)("inlineCode",{parentName:"p"},"ui:widget"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst CustomSelectComponent = (props) => {\n  return (\n    <select>\n      {props.value.map((item, index) => (\n        <option key={index} id='custom-select'>\n          {item}\n        </option>\n      ))}\n    </select>\n  );\n};\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  title: 'A multiple-choice list',\n  items: {\n    type: 'string',\n  },\n};\n\nconst uiSchema: UiSchema = {\n  'ui:widget': 'CustomSelect',\n};\n\nconst widgets = {\n  CustomSelect: CustomSelectComponent,\n};\n\nrender(\n  <Form schema={schema} uiSchema={uiSchema} widgets={widgets} validator={validator} />,\n  document.getElementById('app')\n);\n")),(0,r.kt)("h2",{id:"specifying-the-minimum-or-maximum-number-of-items"},"Specifying the minimum or maximum number of items"),(0,r.kt)("p",null,"Note that when an array property is marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"required"),", an empty array is considered valid. If the array needs to be populated, you can specify the minimum number of items using the ",(0,r.kt)("inlineCode",{parentName:"p"},"minItems")," property."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  minItems: 2,\n  title: 'A multiple-choice list',\n  items: {\n    type: 'string',\n    enum: ['foo', 'bar', 'fuzz', 'qux'],\n  },\n  uniqueItems: true,\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,r.kt)("p",null,"You can also specify the maximum number of items in an array using the ",(0,r.kt)("inlineCode",{parentName:"p"},"maxItems")," property."),(0,r.kt)("h2",{id:"inline-checkboxes"},"Inline checkboxes"),(0,r.kt)("p",null,"By default, checkboxes are stacked. If you prefer them inline, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"inline")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'array',\n  minItems: 2,\n  title: 'A multiple-choice list',\n  items: {\n    type: 'string',\n    enum: ['foo', 'bar', 'fuzz', 'qux'],\n  },\n  uniqueItems: true,\n};\n\nconst uiSchema: UiSchema = {\n  'ui:widget': 'checkboxes',\n  'ui:options': {\n    inline: true,\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")))}p.isMDXComponent=!0}}]);