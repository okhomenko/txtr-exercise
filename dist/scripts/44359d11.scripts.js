!function(a){"use strict";a.BLN={}}(window),function(a){"use strict";function b(){}function c(a){return JSON.parse(a)}function d(a){function d(){4===g.readyState&&("2"===(g.status+"").charAt(0)?(e="json"===a.dataType?c(g.responseText):g.responseText,(a.success||b)(e)):(a.error||b)(g))}a=a||{};var e,f,g=new XMLHttpRequest;return g.open("GET",a.url,!0),g.onreadystatechange=d,f=a.data,"undefined"!=typeof f&&(f="string"==typeof f?f:JSON.stringify(f)),g.send(f||""),g}function e(a){var b,c;if(b=document.createElement("div"),b.innerHTML=a,c=b.childNodes,c.length>1)throw new Error("Only one root node allowed");return c[0]}a.noop=b,a.ajax=d,a.compile=e}(window.BLN),function(a){"use strict";a.Store={template:'<div class="store-block"></div>',render:function(b){var c=this;return this.el=a.compile(this.template),this.searchBox=a.StoreSearchBox.render(function(a){c.el.appendChild(a)}),this.searchBox.onChange=this.fetchBooks.bind(this),this.storeBox=a.StoreBox.render(function(a){c.el.appendChild(a)}),(b||a.noop)(this.el),this},fetchError:function(){},fetchBooks:function(b){var c=this;a.ajax({url:"http://turbine-staging-eu.herokuapp.com/books?q="+b,success:c.storeBox.renderBooks.bind(c.storeBox),error:c.fetchError,dataType:"json"})}}}(window.BLN),function(a){"use strict";a.StoreBox={template:'<ul class="store-box book-box"></ul>',render:function(b){return this.el=a.compile(this.template),(b||a.noop)(this.el),this.bind(),this},bind:function(){this.handleDragStart()},handleDragStart:function(){this.el.addEventListener("dragstart",function(a){var b=a.target;return-1===[].indexOf.call(b.classList,"book")?!1:void a.dataTransfer.setData("application/json",JSON.stringify(b.model))},!1)},renderBooks:function(b){var c=this;this.el.innerHTML="",a.Books.render(b,function(a){c.el.appendChild(a)})}}}(window.BLN),function(a){"use strict";a.StoreSearchBox={template:['<div class="search-box">',"<label><span>Search:</span></label>",'<input autofocus type="search" class="query" />',"</div>"].join(""),render:function(b){return this.el=a.compile(this.template),this.q=this.el.querySelector(".query"),(b||a.noop)(this.el),this.bind(),this},bind:function(){this.handleEnter()},handleEnter:function(){var a=this;this.el.addEventListener("keydown",function(b){var c=b.keyCode||b.which;if(13===c){var d=a.q.value.trim();""!==d&&a.onChange(d)}})}}}(window.BLN),function(a){"use strict";a.ShelfCollection={lsKey:"BLN-shelf",init:function(){this.models=JSON.parse(localStorage.getItem(this.lsKey)||"[]")},add:function(a){this.models.push(a),this.save(),console.log(JSON.stringify(this.models))},save:function(){localStorage.setItem(this.lsKey,JSON.stringify(this.models))},exists:function(a){var b=a.udid;return this.models.some(function(a){return a.udid===b})}}}(window.BLN),function(a){"use strict";a.Shelf={template:['<div class="shelf-block">','<p class="dnd-placeholder">Drag and drop</p>','<label>Shelf <span class="amount"></span>: ','<span class="exists-warn hide">This book already is in the list</span>',"</label>","</div>"].join(""),render:function(b){var c=this;return this.el=a.compile(this.template),this.amount=this.el.querySelector(".amount"),this.existsWarn=this.el.querySelector(".exists-warn"),(b||a.noop)(this.el),this.shelfBox=a.ShelfBox.render(function(a){c.el.appendChild(a)}),this.collection=a.ShelfCollection,this.collection.init(),this.renderBooks(),this.bind(),this},updateAmount:function(){var a=this.collection.models.length;0!==a&&(this.amount.innerText="("+a+")")},renderBooks:function(){this.shelfBox.renderBooks(this.collection.models),this.updateAmount()},showExistsWarn:function(){this.existsWarn.classList.remove("hide"),setTimeout(this.hideExistsWarn.bind(this),3e3)},hideExistsWarn:function(){this.existsWarn.classList.add("hide")},handleDragOver:function(a){return a.preventDefault&&a.preventDefault(),!1},handleDrop:function(a){var b,c=this;if(b=a.dataTransfer.getData("application/json"),!b)return!1;var d=JSON.parse(b);return c.collection.exists(d)?(c.showExistsWarn(),!1):(c.collection.add(d),c.renderBooks(),!1)},bind:function(){this.el.addEventListener("dragover",this.handleDragOver),this.el.addEventListener("drop",this.handleDrop.bind(this))}}}(window.BLN),function(a){"use strict";a.ShelfBox={template:'<ul class="shelf-box book-box"></ul>',render:function(b){return this.el=a.compile(this.template),this.renderPlaceholder(),(b||a.noop)(this.el),this.bind(),this},clearEl:function(){this.el.innerHTML="",this.renderPlaceholder()},renderPlaceholder:function(){var b=this;a.BookPlaceholder.render(function(a){b.el.appendChild(a),a.innerText="Drop here"})},renderBooks:function(b){var c=this;a.Books.render(b,function(a){c.el.appendChild(a)})},bind:function(){this.handleDragStart()},handleDragStart:function(){this.el.addEventListener("dragstart",function(a){var b=a.target;return-1===[].indexOf.call(b.classList,"book")?!1:void a.dataTransfer.setData("application/json",JSON.stringify(b.model))},!1)}}}(window.BLN),function(a){"use strict";a.BookPlaceholder={template:'<li class="book placeholder"></li>',render:function(b){this.cachedEl=this.cachedEl||a.compile(this.template);var c=this.cachedEl.cloneNode(!0);(b||a.noop)(c)}}}(window.BLN),function(a){"use strict";a.Books={render:function(b,c){var d=document.createDocumentFragment();return b.map(a.Book.render.bind(a.Book)).forEach(function(a){d.appendChild(a)}),(c||a.noop)(d),d}}}(window.BLN),function(a){"use strict";a.Book={template:['<li class="book" draggable="true">','<div class="img" />',"</li>"].join(""),render:function(b){this.cachedEl=this.cachedEl||a.compile(this.template);var c=this.cachedEl.cloneNode(!0);return c.querySelector(".img").style.backgroundImage='url("'+b.cover_image_url+'")',c.model=b,c}}}(window.BLN),function(a,b){"use strict";var c=b.Store.render(),d=b.Shelf.render();document.querySelector(".bln-container").appendChild(c.el),document.querySelector(".bln-container").appendChild(d.el)}(window,window.BLN);