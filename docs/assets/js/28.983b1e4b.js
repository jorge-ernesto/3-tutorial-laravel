(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{307:function(a,t,s){"use strict";s.r(t);var e=s(14),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"factorias-y-faker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#factorias-y-faker"}},[a._v("#")]),a._v(" Factorías y Faker")]),a._v(" "),t("p",[a._v("Podemos llenar de forma aleatoria nuestra base de datos, para esto podemos mezclar las "),t("a",{attrs:{href:"https://laravel.com/docs/5.8/database-testing#generating-factories",target:"_blank",rel:"noopener noreferrer"}},[a._v("factorías"),t("OutboundLink")],1),a._v(" con "),t("a",{attrs:{href:"https://github.com/fzaninotto/Faker",target:"_blank",rel:"noopener noreferrer"}},[a._v("Faker de PHP"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("Si en nuestro seeder del ejemplo anterior (bases de datos relacionales) agregamos:")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Recuerda importar la clase User")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("factory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[a._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Y ahora ejecutas nuevamente los seeder:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("php artisan migrate:fresh --seed\n")])])]),t("p",[a._v("Veras que un tu base de datos se crearon registros de usuarios aleatorios.")]),a._v(" "),t("h2",{attrs:{id:"crear-factory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crear-factory"}},[a._v("#")]),a._v(" Crear Factory")]),a._v(" "),t("p",[a._v("Para crear una nueva factoria y relacionarla con un modelo podemos utilizar el siguiente comando:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("php artisan make:factory CategoriaFactory --model=Categoria\n")])])]),t("p",[a._v("Abrimos el archivo en cuestión y podemos agregar lo siguiente:")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$factory")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("define")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[a._v("Categoria")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[a._v("Faker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$faker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'nombre'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("name")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Ahora en nuestro seeder podemos reemplazar las categorías estáticas por algunas aleatorias:")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("factory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[a._v("Categoria")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Ejecutamos nuevamente: "),t("code",[a._v("php artisan migrate:fresh --seed")]),a._v(" y revisamos nuestra base de datos.")])])}),[],!1,null,null,null);t.default=r.exports}}]);