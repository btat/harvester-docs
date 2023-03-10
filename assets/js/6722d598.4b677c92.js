"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2943],{3905:(A,e,t)=>{t.d(e,{Zo:()=>g,kt:()=>h});var n=t(67294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var s=n.createContext({}),l=function(A){var e=n.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},g=function(A){var e=l(A.components);return n.createElement(s.Provider,{value:e},A.children)},I={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,s=A.parentName,g=o(A,["components","mdxType","originalType","parentName"]),p=l(t),h=a,d=p["".concat(s,".").concat(h)]||p[h]||I[h]||r;return t?n.createElement(d,i(i({ref:e},g),{},{components:t})):n.createElement(d,i({ref:e},g))}));function h(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,i=new Array(r);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=A,o.mdxType="string"==typeof A?A:a,i[1]=o;for(var l=2;l<r;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},11274:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>I,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const r={sidebar_position:2,sidebar_label:"ISO Installation",title:"ISO Installation",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],Description:"To get the Harvester ISO, download it from the Github releases. During the installation you can either choose to form a new cluster, or join the node to an existing cluster."},i=void 0,o={unversionedId:"install/iso-install",id:"version-v1.1/install/iso-install",title:"ISO Installation",description:"Installation Steps",source:"@site/versioned_docs/version-v1.1/install/iso-install.md",sourceDirName:"install",slug:"/install/iso-install",permalink:"/v1.1/install/iso-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/install/iso-install.md",tags:[],version:"v1.1",lastUpdatedAt:1675847856,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"ISO Installation",title:"ISO Installation",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],Description:"To get the Harvester ISO, download it from the Github releases. During the installation you can either choose to form a new cluster, or join the node to an existing cluster."},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/v1.1/install/requirements"},next:{title:"USB Installation",permalink:"/v1.1/install/usb-install"}},s={},l=[{value:"Installation Steps",id:"installation-steps",level:2},{value:"Known Issue",id:"known-issue",level:2},{value:"Installer may crash when using an older graphics card/monitor",id:"installer-may-crash-when-using-an-older-graphics-cardmonitor",level:3}],g={toc:l};function I(A){let{components:e,...r}=A;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation-steps"},"Installation Steps"),(0,a.kt)("p",null,"To get the Harvester ISO image, download it from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Github releases")," page."),(0,a.kt)("p",null,"During the installation you can either choose to form a new cluster, or join the node to an existing cluster."),(0,a.kt)("p",null,"Note: This ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/X0VIGZ_lExQ"},"video")," shows a quick overview of the ISO installation."),(0,a.kt)("div",{class:"text-center"},(0,a.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/X0VIGZ_lExQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Mount the Harvester ISO disk and boot the server by selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester Installer")," option.\n",(0,a.kt)("img",{alt:"iso-install.png",src:t(56414).Z,width:"2144",height:"1192"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose the installation mode by either creating a new Harvester cluster, or by joining an existing one."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Note: By default, the first node will be the management node of the cluster. When there are 3 nodes, the other 2 nodes added first are automatically promoted to management nodes to form an HA cluster."),(0,a.kt)("p",{parentName:"li"},"If you want to promote management nodes from different zones, you can add the node label ",(0,a.kt)("inlineCode",{parentName:"p"},"topology.kubernetes.io/zone")," in the ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration#oslabels"},"os.labels")," config by providing a URL of ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration"},"Harvester configuration")," on the customize the host step. In this case, at least three different zones are required.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose the installation device on which the Harvester cluster will be installed"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note: By default, Harvester uses ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/GUID_Partition_Table"},"GPT")," partitioning schema for both UEFI and BIOS. If you use the BIOS boot, then you will have the option to select ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Master_boot_record"},"MBR"),".\n",(0,a.kt)("img",{alt:"iso-install-disk.png",src:t(3003).Z,width:"2558",height:"1034"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We recommend choosing a separate disk to store VM data.\n",(0,a.kt)("img",{alt:"iso-install-disk.png",src:t(70146).Z,width:"2440",height:"846"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the hostname and select the network interface for the management network. By default, Harvester will create a bonded NIC named ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-bo"),", and the IP address can be configured via DHCP or a statically assigned one ",(0,a.kt)("small",null,"(Note: The Node IP can not change at the lifecycle of a Harvester cluster. If DHCP is used, users must make sure the DHCP server always offers the same IP for the same Node. If Node IP is changed, the related Node cannot join the cluster and might even break the cluster)"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"iso-installed.png",src:t(13701).Z,width:"2422",height:"1570"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) Configure the DNS servers. Use commas as a delimiter.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"Virtual IP")," which you can use to access the cluster or join other nodes to the cluster ",(0,a.kt)("small",null,"(Note: If your IP address is configured via DHCP, you will need to configure static MAC-to-IP address mapping on your DHCP server in order to have a persistent Virtual IP, VIP must be different than any Node IP)"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster token"),". This token will be used for adding other nodes to the cluster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the login password of the host. The default SSH user is ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Recommended configuring the NTP server to make sure all nodes' times are synchronized. This defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"0.suse.pool.ntp.org"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) If you need to use an HTTP proxy to access the outside world, enter the proxy URL address here. Otherwise, leave this blank.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) You can choose to import SSH keys from a remote server URL. Your GitHub public keys can be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/<username>.keys"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) If you need to customize the host with a ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration"},"Harvester configuration")," file, enter the HTTP URL here.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After confirming the installation options, Harvester will be installed to your host. The installation may take a few minutes to be complete.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once the installation is complete, it will restart the host. After the restart, the Harvester console containing the management URL and status will be displayed. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"F12")," to switch from the Harvester console to the Shell and type ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")," to go back to the Harvester console.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The default URL of the web interface is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://your-virtual-ip"),".\n",(0,a.kt)("img",{alt:"iso-installed.png",src:t(99890).Z,width:"2206",height:"1318"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will be prompted to set the password for the default ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," user when logging in for the first time.\n",(0,a.kt)("img",{alt:"first-login.png",src:t(33605).Z,width:"2555",height:"1295"})))),(0,a.kt)("h2",{id:"known-issue"},"Known Issue"),(0,a.kt)("h3",{id:"installer-may-crash-when-using-an-older-graphics-cardmonitor"},"Installer may crash when using an older graphics card/monitor"),(0,a.kt)("p",null,"In some cases, if you are using an older graphics card/monitor, you may encounter a ",(0,a.kt)("inlineCode",{parentName:"p"},"panic: invalid dimensions")," error during ISO installation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"invalid-dimensions.png",src:t(34890).Z,width:"799",height:"591"})),(0,a.kt)("p",null,"This is a known issue we are working on, and will be fixed in future releases. Here is a workaround for this issue:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Boot up with the ISO, and press ",(0,a.kt)("inlineCode",{parentName:"li"},"E")," to edit the first menu entry:\n",(0,a.kt)("img",{alt:"grub-menu.png",src:t(17834).Z,width:"1692",height:"946"})),(0,a.kt)("li",{parentName:"ol"},"Append ",(0,a.kt)("inlineCode",{parentName:"li"},"vga=792")," to the line started with ",(0,a.kt)("inlineCode",{parentName:"li"},"$linux"),":\n",(0,a.kt)("img",{alt:"edit-menu-entry.png",src:t(48708).Z,width:"1695",height:"941"})),(0,a.kt)("li",{parentName:"ol"},"Press ",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl+X")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"F10")," to boot up.")))}I.isMDXComponent=!0},48708:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/edit-menu-entry-c532986f01fb640a5d340b42c679777f.png"},33605:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"},17834:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/grub-menu-517ed670d5e93618eaee9d106b45e469.png"},34890:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACI+FNb4f1+J9oBAAA83P8CLNTuJ9yKCScAAAAASUVORK5CYII="},3003:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/iso-install-disk-0325e609724655bca0b265ad7cc88209.png"},56414:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/iso-install-6186fe323ea0470f6fe4225370f55878.png"},99890:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/iso-installed-ca81548526586a3a91f835b969886c30.png"},13701:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/iso-nic-config-332e4385e7b749ffeba2733c387ba0a7.png"},70146:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/iso-select-data-disk-474b16957845780a5a63a7c9d55fdae1.png"}}]);