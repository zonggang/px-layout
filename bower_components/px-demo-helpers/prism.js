/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+bash+git+http+java+sass+scss&plugins=line-highlight+line-numbers+autolinker+file-highlight+jsonp-highlight+previewer-base+previewer-color+previewer-gradient+previewer-easing+previewer-time+previewer-angle+autoloader */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=_self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var l=r[e];if(2==arguments.length){a=arguments[1];for(var i in a)a.hasOwnProperty(i)&&(l[i]=a[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==n)for(var i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);o[s]=l[s]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},plugins:{},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),l=0;a=r[l++];)t.highlightElement(a,e===!0,n)},highlightElement:function(n,a,r){for(var l,i,o=n;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1],i=t.languages[l]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var s=n.textContent,u={element:n,language:l,grammar:i,code:s};if(!s||!i)return t.hooks.run("complete",u),void 0;if(t.hooks.run("before-highlight",u),a&&_self.Worker){var g=new Worker(t.filename);g.onmessage=function(e){u.highlightedCode=e.data,t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),t.hooks.run("after-highlight",u),t.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(n),t.hooks.run("after-highlight",u),t.hooks.run("complete",u)},highlight:function(e,a,r){var l=t.tokenize(e,a);return n.stringify(t.util.encode(l),r)},tokenize:function(e,n){var a=t.Token,r=[e],l=n.rest;if(l){for(var i in l)n[i]=l[i];delete n.rest}e:for(var i in n)if(n.hasOwnProperty(i)&&n[i]){var o=n[i];o="Array"===t.util.type(o)?o:[o];for(var s=0;s<o.length;++s){var u=o[s],g=u.inside,c=!!u.lookbehind,f=0,h=u.alias;u=u.pattern||u;for(var p=0;p<r.length;p++){var d=r[p];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){c&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,k=y+v,b=d.slice(0,y+1),w=d.slice(k+1),P=[p,1];b&&P.push(b);var A=new a(i,g?t.tokenize(m,g):m,h);P.push(A),w&&P.push(w),Array.prototype.splice.apply(r,P)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,l=0;r=a[l++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var l={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==l.type&&(l.attributes.spellcheck="true"),e.alias){var i="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}t.hooks.run("wrap",l);var o="";for(var s in l.attributes)o+=(o?" ":"")+s+'="'+(l.attributes[s]||"")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'" '+o+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code,l=n.immediateClose;_self.postMessage(t.highlight(r,t.languages[a],a)),l&&_self.close()},!1),_self.Prism):_self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;
!function(e){var t={variable:[{pattern:/\$?\(\([\w\W]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\w\W]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,lookbehind:!0,inside:t},{pattern:/("|')(?:\\?[\s\S])*?\1/g,inside:t}],variable:t.variable,"function":{pattern:/(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,lookbehind:!0},keyword:{pattern:/(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,lookbehind:!0},"boolean":{pattern:/(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var a=t.variable[1].inside;a["function"]=e.languages.bash["function"],a.keyword=e.languages.bash.keyword,a.boolean=e.languages.bash.boolean,a.operator=e.languages.bash.operator,a.punctuation=e.languages.bash.punctuation}(Prism);
Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m};
Prism.languages.http={"request-line":{pattern:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] [0-9]+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )[0-9]+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var httpLanguages={"application/json":Prism.languages.javascript,"application/xml":Prism.languages.markup,"text/xml":Prism.languages.markup,"text/html":Prism.languages.markup};for(var contentType in httpLanguages)if(httpLanguages[contentType]){var options={};options[contentType]={pattern:new RegExp("(content-type:\\s*"+contentType+"[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*","i"),lookbehind:!0,inside:{rest:httpLanguages[contentType]}},Prism.languages.insertBefore("http","header-name",options)};
Prism.languages.java=Prism.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}});
!function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,lookbehind:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,inside:{atrule:/(?:@[\w-]+|[+=])/m}}}),delete e.languages.sass.atrule;var a=/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,t=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,{pattern:/(\s+)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,inside:{punctuation:/:/,variable:a,operator:t}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:a,operator:t,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,delete e.languages.sass.selector,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,lookbehind:!0}})}(Prism);
Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{placeholder:/%[-_\w]+/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","property",{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/,alias:"selector"},statement:/\B!(?:default|optional)\b/i,"boolean":/\b(?:true|false)\b/,"null":/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.util.clone(Prism.languages.scss);
!function(){function e(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function t(e,t){return t=" "+t+" ",(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function n(e,n,i){for(var o,a=n.replace(/\s+/g,"").split(","),l=+e.getAttribute("data-line-offset")||0,d=r()?parseInt:parseFloat,c=d(getComputedStyle(e).lineHeight),s=0;o=a[s++];){o=o.split("-");var u=+o[0],m=+o[1]||u,h=document.createElement("div");h.textContent=Array(m-u+2).join(" \n"),h.className=(i||"")+" line-highlight",t(e,"line-numbers")||(h.setAttribute("data-start",u),m>u&&h.setAttribute("data-end",m)),h.style.top=(u-l-1)*c+"px",t(e,"line-numbers")?e.appendChild(h):(e.querySelector("code")||e).appendChild(h)}}function i(){var t=location.hash.slice(1);e(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var i=(t.match(/\.([\d,-]+)$/)||[,""])[1];if(i&&!document.getElementById(t)){var r=t.slice(0,t.lastIndexOf(".")),o=document.getElementById(r);o&&(o.hasAttribute("data-line")||o.setAttribute("data-line",""),n(o,i,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}if("undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector){var r=function(){var e;return function(){if("undefined"==typeof e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding=0,t.style.border=0,t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e}}(),o=0;Prism.hooks.add("complete",function(t){var r=t.element.parentNode,a=r&&r.getAttribute("data-line");r&&a&&/pre/i.test(r.nodeName)&&(clearTimeout(o),e(".line-highlight",r).forEach(function(e){e.parentNode.removeChild(e)}),n(r,a),o=setTimeout(i,1))}),window.addEventListener&&window.addEventListener("hashchange",i)}}();
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,s=/\s*\bline-numbers\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(s.test(t.className)||s.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){s.test(e.element.className)&&(e.element.className=e.element.className.replace(s,"")),s.test(t.className)||(t.className+=" line-numbers");var n,a=e.code.match(/\n(?!$)/g),l=a?a.length+1:1,m=new Array(l+1);m=m.join("<span></span>"),n=document.createElement("span"),n.className="line-numbers-rows",n.innerHTML=m,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(n)}}})}();
!function(){if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism)){var i=/\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~\/.:#=?&amp;]+/,n=/\b\S+@[\w.]+[a-z]{2}/,e=/\[([^\]]+)]\(([^)]+)\)/,t=["comment","url","attr-value","string"];Prism.hooks.add("before-highlight",function(a){a.grammar&&!a.grammar["url-link"]&&(Prism.languages.DFS(a.grammar,function(a,r,l){t.indexOf(l)>-1&&"Array"!==Prism.util.type(r)&&(r.pattern||(r=this[a]={pattern:r}),r.inside=r.inside||{},"comment"==l&&(r.inside["md-link"]=e),"attr-value"==l?Prism.languages.insertBefore("inside","punctuation",{"url-link":i},r):r.inside["url-link"]=i,r.inside["email-link"]=n)}),a.grammar["url-link"]=i,a.grammar["email-link"]=n)}),Prism.hooks.add("wrap",function(i){if(/-link$/.test(i.type)){i.tag="a";var n=i.content;if("email-link"==i.type&&0!=n.indexOf("mailto:"))n="mailto:"+n;else if("md-link"==i.type){var t=i.content.match(e);n=t[2],i.content=t[1]}i.attributes.href=n}})}}();
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var r,a=t.getAttribute("data-src"),s=t,n=/\blang(?:uage)?-(?!\*)(\w+)\b/i;s&&!n.test(s.className);)s=s.parentNode;if(s&&(r=(t.className.match(n)||[,""])[1]),!r){var o=(a.match(/\.(\w+)$/)||[,""])[1];r=e[o]||o}var l=document.createElement("code");l.className="language-"+r,t.textContent="",l.textContent="Loading…",t.appendChild(l);var i=new XMLHttpRequest;i.open("GET",a,!0),i.onreadystatechange=function(){4==i.readyState&&(i.status<400&&i.responseText?(l.textContent=i.responseText,Prism.highlightElement(l)):l.textContent=i.status>=400?"✖ Error "+i.status+" while fetching file: "+i.statusText:"✖ Error: File does not exist or is empty")},i.send(null)})},self.Prism.fileHighlight())}();
!function(){function t(t){"function"!=typeof t||e(t)||r.push(t)}function e(t){return"function"==typeof t?r.filter(function(e){return e.valueOf()===t.valueOf()})[0]:"string"==typeof t&&t.length>0?r.filter(function(e){return e.name===t})[0]:null}function n(t){if("string"==typeof t&&(t=e(t)),"function"==typeof t){var n=r.indexOf(t);n>=0&&r.splice(n,1)}}function a(){Array.prototype.slice.call(document.querySelectorAll("pre[data-jsonp]")).forEach(function(t){t.textContent="";var e=document.createElement("code");e.textContent=i,t.appendChild(e);var n=t.getAttribute("data-adapter"),a=null;if(n){if("function"!=typeof window[n])return e.textContent="JSONP adapter function '"+n+"' doesn't exist",void 0;a=window[n]}var u="prismjsonp"+o++,f=document.createElement("a"),l=f.href=t.getAttribute("data-jsonp");f.href+=(f.search?"&":"?")+(t.getAttribute("data-callback")||"callback")+"="+u;var s=setTimeout(function(){e.textContent===i&&(e.textContent="Timeout loading '"+l+"'")},5e3),d=document.createElement("script");d.src=f.href,window[u]=function(n){document.head.removeChild(d),clearTimeout(s),delete window[u];var o="";if(a)o=a(n,t);else for(var i in r)if(o=r[i](n,t),null!==o)break;null===o?e.textContent="Cannot parse response (perhaps you need an adapter function?)":(e.textContent=o,Prism.highlightElement(e))},document.head.appendChild(d)})}if(self.Prism&&self.document&&document.querySelectorAll&&[].filter){var r=[];Prism.plugins.jsonphighlight={registerAdapter:t,removeAdapter:n,highlight:a},t(function(t){if(t&&t.meta&&t.data){if(t.meta.status&&t.meta.status>=400)return"Error: "+(t.data.message||t.meta.status);if("string"==typeof t.data.content)return"function"==typeof atob?atob(t.data.content.replace(/\s/g,"")):"Your browser cannot decode base64"}return null}),t(function(t,e){if(t&&t.meta&&t.data&&t.data.files){if(t.meta.status&&t.meta.status>=400)return"Error: "+(t.data.message||t.meta.status);var n=e.getAttribute("data-filename");if(null==n)for(var a in t.data.files)if(t.data.files.hasOwnProperty(a)){n=a;break}return void 0!==t.data.files[n]?t.data.files[n].content:"Error: unknown or missing gist file "+n}return null}),t(function(t){return t&&t.node&&"string"==typeof t.data?t.data:null});var o=0,i="Loading…";a()}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&Function.prototype.bind){var t=function(t){var e=0,s=0,i=t;if(i.parentNode){do e+=i.offsetLeft,s+=i.offsetTop;while((i=i.offsetParent)&&i.nodeType<9);i=t;do e-=i.scrollLeft,s-=i.scrollTop;while((i=i.parentNode)&&!/body/i.test(i.nodeName))}return{top:s,right:innerWidth-e-t.offsetWidth,bottom:innerHeight-s-t.offsetHeight,left:e}},e=/(?:^|\s)token(?=$|\s)/,s=/(?:^|\s)active(?=$|\s)/g,i=/(?:^|\s)flipped(?=$|\s)/g,o=function(t,e,s,i){this._elt=null,this._type=t,this._clsRegexp=RegExp("(?:^|\\s)"+t+"(?=$|\\s)"),this._token=null,this.updater=e,this._mouseout=this.mouseout.bind(this),this.initializer=i;var n=this;s||(s=["*"]),"Array"!==Prism.util.type(s)&&(s=[s]),s.forEach(function(t){"string"!=typeof t&&(t=t.lang),o.byLanguages[t]||(o.byLanguages[t]=[]),o.byLanguages[t].indexOf(n)<0&&o.byLanguages[t].push(n)}),o.byType[t]=this};o.prototype.init=function(){this._elt||(this._elt=document.createElement("div"),this._elt.className="prism-previewer prism-previewer-"+this._type,document.body.appendChild(this._elt),this.initializer&&this.initializer())},o.prototype.check=function(t){do if(e.test(t.className)&&this._clsRegexp.test(t.className))break;while(t=t.parentNode);t&&t!==this._token&&(this._token=t,this.show())},o.prototype.mouseout=function(){this._token.removeEventListener("mouseout",this._mouseout,!1),this._token=null,this.hide()},o.prototype.show=function(){if(this._elt||this.init(),this._token)if(this.updater.call(this._elt,this._token.textContent)){this._token.addEventListener("mouseout",this._mouseout,!1);var e=t(this._token);this._elt.className+=" active",e.top-this._elt.offsetHeight>0?(this._elt.className=this._elt.className.replace(i,""),this._elt.style.top=e.top+"px",this._elt.style.bottom=""):(this._elt.className+=" flipped",this._elt.style.bottom=e.bottom+"px",this._elt.style.top=""),this._elt.style.left=e.left+Math.min(200,this._token.offsetWidth/2)+"px"}else this.hide()},o.prototype.hide=function(){this._elt.className=this._elt.className.replace(s,"")},o.byLanguages={},o.byType={},o.initEvents=function(t,e){var s=[];o.byLanguages[e]&&(s=s.concat(o.byLanguages[e])),o.byLanguages["*"]&&(s=s.concat(o.byLanguages["*"])),t.addEventListener("mouseover",function(t){var e=t.target;s.forEach(function(t){t.check(e)})},!1)},Prism.plugins.Previewer=o,Prism.hooks.add("after-highlight",function(t){(o.byLanguages["*"]||o.byLanguages[t.language])&&o.initEvents(t.element,t.language)})}}();
!function(){if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism)){var e={css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]};Prism.hooks.add("before-highlight",function(a){if(a.language&&e[a.language]&&!e[a.language].initialized){var i=e[a.language];"Array"!==Prism.util.type(i)&&(i=[i]),i.forEach(function(i){var r,l,n,s;i===!0?(r="important",l=a.language,i=a.language):(r=i.before||"important",l=i.inside||i.lang,n=i.root||Prism.languages,s=i.skip,i=a.language),!s&&Prism.languages[i]&&(Prism.languages.insertBefore(l,r,{color:/\B#(?:[0-9a-f]{3}){1,2}\b|\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i},n),a.grammar=Prism.languages[i],e[a.language]={initialized:!0})})}}),Prism.plugins.Previewer&&new Prism.plugins.Previewer("color",function(e){return this.style.backgroundColor="",this.style.backgroundColor=e,!!this.style.backgroundColor})}}();
!function(){if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism)){var e={css:!0,less:!0,sass:[{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]};Prism.hooks.add("before-highlight",function(i){if(i.language&&e[i.language]&&!e[i.language].initialized){var t=e[i.language];"Array"!==Prism.util.type(t)&&(t=[t]),t.forEach(function(t){var r,s,a,n;t===!0?(r=Prism.plugins.Previewer&&Prism.plugins.Previewer.byType.color?"color":"important",s=i.language,t=i.language):(r=t.before||"important",s=t.inside||t.lang,a=t.root||Prism.languages,n=t.skip,t=i.language),!n&&Prism.languages[t]&&(Prism.languages.insertBefore(s,r,{gradient:{pattern:/(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,inside:{"function":/[\w-]+(?=\()/,punctuation:/[(),]/}}},a),i.grammar=Prism.languages[t],e[i.language]={initialized:!0})})}});var i={},t=function(e,i,t){var r="180deg";return/^(?:-?\d*\.?\d+(?:deg|rad)|to\b|top|right|bottom|left)/.test(t[0])&&(r=t.shift(),r.indexOf("to ")<0&&(r.indexOf("top")>=0?r=r.indexOf("left")>=0?"to bottom right":r.indexOf("right")>=0?"to bottom left":"to bottom":r.indexOf("bottom")>=0?r=r.indexOf("left")>=0?"to top right":r.indexOf("right")>=0?"to top left":"to top":r.indexOf("left")>=0?r="to right":r.indexOf("right")>=0?r="to left":e&&(r.indexOf("deg")>=0?r=90-parseFloat(r)+"deg":r.indexOf("rad")>=0&&(r=Math.PI/2-parseFloat(r)+"rad")))),i+"("+r+","+t.join(",")+")"},r=function(e,i,t){if(t[0].indexOf("at")<0){var r="center",s="ellipse",a="farthest-corner";if(/\bcenter|top|right|bottom|left\b|^\d+/.test(t[0])&&(r=t.shift().replace(/\s*-?\d+(?:rad|deg)\s*/,"")),/\bcircle|ellipse|closest|farthest|contain|cover\b/.test(t[0])){var n=t.shift().split(/\s+/);!n[0]||"circle"!==n[0]&&"ellipse"!==n[0]||(s=n.shift()),n[0]&&(a=n.shift()),"cover"===a?a="farthest-corner":"contain"===a&&(a="clothest-side")}return i+"("+s+" "+a+" at "+r+","+t.join(",")+")"}return i+"("+t.join(",")+")"},s=function(e){if(i[e])return i[e];var s=e.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),a=s&&s[1],n=s&&s[2],l=e.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g,"").split(/\s*,\s*/);return i[e]=n.indexOf("linear")>=0?t(a,n,l):n.indexOf("radial")>=0?r(a,n,l):n+"("+l.join(",")+")"};Prism.plugins.Previewer&&new Prism.plugins.Previewer("gradient",function(e){return this.firstChild.style.backgroundImage="",this.firstChild.style.backgroundImage=s(e),!!this.firstChild.style.backgroundImage},"*",function(){this._elt.innerHTML="<div></div>"})}}();
!function(){if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism)){var e={css:!0,less:!0,sass:[{lang:"sass",inside:"inside",before:"punctuation",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]};Prism.hooks.add("before-highlight",function(r){if(r.language&&e[r.language]&&!e[r.language].initialized){var s=e[r.language];"Array"!==Prism.util.type(s)&&(s=[s]),s.forEach(function(s){var i,a,n,t;s===!0?(i="important",a=r.language,s=r.language):(i=s.before||"important",a=s.inside||s.lang,n=s.root||Prism.languages,t=s.skip,s=r.language),!t&&Prism.languages[s]&&(Prism.languages.insertBefore(a,i,{easing:/\bcubic-bezier\((?:-?\d*\.?\d+,\s*){3}-?\d*\.?\d+\)\B|\b(?:linear|ease(?:-in)?(?:-out)?)(?=\s|[;}]|$)/i},n),r.grammar=Prism.languages[s],e[r.language]={initialized:!0})})}}),Prism.plugins.Previewer&&new Prism.plugins.Previewer("easing",function(e){e={linear:"0,0,1,1",ease:".25,.1,.25,1","ease-in":".42,0,1,1","ease-out":"0,0,.58,1","ease-in-out":".42,0,.58,1"}[e]||e;var r=e.match(/-?\d*\.?\d+/g);if(4===r.length){r=r.map(function(e,r){return 100*(r%2?1-e:e)}),this.querySelector("path").setAttribute("d","M0,100 C"+r[0]+","+r[1]+", "+r[2]+","+r[3]+", 100,0");var s=this.querySelectorAll("line");return s[0].setAttribute("x2",r[0]),s[0].setAttribute("y2",r[1]),s[1].setAttribute("x2",r[2]),s[1].setAttribute("y2",r[3]),!0}return!1},"*",function(){this._elt.innerHTML='<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url('+location.href+'#prism-previewer-easing-marker)" marker-end="url('+location.href+'#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url('+location.href+'#prism-previewer-easing-marker)" marker-end="url('+location.href+'#prism-previewer-easing-marker)" /></svg>'})}}();
!function(){if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism)){var s={css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]},{lang:"sass",before:"operator",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]};Prism.hooks.add("before-highlight",function(e){if(e.language&&s[e.language]&&!s[e.language].initialized){var a=s[e.language];"Array"!==Prism.util.type(a)&&(a=[a]),a.forEach(function(a){var i,r,n,l;a===!0?(i="important",r=e.language,a=e.language):(i=a.before||"important",r=a.inside||a.lang,n=a.root||Prism.languages,l=a.skip,a=e.language),!l&&Prism.languages[a]&&(Prism.languages.insertBefore(r,i,{time:/(?:\b|\B-|(?=\B\.))\d*\.?\d+m?s\b/i},n),e.grammar=Prism.languages[a],s[e.language]={initialized:!0})})}}),Prism.plugins.Previewer&&new Prism.plugins.Previewer("time",function(s){var e=parseFloat(s),a=s.match(/[a-z]+$/i);return e&&a?(a=a[0],this.querySelector("circle").style.animationDuration=2*e+a,!0):!1},"*",function(){this._elt.innerHTML='<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'})}}();
!function(){if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism)){var a={css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]},{lang:"sass",before:"operator",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]}],scss:!0,stylus:[{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]};Prism.hooks.add("before-highlight",function(s){if(s.language&&a[s.language]&&!a[s.language].initialized){var e=a[s.language];"Array"!==Prism.util.type(e)&&(e=[e]),e.forEach(function(e){var i,r,n,g;e===!0?(i="important",r=s.language,e=s.language):(i=e.before||"important",r=e.inside||e.lang,n=e.root||Prism.languages,g=e.skip,e=s.language),!g&&Prism.languages[e]&&(Prism.languages.insertBefore(r,i,{angle:/(?:\b|\B-|(?=\B\.))\d*\.?\d+(?:deg|g?rad|turn)\b/i},n),s.grammar=Prism.languages[e],a[s.language]={initialized:!0})})}}),Prism.plugins.Previewer&&new Prism.plugins.Previewer("angle",function(a){var s,e,i=parseFloat(a),r=a.match(/[a-z]+$/i);if(!i||!r)return!1;switch(r=r[0]){case"deg":s=360;break;case"grad":s=400;break;case"rad":s=2*Math.PI;break;case"turn":s=1}return e=100*i/s,e%=100,this[(0>i?"set":"remove")+"Attribute"]("data-negative",""),this.querySelector("circle").style.strokeDasharray=Math.abs(e)+",500",!0},"*",function(){this._elt.innerHTML='<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'})}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&document.createElement){var e={javascript:"clike",actionscript:"javascript",aspnet:"markup",bison:"c",c:"clike",csharp:"clike",cpp:"c",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",fsharp:"clike",glsl:"clike",go:"clike",groovy:"clike",haml:"ruby",handlebars:"markup",haxe:"clike",jade:"javascript",java:"clike",kotlin:"clike",less:"css",markdown:"markup",nginx:"clike",objectivec:"c",parser:"markup",php:"clike","php-extras":"php",processing:"clike",qore:"clike",jsx:["markup","javascript"],ruby:"clike",sass:"css",scss:"css",scala:"java",smarty:"markup",swift:"clike",textile:"markup",twig:"markup",typescript:"javascript",wiki:"markup"},c={},a=Prism.plugins.autoloader={languages_path:"components/",use_minified:!0},s=function(e,c,a){var s=document.createElement("script");s.src=e,s.async=!0,s.onload=function(){document.body.removeChild(s),c&&c()},s.onerror=function(){document.body.removeChild(s),a&&a()},document.body.appendChild(s)},r=function(e){return a.languages_path+"prism-"+e+(a.use_minified?".min":"")+".js"},n=function(e,a){var s=c[e];s||(s=c[e]={});var r=a.getAttribute("data-dependencies");!r&&a.parentNode&&"pre"===a.parentNode.tagName.toLowerCase()&&(r=a.parentNode.getAttribute("data-dependencies")),r=r?r.split(/\s*,\s*/g):[],i(r,function(){t(e,function(){Prism.highlightElement(a)})})},i=function(e,c,a){"string"==typeof e&&(e=[e]);var s=0,r=e.length,n=function(){r>s?t(e[s],function(){s++,n()},function(){a&&a(e[s])}):s===r&&c&&c(e)};n()},t=function(a,n,t){var u=function(){var e=!1;a.indexOf("!")>=0&&(e=!0,a=a.replace("!",""));var i=c[a];if(i||(i=c[a]={}),n&&(i.success_callbacks||(i.success_callbacks=[]),i.success_callbacks.push(n)),t&&(i.error_callbacks||(i.error_callbacks=[]),i.error_callbacks.push(t)),!e&&Prism.languages[a])l(a);else if(!e&&i.error)o(a);else if(e||!i.loading){i.loading=!0;var u=r(a);s(u,function(){i.loading=!1,l(a)},function(){i.loading=!1,i.error=!0,o(a)})}},p=e[a];p&&p.length?i(p,u):u()},l=function(e){c[e]&&c[e].success_callbacks&&c[e].success_callbacks.length&&c[e].success_callbacks.forEach(function(c){c(e)})},o=function(e){c[e]&&c[e].error_callbacks&&c[e].error_callbacks.length&&c[e].error_callbacks.forEach(function(c){c(e)})};Prism.hooks.add("complete",function(e){e.element&&e.language&&!e.grammar&&n(e.language,e.element)})}}();