"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6942],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(r),h=a,v=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return r?n.createElement(v,s(s({ref:t},u),{},{components:r})):n.createElement(v,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},56655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:1,sidebar_label:"Harvester Node Driver",title:"Harvester Node Driver",keywords:["Harvester","harvester","Rancher","rancher","Harvester Node Driver"],Description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."},s=void 0,i={unversionedId:"rancher/node/node-driver",id:"rancher/node/node-driver",title:"Harvester Node Driver",description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters.",source:"@site/docs/rancher/node/node-driver.md",sourceDirName:"rancher/node",slug:"/rancher/node/node-driver",permalink:"/dev/rancher/node/node-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/rancher/node/node-driver.md",tags:[],version:"current",lastUpdatedAt:1672296666,formattedLastUpdatedAt:"Dec 29, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Node Driver",title:"Harvester Node Driver",keywords:["Harvester","harvester","Rancher","rancher","Harvester Node Driver"],Description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."},sidebar:"tutorialSidebar",previous:{title:"Virtualization Management",permalink:"/dev/rancher/virtualization-management"},next:{title:"Creating an RKE1 Kubernetes Cluster",permalink:"/dev/rancher/node/rke1-cluster"}},l={},d=[{value:"Harvester Node Driver",id:"harvester-node-driver",level:2},{value:"Support Matrix",id:"support-matrix",level:3},{value:"RKE1 Kubernetes Cluster",id:"rke1-kubernetes-cluster",level:2},{value:"RKE2 Kubernetes Cluster",id:"rke2-kubernetes-cluster",level:2},{value:"K3s Kubernetes Cluster",id:"k3s-kubernetes-cluster",level:2},{value:"Topology Spread Constraints",id:"topology-spread-constraints",level:2},{value:"Sync Topology Labels to the Guest Cluster Node",id:"sync-topology-labels-to-the-guest-cluster-node",level:3}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."),(0,a.kt)("p",null,"A node driver is the same as a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine driver"),", and the project repo is available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/docker-machine-driver-harvester"},"harvester/docker-machine-driver-harvester"),"."),(0,a.kt)("p",null,"You can now provision RKE1/RKE2 Kubernetes clusters in Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.3+")," with the built-in Harvester node driver.\nAdditionally, Harvester now can provide built-in ",(0,a.kt)("a",{parentName:"p",href:"/dev/rancher/cloud-provider"},"Load Balancer support")," as well as Harvester cluster ",(0,a.kt)("a",{parentName:"p",href:"/dev/rancher/csi-driver"},"storage passthrough")," support to the guest Kubernetes cluster."),(0,a.kt)("p",null,"While you can ",(0,a.kt)("a",{parentName:"p",href:"/dev/upload-image#upload-images-via-local-file"},"upload and view ",(0,a.kt)("inlineCode",{parentName:"a"},".ISO")," images in the Harvester UI"),", the same capability is not available in the Rancher UI. For more information on this, see the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/virtualization-admin/#harvester-node-driver"},"Rancher docs"),"."),(0,a.kt)("h2",{id:"harvester-node-driver"},"Harvester Node Driver"),(0,a.kt)("p",null,"The Harvester node driver is enabled by default from Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.3"),". You can go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Cluster Management")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Drivers")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Node Drivers")," page to manage the Harvester node driver manually."),(0,a.kt)("p",null,"When the Harvester node driver is enabled, you can create Kubernetes clusters on top of the Harvester cluster and manage them from Rancher."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rke1-cluster",src:r(42233).Z,width:"5118",height:"1972"})),(0,a.kt)("h3",{id:"support-matrix"},"Support Matrix"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-6-9"},"Rancher Downstream Cluster Support Matrix")),(0,a.kt)("h2",{id:"rke1-kubernetes-cluster"},"RKE1 Kubernetes Cluster"),(0,a.kt)("p",null,"Click to learn ",(0,a.kt)("a",{parentName:"p",href:"/dev/rancher/node/rke1-cluster"},"how to create RKE1 Kubernetes Clusters"),"."),(0,a.kt)("h2",{id:"rke2-kubernetes-cluster"},"RKE2 Kubernetes Cluster"),(0,a.kt)("p",null,"Click to learn ",(0,a.kt)("a",{parentName:"p",href:"/dev/rancher/node/rke2-cluster"},"how to create RKE2 Kubernetes Clusters"),"."),(0,a.kt)("h2",{id:"k3s-kubernetes-cluster"},"K3s Kubernetes Cluster"),(0,a.kt)("p",null,"Click to learn ",(0,a.kt)("a",{parentName:"p",href:"/dev/rancher/node/k3s-cluster"},"how to create k3s Kubernetes Clusters"),"."),(0,a.kt)("h2",{id:"topology-spread-constraints"},"Topology Spread Constraints"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.0.3")),(0,a.kt)("p",null,"In your guest Kubernetes cluster, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/"},"topology spread constraints")," to control how workloads are spread across the Harvester VMs among failure-domains such as regions and zones. This can help to achieve high availability as well as efficient resource utilization of your cluster resources."),(0,a.kt)("p",null,"The minimum RKE2 versions required to support the sync topology label feature are as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported RKE2 Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">","=  v1.24.3+rke2r1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">","=  v1.23.9+rke2r1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">","=  v1.22.12+rke2r1")))),(0,a.kt)("p",null,"In addition, the cloud provider version installed via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apps")," of RKE/K3s must be >= v0.1.4"),(0,a.kt)("h3",{id:"sync-topology-labels-to-the-guest-cluster-node"},"Sync Topology Labels to the Guest Cluster Node"),(0,a.kt)("p",null,"During the cluster installation, the Harvester node driver will automatically help synchronize topology labels from VM nodes to guest cluster nodes. Currently, only ",(0,a.kt)("inlineCode",{parentName:"p"},"region")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"zone")," topology labels are supported."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Label synchronization will only take effect during guest node initialization. To avoid node drifts to another region or zone, it is recommended to add the ",(0,a.kt)("a",{parentName:"p",href:"/dev/rancher/node/rke2-cluster#add-node-affinity"},"node affinity rules")," during the cluster provisioning, so that the VMs can be scheduled to the same zone even after rebuilding.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configuring topology labels on the Harvester nodes through ",(0,a.kt)("inlineCode",{parentName:"p"},"Hosts > Edit Config > Labels"),". e.g., add the topology labels as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"topology.kubernetes.io/region: us-east-1\ntopology.kubernetes.io/zone: us-east-1a\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(26021).Z,width:"4374",height:"1820"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Creating a guest Kubernetes cluster using the Harvester node driver and it is recommended to add the ",(0,a.kt)("a",{parentName:"p",href:"/dev/rancher/node/rke2-cluster#add-node-affinity"},"node affinity rules"),", this will help to avoid node drifting to other zones after VM rebuilding.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the cluster is successfully deployed, confirm that guest Kubernetes node labels are successfully synchronized from the Harvester VM node.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now deploy workloads on your guest Kubernetes cluster, and you should be able to manage them using the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/"},"topology spread constraints"),"."))))}c.isMDXComponent=!0},26021:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/node-add-affinity-labels-427cc8103802bf12cb3c6c8ac89086f3.png"},42233:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rke1-node-driver-f8868c55d2aa08ff3d613ef8c6ce673b.png"}}]);