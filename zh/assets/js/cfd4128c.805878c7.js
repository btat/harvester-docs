"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4326],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(t),g=o,h=s["".concat(c,".").concat(g)]||s[g]||d[g]||a;return t?r.createElement(h,i(i({ref:n},m),{},{components:t})):r.createElement(h,i({ref:n},m))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},37374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:4,sidebar_label:"\u76d1\u63a7",title:"\u76d1\u63a7"},i=void 0,l={unversionedId:"troubleshooting/monitoring",id:"troubleshooting/monitoring",title:"\u76d1\u63a7",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5bf9 Harvester Monitoring \u8fdb\u884c\u6545\u969c\u6392\u9664\u7684\u63d0\u793a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/monitoring.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/monitoring",permalink:"/zh/dev/troubleshooting/monitoring",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/troubleshooting/monitoring.md",tags:[],version:"current",lastUpdatedAt:1673915607,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"\u76d1\u63a7",title:"\u76d1\u63a7"},sidebar:"tutorialSidebar",previous:{title:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/zh/dev/troubleshooting/os"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/dev/faq"}},c={},p=[{value:"Monitoring \u4e0d\u53ef\u7528",id:"monitoring-\u4e0d\u53ef\u7528",level:2},{value:"Pod \u5361\u5728 <code>Terminating</code> \u72b6\u6001\u5bfc\u81f4 Monitoring \u65e0\u6cd5\u4f7f\u7528",id:"pod-\u5361\u5728-terminating-\u72b6\u6001\u5bfc\u81f4-monitoring-\u65e0\u6cd5\u4f7f\u7528",level:3},{value:"\u6269\u5c55 PV/\u5377\u7684\u5927\u5c0f",id:"\u6269\u5c55-pv\u5377\u7684\u5927\u5c0f",level:2},{value:"\u67e5\u770b\u5377",id:"\u67e5\u770b\u5377",level:3},{value:"\u4f7f\u7528\u5d4c\u5165\u5f0f Longhorn WebUI",id:"\u4f7f\u7528\u5d4c\u5165\u5f0f-longhorn-webui",level:4},{value:"\u4f7f\u7528 CLI",id:"\u4f7f\u7528-cli",level:4},{value:"\u7f29\u51cf Deployment",id:"\u7f29\u51cf-deployment",level:3},{value:"\u6269\u5c55\u5377",id:"\u6269\u5c55\u5377",level:3},{value:"\u6269\u5c55 Deployment",id:"\u6269\u5c55-deployment",level:3}],m={toc:p};function d(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5bf9 Harvester Monitoring \u8fdb\u884c\u6545\u969c\u6392\u9664\u7684\u63d0\u793a\u3002"),(0,o.kt)("h2",{id:"monitoring-\u4e0d\u53ef\u7528"},"Monitoring \u4e0d\u53ef\u7528"),(0,o.kt)("p",null,"\u5982\u679c Harvester Dashboard \u6ca1\u6709\u663e\u793a\u4efb\u4f55\u76d1\u63a7\u6307\u6807\uff0c\u53ef\u80fd\u539f\u56e0\u5982\u4e0b\u3002"),(0,o.kt)("h3",{id:"pod-\u5361\u5728-terminating-\u72b6\u6001\u5bfc\u81f4-monitoring-\u65e0\u6cd5\u4f7f\u7528"},"Pod \u5361\u5728 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Terminating")," \u72b6\u6001\u5bfc\u81f4 Monitoring \u65e0\u6cd5\u4f7f\u7528"),(0,o.kt)("p",null,"Harvester Monitoring pod \u968f\u673a\u90e8\u7f72\u5728\u96c6\u7fa4\u8282\u70b9\u4e0a\u3002\u5f53\u6258\u7ba1 Pod \u7684\u8282\u70b9\u610f\u5916\u5b95\u673a\u65f6\uff0c\u76f8\u5173\u7684 Pod \u53ef\u80fd\u4f1a\u5361\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminating")," \u72b6\u6001\uff0c\u5bfc\u81f4 WebUI \u65e0\u6cd5\u4f7f\u7528 Monitoring\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods -n cattle-monitoring-system\n\nNAMESPACE                   NAME                                                     READY   STATUS        RESTARTS   AGE\ncattle-monitoring-system    prometheus-rancher-monitoring-prometheus-0               3/3     Terminating   0          3d23h\ncattle-monitoring-system    rancher-monitoring-admission-create-fwjn9                0/1     Terminating   0          137m\ncattle-monitoring-system    rancher-monitoring-crd-create-9wtzf                      0/1     Terminating   0          137m\ncattle-monitoring-system    rancher-monitoring-grafana-d9c56d79b-ph4nz               3/3     Terminating   0          3d23h\ncattle-monitoring-system    rancher-monitoring-grafana-d9c56d79b-t24sz               0/3     Init:0/2      0          132m\n\ncattle-monitoring-system    rancher-monitoring-kube-state-metrics-5bc8bb48bd-nbd92   1/1     Running       4          4d1h\n...\n\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 CLI \u547d\u4ee4\u5f3a\u5236\u5220\u9664\u76f8\u5173 Pod \u6765\u6062\u590d\u76d1\u63a7\u3002\u96c6\u7fa4\u5c06\u91cd\u65b0\u90e8\u7f72\u65b0\u7684 Pod \u6765\u66ff\u6362\u5b83\u4eec\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5220\u9664\u547d\u540d\u7a7a\u95f4 cattle-monitoring-system \u4e2d\u6240\u6709\u672a\u8fd0\u884c\u7684 Pod\u3002\n\n$ kubectl delete pod --force -n cattle-monitoring-system prometheus-rancher-monitoring-prometheus-0\n\n pod "prometheus-rancher-monitoring-prometheus-0" force deleted\n\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-admission-create-fwjn9\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-crd-create-9wtzf\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-grafana-d9c56d79b-ph4nz\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-grafana-d9c56d79b-t24sz\n')),(0,o.kt)("p",null,"\u7b49\u5f85\u51e0\u5206\u949f\uff0c\u4ee5\u4fbf\u521b\u5efa\u65b0\u7684 Pod \u5e76\u51c6\u5907\u597d\u8ba9 Monitoring \u4eea\u8868\u677f\u518d\u6b21\u53ef\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get pods -n cattle-monitoring-system\n\nNAME                                                     READY   STATUS     RESTARTS   AGE\nprometheus-rancher-monitoring-prometheus-0               0/3     Init:0/1   0          98s\nrancher-monitoring-grafana-d9c56d79b-cp86w               0/3     Init:0/2   0          27s\n...\n\n$ kubectl get pods -n cattle-monitoring-system\n\nNAME                                                     READY   STATUS    RESTARTS   AGE\nprometheus-rancher-monitoring-prometheus-0               3/3     Running   0          7m57s\nrancher-monitoring-grafana-d9c56d79b-cp86w               3/3     Running   0          6m46s\n...\n\n")),(0,o.kt)("h2",{id:"\u6269\u5c55-pv\u5377\u7684\u5927\u5c0f"},"\u6269\u5c55 PV/\u5377\u7684\u5927\u5c0f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Harvester")," \u96c6\u6210\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Longhorn")," \u4f5c\u4e3a\u9ed8\u8ba4\u7684\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u3002"),(0,o.kt)("p",null,"Harvester ",(0,o.kt)("inlineCode",{parentName:"p"},"Monitoring")," \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Persistent Volume (PV)")," \u6765\u5b58\u50a8\u8fd0\u884c\u6570\u636e\u3002\u96c6\u7fa4\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u6269\u5c55 ",(0,o.kt)("inlineCode",{parentName:"p"},"PV")," \u7684\u5927\u5c0f\u3002"),(0,o.kt)("p",null,"\u53c2\u7167 ",(0,o.kt)("inlineCode",{parentName:"p"},"Longhorn")," \u5377\u7684",(0,o.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.3.2/volumes-and-nodes/expansion/"},"\u6269\u5c55\u6307\u5357"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Harvester")," \u5c06\u8bf4\u660e\u5982\u4f55\u8fdb\u884c\u5377\u7684\u5927\u5c0f\u6269\u5c55\u3002"),(0,o.kt)("h3",{id:"\u67e5\u770b\u5377"},"\u67e5\u770b\u5377"),(0,o.kt)("h4",{id:"\u4f7f\u7528\u5d4c\u5165\u5f0f-longhorn-webui"},"\u4f7f\u7528\u5d4c\u5165\u5f0f Longhorn WebUI"),(0,o.kt)("p",null,"\u6839\u636e",(0,o.kt)("a",{parentName:"p",href:"/zh/dev/troubleshooting/harvester#%E8%AE%BF%E9%97%AE%E5%B5%8C%E5%85%A5%E5%BC%8F-rancher-%E5%92%8C-longhorn-%E4%BB%AA%E8%A1%A8%E6%9D%BF"},"\u6b64\u6587\u6863"),"\u8bbf\u95ee\u5d4c\u5165\u5f0f Longhorn WebUI\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(54196).Z,width:"1478",height:"872"})),(0,o.kt)("p",null,"\u9ed8\u8ba4\u89c6\u56fe\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(52284).Z,width:"2506",height:"1276"})),(0,o.kt)("p",null,"\u5355\u51fb ",(0,o.kt)("inlineCode",{parentName:"p"},"Volume")," \u5217\u51fa\u6240\u6709\u73b0\u6709\u7684\u5377\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(66142).Z,width:"2668",height:"970"})),(0,o.kt)("h4",{id:"\u4f7f\u7528-cli"},"\u4f7f\u7528 CLI"),(0,o.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6765\u67e5\u770b\u6240\u6709\u5377\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kubectl get pvc -A\nNAMESPACE                  NAME                                                                                             STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS         AGE\ncattle-monitoring-system   alertmanager-rancher-monitoring-alertmanager-db-alertmanager-rancher-monitoring-alertmanager-0   Bound    pvc-1b2fbbe9-14b1-4a65-941a-7d5645a89977   5Gi        RWO            harvester-longhorn   43h\ncattle-monitoring-system   prometheus-rancher-monitoring-prometheus-db-prometheus-rancher-monitoring-prometheus-0           Bound    pvc-7c6dcb61-51a9-4a38-b4c5-acaa11788978   50Gi       RWO            harvester-longhorn   43h\ncattle-monitoring-system   rancher-monitoring-grafana                                                                       Bound    pvc-b2b2c07c-f7cd-4965-90e6-ac3319597bf7   2Gi        RWO            harvester-longhorn   43h\n\n# kubectl get volume -A\nNAMESPACE         NAME                                       STATE      ROBUSTNESS   SCHEDULED   SIZE          NODE     AGE\nlonghorn-system   pvc-1b2fbbe9-14b1-4a65-941a-7d5645a89977   attached   degraded                 5368709120    harv31   43h\nlonghorn-system   pvc-7c6dcb61-51a9-4a38-b4c5-acaa11788978   attached   degraded                 53687091200   harv31   43h\nlonghorn-system   pvc-b2b2c07c-f7cd-4965-90e6-ac3319597bf7   attached   degraded                 2147483648    harv31   43h\n")),(0,o.kt)("h3",{id:"\u7f29\u51cf-deployment"},"\u7f29\u51cf Deployment"),(0,o.kt)("p",null,"\u8981\u505c\u6b62\u6302\u8f7d",(0,o.kt)("inlineCode",{parentName:"p"},"\u5377"),"\uff0c\u4f60\u9700\u8981\u5148\u7f29\u51cf\u6b63\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"\u5377"),"\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment"),"\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c06\u9488\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-grafana")," \u4f7f\u7528\u7684 PVC\u3002"),(0,o.kt)("p",null,"\u5728\u547d\u540d\u7a7a\u95f4 ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," \u4e2d\u627e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kubectl get deployment -n cattle-monitoring-system\nNAME                                    READY   UP-TO-DATE   AVAILABLE   AGE\nrancher-monitoring-grafana              1/1     1            1           43h  // target deployment\nrancher-monitoring-kube-state-metrics   1/1     1            1           43h\nrancher-monitoring-operator             1/1     1            1           43h\nrancher-monitoring-prometheus-adapter   1/1     1            1           43h\n")),(0,o.kt)("p",null,"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-grafana")," Deployment \u7f29\u51cf\u4e3a 0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kubectl scale --replicas=0 deployment/rancher-monitoring-grafana -n cattle-monitoring-system\n")),(0,o.kt)("p",null,"\u68c0\u67e5 Deployment \u548c\u5377\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kubectl get deployment -n cattle-monitoring-system\nNAME                                    READY   UP-TO-DATE   AVAILABLE   AGE\nrancher-monitoring-grafana              0/0     0            0           43h  // scaled down\nrancher-monitoring-kube-state-metrics   1/1     1            1           43h\nrancher-monitoring-operator             1/1     1            1           43h\nrancher-monitoring-prometheus-adapter   1/1     1            1           43h\n\n# kubectl get volume -A\nNAMESPACE         NAME                                       STATE      ROBUSTNESS   SCHEDULED   SIZE          NODE     AGE\nlonghorn-system   pvc-1b2fbbe9-14b1-4a65-941a-7d5645a89977   attached   degraded                 5368709120    harv31   43h\nlonghorn-system   pvc-7c6dcb61-51a9-4a38-b4c5-acaa11788978   attached   degraded                 53687091200   harv31   43h\nlonghorn-system   pvc-b2b2c07c-f7cd-4965-90e6-ac3319597bf7   detached   unknown                  2147483648             43h  // volume is detached\n")),(0,o.kt)("h3",{id:"\u6269\u5c55\u5377"},"\u6269\u5c55\u5377"),(0,o.kt)("p",null,"\u5728 Longhorn WebUI \u4e2d\uff0c\u76f8\u5173\u5377\u7684\u72b6\u6001\u4f1a\u53d8\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"Detached"),"\u3002\u70b9\u51fb ",(0,o.kt)("inlineCode",{parentName:"p"},"Operation")," \u680f\u4e2d\u7684\u56fe\u6807\uff0c\u7136\u540e\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"p"},"Expand Volume"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(77276).Z,width:"2564",height:"1122"})),(0,o.kt)("p",null,"\u8f93\u5165\u4e00\u4e2a\u65b0\u7684\u5927\u5c0f\uff0c\u7136\u540e ",(0,o.kt)("inlineCode",{parentName:"p"},"Longhorn")," \u4f1a\u5c06\u5377\u6269\u5c55\u5230\u8fd9\u4e2a\u5927\u5c0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(71557).Z,width:"2502",height:"1226"})),(0,o.kt)("h3",{id:"\u6269\u5c55-deployment"},"\u6269\u5c55 Deployment"),(0,o.kt)("p",null,"\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"\u5377"),"\u6269\u5c55\u5230\u76ee\u6807\u5927\u5c0f\u540e\uff0c\u4f60\u9700\u8981\u5c06\u4e0a\u8ff0 Deployment \u6269\u5c55\u5230\u5176\u539f\u59cb\u526f\u672c\u7684\u5927\u5c0f\u3002\u5728\u4e0a\u8ff0 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-grafana")," \u793a\u4f8b\u4e2d\uff0c\u539f\u59cb\u526f\u672c\u7684\u503c\u4e3a 1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kubectl scale --replicas=1 deployment/rancher-monitoring-grafana -n cattle-monitoring-system\n\n")),(0,o.kt)("p",null,"\u518d\u6b21\u68c0\u67e5 Deployment\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kubectl get deployment -n cattle-monitoring-system\nNAME                                    READY   UP-TO-DATE   AVAILABLE   AGE\nrancher-monitoring-grafana              1/1     1            1           43h  // scaled up\nrancher-monitoring-kube-state-metrics   1/1     1            1           43h\nrancher-monitoring-operator             1/1     1            1           43h\nrancher-monitoring-prometheus-adapter   1/1     1            1           43h\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\u5377"),"\u5df2\u9644\u52a0\u5230\u65b0\u7684 Pod\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(57070).Z,width:"2696",height:"942"})),(0,o.kt)("p",null,"\u81f3\u6b64\uff0c\u4f60\u5df2\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"\u5377"),"\u6269\u5c55\u5230\u65b0\u7684\u5927\u5c0f\uff0cPod \u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u5377\u3002"))}d.isMDXComponent=!0},54196:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1-access-embedded-longhorn-9f84b5f472675415f355f8d6a382dad6.png"},52284:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/2-longhorn-dashboard-90a68b82b511c671db6d640dc8038274.png"},66142:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/3-view-all-volume-f72a8c49486c5a86a66aa29680e39000.png"},77276:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/4-select-volume-to-expand-9c1002c23d1a8cd653272951031e0f34.png"},71557:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/5-expand-volue-to-new-size-0c5ddcb89f21656e1bfb1c1cc24d8c3c.png"},57070:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/6-after-scale-up-00d817e0272b5a4184bc09e289f45101.png"}}]);