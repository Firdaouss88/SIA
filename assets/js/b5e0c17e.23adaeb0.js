"use strict";(self.webpackChunksia_doc=self.webpackChunksia_doc||[]).push([[4672],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(t),m=s,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var i=2;i<r;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85079:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var a=t(87462),s=t(63366),r=(t(67294),t(3905)),o=["components"],l={},u=void 0,i={unversionedId:"Formation PBI/801300/Format_Dax_DA-Introduction-Langage-DAX",id:"Formation PBI/801300/Format_Dax_DA-Introduction-Langage-DAX",title:"Format_Dax_DA-Introduction-Langage-DAX",description:"Introduction DAX",source:"@site/docs/80-Formation PBI/801300/801300_Format_Dax_DA-Introduction-Langage-DAX.md",sourceDirName:"80-Formation PBI/801300",slug:"/Formation PBI/801300/Format_Dax_DA-Introduction-Langage-DAX",permalink:"/docs/Formation PBI/801300/Format_Dax_DA-Introduction-Langage-DAX",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/80-Formation PBI/801300/801300_Format_Dax_DA-Introduction-Langage-DAX.md",tags:[],version:"current",sidebarPosition:801300,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Format_Dax_DA-Fonctions-de-table",permalink:"/docs/Formation PBI/801300/Format_Dax_DA-Fonctions-de-table"},next:{title:"Format_Dax_Dax avanc\xe9",permalink:"/docs/Formation PBI/801300/Format_Dax_Dax avanc\xe9"}},c={},p=[{value:"Introduction DAX",id:"introduction-dax",level:2},{value:"C\u2019est quoi DAX ?",id:"cest-quoi-dax-",level:3},{value:"Les diff\xe9rents types de donn\xe9es",id:"les-diff\xe9rents-types-de-donn\xe9es",level:3},{value:"Les colonnes calcul\xe9es",id:"les-colonnes-calcul\xe9es",level:3},{value:"Mesures",id:"mesures",level:3},{value:"Les fonctions d&#39;agr\xe9gation",id:"les-fonctions-dagr\xe9gation",level:3},{value:"Les valeurs de comptage (Counting values)",id:"les-valeurs-de-comptage-counting-values",level:3},{value:"Les fonctions conditionnelles",id:"les-fonctions-conditionnelles",level:3},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:3},{value:"Utilisation des variables",id:"utilisation-des-variables",level:3},{value:"Les fonctions math\xe9matiques",id:"les-fonctions-math\xe9matiques",level:3},{value:"Les fonctions relationnelles",id:"les-fonctions-relationnelles",level:3}],d={toc:p};function m(e){var n=e.components,t=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-au-langage-dax-avanc\xe9"},"Introduction au langage DAX Avanc\xe9"),(0,r.kt)("h2",{id:"introduction-dax"},"Introduction DAX"),(0,r.kt)("p",null,"Dans cette formation, vous allez avoir une id\xe9e sur la syntaxe du langage DAX, la diff\xe9rence entre une colonne calcul\xe9e et une mesure (\xe9galement appel\xe9e Champ calcul\xe9, dans la terminologie Excel), et les fonctions les plus couramment utilis\xe9es dans DAX. Vous apprendrez \xe9galement la syntaxe des variables , qui ont \xe9t\xe9 introduits dans DAX pour Power BI Desktop, Excel 2016 et Analysis Services 2016."),(0,r.kt)("h3",{id:"cest-quoi-dax-"},"C\u2019est quoi DAX ?"),(0,r.kt)("p",null,"Le langage DAX (Data Analysis Expression) est un langage d\u2019analyse de donn\xe9es tr\xe8s puissant. Il est utilis\xe9 par Power Pivot dans Excel, Power BI Desktop et SSAS (SQL Sever Analysis Services) tabulaire. Il s\u2019agit d\u2019un langage\ninspir\xe9 en partie des fonctions Excel mais adapt\xe9 \xe0 la r\xe9alit\xe9 d\u2019analyse de bases de donn\xe9es. Il permet notamment la cr\xe9ation d\u2019indicateurs sur mesure r\xe9pondant aux probl\xe9matiques des utilisateurs m\xe9tiers."),(0,r.kt)("h3",{id:"les-diff\xe9rents-types-de-donn\xe9es"},"Les diff\xe9rents types de donn\xe9es"),(0,r.kt)("p",null,"Quel que soit le type de donn\xe9es que vous avez dans la source, quand vous chargez des donn\xe9es dans Power bi, elles sont converties dans l'ensemble des donn\xe9es types disponibles dans Dax .\nIl y a plusieurs types de donn\xe9es:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type de donn\xe9es"),(0,r.kt)("th",{parentName:"tr",align:"left"},"D\xe9scription"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integer (64 bits)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Les entiers sont toujours stock\xe9s sous forme d'entier 64 bits.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal (floating point)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nombre flottante avec n'importe quel nombre de d\xe9cimales .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Currency (Money)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"la monnaie sp\xe9cifiquement pour les devises vous avez le type de donn\xe9es de devise \xe9galement connu sous le type de donn\xe9es d'argent gardez \xe0 l'esprit devises sont stock\xe9es sous forme d'entier .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date (DateTime)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Les donn\xe9es DateTime sont stock\xe9es dans Dax comme valeur \xe0 virgule flottante o\xf9 la partie enti\xe8re repr\xe9sente le nombre de jours apr\xe8s le 30 d\xe9cembre 1899 , par cons\xe9quent 1en tant que date repr\xe9sente le 31 d\xe9cembre 1899, 2 est le 1 janvier 1900 .",(0,r.kt)("br",null),"Vous pouvez donc en ajouter un \xe0 une date et vous Obtenez le lendemain au soustraire un d'un jour et vous obtenez la veille.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Quelle est la diff\xe9rence entre modifier le type de donn\xe9es d'une colonne et changer la visualisation de format d'une colonne ? :")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Si vous modifiez le type de donn\xe9es d'une colonne vous changez la mani\xe8re dont les donn\xe9es sont repr\xe9sent\xe9es et stock\xe9es dans le mod\xe8le .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Si vous changez la cha\xeene de format des donn\xe9es , elles seront toujours conserv\xe9es mais vous allez les montrer \xe0 l'utilisateur final seulement avec format que vous avez choisi ."),(0,r.kt)("p",{parentName:"li"},"Donc la diff\xe9rence est de savoir si vous voulez stocker des donn\xe9es d'une mani\xe8re ou vous voulez juste les montrer d'une certaine format.")))),(0,r.kt)("h3",{id:"les-colonnes-calcul\xe9es"},"Les colonnes calcul\xe9es"),(0,r.kt)("p",null,"Pour apprendre le langage, la premi\xe8re chose \xe0 apprendre et de savoir cr\xe9er une colonne calcul\xe9e. Une colonne calcul\xe9e est fondamentalement un calcul que vous faites \xe0 l'int\xe9rieur de votre table, afin d'enrichir votre mod\xe8le de donn\xe9es.\nExemple: DiffDate est la date de livraison moins la date de commande ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DiffDate = Sales[Delivery Date] - Sales[Order Date]\n")),(0,r.kt)("p",null,"une fois vous appuyez sur ",(0,r.kt)("strong",{parentName:"p"},"Entr\xe9e")," le moteur calculera la valeur de l'expression pour chaque ligne de votre table et ajoutera le r\xe9sultat \xe0 la fin.\nExemple : Calculer l'\xe2ge d'un client avec une simple \xe9quation, on prend l'ann\xe9e' d'aujourd'hui moins l'ann\xe9e de la date de naissance du client.\n",(0,r.kt)("strong",{parentName:"p"},"\xc2ge= YEAR(TODAY()) - YEAR(Customer","[Birth date]",")"),"\nUne fois vous appuyez sur Entr\xe9e vous aurez une colonne \xc2ge qui est ajout\xe9e \xe0 la fin de votre table et \xe0 chaque actualisation des donn\xe9es, le contenu sera recalcul\xe9 en stockant dans la table des clients la colonne \xe2ge de client."),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lorsque vous \xe9crivez une expression Dax qui fait r\xe9f\xe9rence \xe0 des valeurs dont le cas d'une colonne calcul\xe9e, elle est toujours ex\xe9cut\xe9e pour une ligne et le calcul se fait ligne par ligne donc les informations sur quelle ligne doit \xeatre utilis\xe9 est implicitement d\xe9finie dans la colonne calcul\xe9e .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Quand vous cr\xe9ez une colonne calcul\xe9e , ce que vous faites ,c'est de changer votre mod\xe8le vous cr\xe9ez une nouvelle colonne qui est calcul\xe9 dans Dax et elle est stock\xe9e dans le cadre de votre table donc vous ne travaillez pas au niveau du rapport vous ne r\xe9sumez pas ceci valeur plus valeur mais ligne par ligne pour tous les lignes de votre table le calcul arrive et le r\xe9sultat est stock\xe9 dans votre mod\xe8le.Cela signifie que les colonnes calcul\xe9es utilisent de l'espace dans votre mod\xe8le .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Vous ne pouvez pas faire tout vos calculs avec des colonnes calcul\xe9es, les colonnes calcul\xe9es sont bien si vous faites des calculs lignes par ligne mais si vous avez besoin de faire des pourcentages alors ce qu'il faut faire est de cr\xe9er des mesures et non des colonnes calcul\xe9es.")))),(0,r.kt)("p",null,"La fa\xe7on dont nous r\xe9f\xe9ren\xe7ons les colonnes sont toujours \xe0 utiliser le nom de la table puis le nom de la colonne entre crochets. La syntaxe correcte serait le nom de la table entre guillemets simples puis le nom de la colonne entre crochets ",(0,r.kt)("strong",{parentName:"p"},"'TableName'","[ColumnName]"),".\nVous pouvez \xe9viter d'utiliser les guillemets simples si votre nom de table fait ne contient pas d'espace ou ne commence pas par un nombre ."),(0,r.kt)("h3",{id:"mesures"},"Mesures"),(0,r.kt)("p",null,"Une mesure et une expression Dax qui au lieu d'\xeatre calcul\xe9 ligne par ligne puis stock\xe9 dans la table il est calcul\xe9 au niveau du rapport.\nIl y'a une diff\xe9rence entre colonnes calcul\xe9es et les mesures, une colonne calcul\xe9e est calcul\xe9e rang\xe9e par rang\xe9e et stock\xe9e dans le mod\xe8le. Les mesures en revanche sont calcul\xe9es au moment de la requ\xeate, elles agr\xe8gent les valeurs et ensuite elles calculent le r\xe9sultat."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Colonne Calcul\xe9e : Line Margin = Sales[Quantity]  * (Sales[Net Price] - Sales[Unit Cost])\nMasure : Margin = SUM ( Sales[Line Margin] )\nMasure : MarginPerc = [Margin] / SUM(Sales[Line Amount])\n")),(0,r.kt)("p",null,"Ici la mesure Margin% va faire agr\xe9gation de Line Margin divis\xe9e sur agr\xe9gation de Line Amount.\nEn termes de Processeur et d'espace,les colonnes calcul\xe9es utilisent de l'espace \xe0 la fois sur le disque et la RAM  alors que les mesures utilisent uniquement le processeur, donc pour les bonnes pratiques on \xe9vite les colonnes calcul\xe9es et on essaie de tout calculer en utilisant des mesures."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"En tant que convention de nommage les mesures n'ont jamais de nom table devant eux , la raison est que nous devons \xeatre capables de distinguer entre une colonne et une mesure .Dans le code la norme  que tout le monde utilise est de ne jamais mettre le nom de la table devant mesure et toujours mettre le nom de la table devant les colonnes .\nVous devez essentiellement utiliser une colonne quand vous voulez \xeatre capable de trancher par quelque chose. Par exemple, si vous voulez classer les prix si vous voulez calculer l'\xe2ge d'un client ,dans ces cas une colonne calcul\xe9e est n\xe9cessaire. Dans d'autres sc\xe9narios une Mesure est votre meilleur option.")),(0,r.kt)("h3",{id:"les-fonctions-dagr\xe9gation"},"Les fonctions d'agr\xe9gation"),(0,r.kt)("p",null,"Les fonctions d'agr\xe9gation sont utiles \xe0 chaque fois que vous souhaitez agr\xe9ger des valeurs. Les fonctions les plus couramment utili\xe9es sont ",(0,r.kt)("strong",{parentName:"p"},"SUM")," (Somme), ",(0,r.kt)("strong",{parentName:"p"},"AVERAGE"),"(Moyenne), ",(0,r.kt)("strong",{parentName:"p"},"MIN")," (Minimum), ",(0,r.kt)("strong",{parentName:"p"},"MAX")," (Maximum)\nExemple : ",(0,r.kt)("strong",{parentName:"p"},"Sales Amount = SUM(Sales","[Line Amount]",")"),"\nLes fonctions d'agr\xe9gation ont deux limitations, la premi\xe8re c'est qu'elles fonctionnent que sur les chiffres et la deuxi\xe8me c'est qu'elles prennent une seule valeur (une seule colonne \xe0 calculer).\nPour cette raison , il existe des fonctions d'agr\xe9gations 'X' qui sont ",(0,r.kt)("strong",{parentName:"p"},"SUM X(),AVERAGE X(),MIN X(),MAX X()....")," qui s'appellent aussi des it\xe9rateurs.\nLa nature de ces it\xe9rateurs,au lieu de calculer uniquement un agr\xe9gat,la fonction va scanner une table et it\xe9rer ligne par ligne et calculer l'expression pour chaque ligne,par exemple: ",(0,r.kt)("strong",{parentName:"p"},"SUMX ( Sales, Sales ","[Price ]"," * Sales ","[Quantity]"," )"),".\nNous fournissons comme premi\xe8re param\xe8tre la table et le deuxi\xe8me param\xe8tre l'expression qui peut calculer les valeurs ligne par ligne de la table Sales."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Disons par exemple au lieu de d\xe9couper par cat\xe9gorie je veux analyser mes produits en les s\xe9parant en 2 grandes cat\xe9gories je veux avoir un produit pas cher et produit cher , un produit bon march\xe9 est tout produit dont le prix \xe9tait inf\xe9rieur \xe0 100$ et un produit cher a un prix plus \xe9lev\xe9 et je vais pouvoir trancher et voir le montant des ventes de produits bon march\xe9 contre les cher ,dans ce cas j'ai besoin d'utiliser une colonne parce que je veux calculer une cha\xeene qui sera utilis\xe9e pour trancher .\n",(0,r.kt)("strong",{parentName:"p"},"Price Level= if (\u2018Product\u2019 ","[Unit Price]"," > 100, \u2018\u2019EXPENCIVE\u2019\u2019, \u2018\u2019 CHEAP \u2018\u2019)"),"\nEt maintenant je peux utiliser cette colonne ",(0,r.kt)("strong",{parentName:"p"},"Price Level")," pour trancher et s\xe9parer les produits dont ces 2 cat\xe9gories.\nLa colonne ayant une petite cardinalit\xe9 est une tr\xe8s petite colonne et ne cr\xe9e aucun probl\xe8me .")),(0,r.kt)("h3",{id:"les-valeurs-de-comptage-counting-values"},"Les valeurs de comptage (Counting values)"),(0,r.kt)("p",null,"Il y a beaucoup d'agr\xe9gateurs ,pas seulement ",(0,r.kt)("strong",{parentName:"p"},"SUM")," et ",(0,r.kt)("strong",{parentName:"p"},"MIN"),". Par exemple, nous avons des agr\xe9gateurs qui compte des valeurs ,nous avons ",(0,r.kt)("strong",{parentName:"p"},"COUNT / COUNTA")," ils comptent n'importe quoi mais il ne compte pas les blancs et nous avons ",(0,r.kt)("strong",{parentName:"p"},"COUNTBLANK")," qui ne compte que des blancs et puis nous avons les agr\xe9gateurs les plus largement utilis\xe9s qui sont ",(0,r.kt)("strong",{parentName:"p"},"COUNTROWS")," (compte le nombre de lignes dans une table) et ",(0,r.kt)("strong",{parentName:"p"},"DISTINCTCOUNT")," (compte le nombre des valeurs distinctes d\u2019une colonne ). "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Dans le cas o\xf9 nous avons une colonne par exemple CustomerKey qui identifie le client qui a achet\xe9 un produit dans la table Ventes donc en calculant le nombre des ventes distinctes par client nous pouvons projeter cela comme:  ",(0,r.kt)("strong",{parentName:"p"},"# Customers = DISTINCTCOUNT ( sales ","[CustomerKey]"," )"),".\nCe type de calcul est d\xe9j\xe0 utile pour lui-m\xeame mais il pourrait aussi \xeatre utile pour calculer par exemple le montant moyen par transaction ou le montant moyen par client :\n",(0,r.kt)("strong",{parentName:"p"},"Sales by Customer = ","[Sales Amount]"," / ","[ # Customers]"))),(0,r.kt)("h3",{id:"les-fonctions-conditionnelles"},"Les fonctions conditionnelles"),(0,r.kt)("p",null,"il existe un ensemble de fonctions dans Dax qui sont utiles pour calculer la logique bool\xe9enne ,nous avons d\xe9j\xe0 utilis\xe9 ",(0,r.kt)("strong",{parentName:"p"},"IF")," , mais IF n'est qu'une partie de ses fonctions ,les fonctions sont ",(0,r.kt)("strong",{parentName:"p"},"AND"),", ",(0,r.kt)("strong",{parentName:"p"},"OR")," et ",(0,r.kt)("strong",{parentName:"p"},"NOT"),".\n",(0,r.kt)("strong",{parentName:"p"},"IF")," est une fonction pour v\xe9rifier une condition et ensuite fournir des r\xe9sultats diff\xe9rents.\n",(0,r.kt)("strong",{parentName:"p"},"AND"),", ",(0,r.kt)("strong",{parentName:"p"},"OR")," et ",(0,r.kt)("strong",{parentName:"p"},"NOT")," sont des fonctions bool\xe9ennes standard. Donc vous pouvez avoir 2 conditions que vous pouvez mettez dans un ",(0,r.kt)("strong",{parentName:"p"},"AND")," logique dans un ",(0,r.kt)("strong",{parentName:"p"},"OR")," logique ou utiliser une n\xe9gation bool\xe9enne."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"vous avez 2 fa\xe7ons d'\xe9crire ",(0,r.kt)("strong",{parentName:"p"},"AND")," et ",(0,r.kt)("strong",{parentName:"p"},"OR")," :\n",(0,r.kt)("strong",{parentName:"p"},"AND ( A, B ) = A && B"),"\n",(0,r.kt)("strong",{parentName:"p"},"OR ( A, B )= A || B"))),(0,r.kt)("p",null,"une fonction n'est utile que pour v\xe9rifier 2 conditions \xe0 la fois, par contre les op\xe9rateurs supportent plusieurs conditions \xe8 la fois comme :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Color Type =\nIF ( \n     \u2018Product\u2019[Color]= \u2018\u2019Black\u2019\u2019 || \u2018Product\u2019[Color]= \u2018\u2019Pink\u2019\u2019  || \u2018Product\u2019[Color]= \u2018\u2019White\u2019\u2019   ),\n    \u2018\u2019Trendy\u2019\u2019,\n    \u2018\u2019Boring\u2019\u2019\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Color Type =\nIF ( \n     \u2018Product\u2019[Color] IN {\u2018\u2019Black\u2019\u2019 , \u2018\u2019Pink\u2019\u2019  , \u2018\u2019White\u2019\u2019},\n    \u2018\u2019Trendy\u2019\u2019,\n    \u2018\u2019Boring\u2019\u2019\n)\n")),(0,r.kt)("p",null,"Il y a une autre fonction qui est un peu li\xe9e aux fonctions conditionnelles qui est la fonction ",(0,r.kt)("strong",{parentName:"p"},"SWITCH"),".\n",(0,r.kt)("strong",{parentName:"p"},"SWITCH")," est diff\xe9rent des autres fonctions, elle \xe9value une expression , donc le premier argument est une expression  la couleur du produit et puis la prochaine s\xe9rie des arguments \xe0 venir est sous forme de : le premier est la valeur de l'expression et le 2\xe8me est la valeur du r\xe9sultat ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Color Type =\nSWITCH (\n     \u2018Product\u2019[Size] ,\n     \u2018\u2019 S \u2019\u2019 , \u2018\u2019 Small \u2019\u2019,\n      \u2018\u2019 M \u2019\u2019  , \u2018\u2019 Medium\u2019\u2019, \n      \u2018\u2019 L \u2019\u2019 ,\u2018\u2019 Large \u2019\u2019,\n        \u2018\u2019 XL \u2019\u2019 ,\u2019\u2019 Extra Large\u2019\u2019,\n        \u2018\u2019 Other \u2019\u2019\n   )\n")),(0,r.kt)("p",null,"Il y a une mani\xe8re plus cr\xe9ative d'utiliser la fonction ",(0,r.kt)("strong",{parentName:"p"},"SWITCH"),", c'est quand tu veux \xe9crire des expressions complexes. Vous pouvez activer une valeur constante ,dans ce cas nous basculons sur ",(0,r.kt)("strong",{parentName:"p"},"TRUE ()")," le premier argument de ",(0,r.kt)("strong",{parentName:"p"},"SWITCH")," est donc toujours True et ensuite vous fournissez un ensemble de conditions ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DiscountPct  =\nSWITCH(\n      TRUE (),\n      Product [Size] = \u2018\u2019S \u2018\u2019 , 0.5 ,\n      AND ( Product [Size] = \u2018\u2019L \u2018\u2019 , Product [Price] < 100 ) , 0.2 ,\n     Product\u2019[Size] = \u2018\u2019 L \u2018\u2019 , 0.35 , \n     0\n )\n")),(0,r.kt)("p",null,"La premi\xe8re condition qui sera identique \xe0 True , cela signifie que la premi\xe8re condition qui vaut True produira le r\xe9sultat. Donc si la taille du produit est \xe9gal \xe0 S le r\xe9sultat est 0.5 si la taille du produit est \xe9gale \xe0 L et le prix est inf\xe9rieur \xe0 100 alors le r\xe9sultat et 0.2 sinon si la taille est \xe9gale \xe0 L le r\xe9sultat est 0.35 , sinon 0."),(0,r.kt)("h3",{id:"gestion-des-erreurs"},"Gestion des erreurs"),(0,r.kt)("p",null,"Votre code d'acc\xe8s peut contenir des erreurs .Il pourrait y avoir des erreurs de syntaxe comme dans le cas o\xf9 vous pouvez \xe9crire une expression comme celle-ci :  ",(0,r.kt)("strong",{parentName:"p"},"SUMX ( Sales, Sales ","[Quantity]"," )")," et  la quantit\xe9 vendue pourrait aussi bien \xeatre une cha\xeene et le moteur va essayer de faire la conversion ligne par ligne de la cha\xeene en un nombre si \xe0 un moment donn\xe9 ils \xe9chouent dans la transformation cela produira une erreur et vous ne voulez pas que cette erreur arrive \xe0 l'utilisateur final . Il est g\xe9n\xe9ralement pr\xe9f\xe9rable d' intercepter ce genre d'erreur et il y a une fonction de traitement ",(0,r.kt)("strong",{parentName:"p"},"ISERROR")," dans Dax , elle essaie de calculer une expression et selon que l'expression produit une erreur , ou non , renvoie vrai ou faux .\nIl existe une autre fonction ",(0,r.kt)("strong",{parentName:"p"},"IFERROR"),"  , cette fonction tente de calculer une expression en cas d'erreur alors il retourne le 2e argument qui sera la valeur par d\xe9faut ou la valeur alternative ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IFERROR( \n    Sales [ GrossMargin] / Sales [ Amount ] ,\n    BLANCK ()\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DIVIDE ( \n    Sales [ GrossMargin] ,\n     Sales [ Amount ] ,\n    0\n)\n")),(0,r.kt)("p",null,"Dans le cas de la division, pour \xe9viter toute erreur, on utilise la fonction ",(0,r.kt)("strong",{parentName:"p"},"DIVIDE")," si vous lui fournissez que deux arguments la 3\xe8me valeur par d\xe9faut est un blanc g\xe9n\xe9ralement vide et la valeur que vous voulez revenir au cas ou vous faites une division par 0."),(0,r.kt)("h3",{id:"utilisation-des-variables"},"Utilisation des variables"),(0,r.kt)("p",null,"Une fonctionnalit\xe9 extr\xeamement utile de Dax et celle des variables vous pouvez introduire variables dans vos formules afin de raccourcir votre code et le rendre plus lisible.\nLa syntaxe est assez simple vous introduisez une variable avec un mot-cl\xe9 ",(0,r.kt)("strong",{parentName:"p"},"VAR")," et vous devez  \xe9galement fournir la partie ",(0,r.kt)("strong",{parentName:"p"},"RETURN")," dans la partie Return vous pouvez utiliser les variables d\xe9finies dans la partie Var et \xe0 chaque fois que vous \xe9crivez le nom de la variable vous voulez dire la valeur de l'expression stock\xe9 dans la variable .\nLes variables sont utiles pour beaucoup de raisons les 2 plus convaincants et l\xe0 ",(0,r.kt)("strong",{parentName:"p"},"lisibilit\xe9")," et la ",(0,r.kt)("strong",{parentName:"p"},"performance"),"  . "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"VAR \n    TotalQuantity= SUM( Sales [Quantity] )\nRETURN\n    IF (\n        TotalQuantity > 1000 ,\n        TotalQuantity * 0,95 ,\n        TotalQuantity * 1,25\n)\n")),(0,r.kt)("p",null,"Dans cet exemple la variable ",(0,r.kt)("strong",{parentName:"p"},"TotalQuantity")," calcule la somme de la quantit\xe9 vendue et dans la partie Return, vous calculez si la quantit\xe9 totale est sup\xe9rieur \xe0 1000 alors vous faites la quantit\xe9 totale multipli\xe9 par 0,95 sinon vous la multipliez \xe0 1,25."),(0,r.kt)("h3",{id:"les-fonctions-math\xe9matiques"},"Les fonctions math\xe9matiques"),(0,r.kt)("p",null,"Dax offre \xe9galement un riche ensemble de fonctions qui fournissent des maths,arrondi, calcul de texte,calcul de date. "),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Les fonctions math\xe9matiques")," comprennent la valeur absolue  ",(0,r.kt)("strong",{parentName:"li"},"ABS")," affacturage ",(0,r.kt)("strong",{parentName:"li"},"FACT")," logarithme ",(0,r.kt)("strong",{parentName:"li"},"LOG")," les cautions de puissance ",(0,r.kt)("strong",{parentName:"li"},"QUOTIENT")," et d'autres fonctions qui font des calculs simples, ces derniers travaillent de la m\xeame mani\xe8re comme ils le font dans Excel. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Les fonctions d'arrondi")," font l'arrondi de la valeur donn\xe9 en param\xe8tre et elles retournent toujours une valeur d\xe9cimale:\n",(0,r.kt)("strong",{parentName:"li"},"FLOOR (Value, 0.01) "),(0,r.kt)("strong",{parentName:"li"},"ROUNDDOWN ( Value ,2 ) "),(0,r.kt)("strong",{parentName:"li"},"MROUND ( Value , 0.01) "),(0,r.kt)("strong",{parentName:"li"},"CEILING ( Value , 0.01)")),(0,r.kt)("li",{parentName:"ul"},"Casting Fonction, ces fonctions changent quel que soit le type de donn\xe9es que vous leur passez soit \xe0 un entier ou une monnaie, n'oubliez jamais que l'arrondissement n'est pas la m\xeame chose que le casting .\n",(0,r.kt)("strong",{parentName:"li"},"INT (Value)"),(0,r.kt)("strong",{parentName:"li"},"CURRENCY (Value)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Les fonctions de texte")," sont tr\xe8s similaires \xe0 leurs contreparties dans Excel vous pouvez concat\xe9ner des cha\xeenes vous pouvez trouver les occurrences d'une sous-cha\xeene en une cha\xeene vous pouvez les changer pour minuscule a majuscule comme :\n",(0,r.kt)("strong",{parentName:"li"},"CONCATENATE ,FIND , FIXED ,LEFT ,LOWER ,LEN ,REPLACE ,UPPER ,SUBTITUTE\u2026")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Les fonctions de date")," ce sont des fonctions qui prennent des dates comme param\xe8tre et ils peuvent extraire la fin d'un mois d'une date ou l'ann\xe9e d'une date ou vous renvoyez la date d'aujourd'hui ils font des calculs en plus sur des dates comme :\n",(0,r.kt)("strong",{parentName:"li"},"DATE,DATEVALUE,EOMONTH,HOUR,NOW,SECOND,TIMEVALUE,TODAY,WEEKDAY,YEAR,WEEKNUM\u2026")))),(0,r.kt)("h3",{id:"les-fonctions-relationnelles"},"Les fonctions relationnelles"),(0,r.kt)("p",null,"Il existe deux fonctions relationnelles ",(0,r.kt)("strong",{parentName:"p"},"RELATED")," et ",(0,r.kt)("strong",{parentName:"p"},"RELATEDTABLE")," elles sont utiles pour cr\xe9er des chaines de relations entre deux tables.\nDans chaque relation dans un mod\xe8le on a le c\xf4t\xe9 qui contient 1 et le c\xf4t\xe9 qui contient plusieurs ,d'un point graphique de vue Power bi montre ",(0,r.kt)("strong",{parentName:"p"},"1")," d'un c\xf4t\xe9 et ",(0,r.kt)("strong",{parentName:"p"},"*")," sur le c\xf4t\xe9 nombreux."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RELATED"),"  fonctionne du c\xf4t\xe9 multiples et vous donne acc\xe8s \xe0 colonne d'un c\xf4t\xe9 (1),donc vous pouvez merger vos donn\xe9es et stocker les dans le cas de sous-cat\xe9gories dans la table du produit en utilisant la fonction relationnelle RELATED .")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Subcategory = RELATED ( 'Product Subcategory' [ Subcategory] )\nCategory = RELATED ( 'Product Category' [ Category ])\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Quelle est la signification de ",(0,r.kt)("strong",{parentName:"p"},"One to Many")," ?",(0,r.kt)("br",{parentName:"p"}),"\n","pour une cat\xe9gorie il y a beaucoup de sous-cat\xe9gories pour une sous-cat\xe9gorie il y a beaucoup de produits mais \xe9tant donn\xe9 un produit \xe0 une seule sous-cat\xe9gorie et une seule cat\xe9gorie .")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RELATEDTABLE")," renvoie une table contenant toutes les lignes d'une table du c\xf4t\xe9 multiples qui ont une relation avec la ligne en cours sur la table sur laquelle on d\xe9finit la colonne o\xf9 nous \xe9crivons l'expression. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"Number of sales = COUNTROWS ( RELATEDTABLE  ( Sales ) )\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RELATEDTABLE")," ne renvoie que les lignes dans les ventes qui ont une relation avec la ligne en cours donc dans cet exemple ci dessus ,le r\xe9sultat contient toutes le nombre de ventes de la cat\xe9gorie donn\xe9e."))}m.isMDXComponent=!0}}]);