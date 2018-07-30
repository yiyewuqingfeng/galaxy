define("mvc/history/history-view",["exports","underscore","utils/localization","mvc/list/list-view","mvc/history/history-model","mvc/history/history-contents","mvc/history/hda-li","mvc/history/hdca-li","mvc/ui/error-modal","ui/fa-icon-button","mvc/base-mvc","mvc/history/history-view-edit","mvc/history/copy-dialog","ui/search-input","ui/mode-button"],function(e,t,i,s,n,o,l,r,a,d,c,h,u){"use strict";function g(e){return e&&e.__esModule?e:{default:e}}function f(e){$("#toggle-deleted").modeButton({initialMode:e.initialModeDeleted,modes:[{mode:"showing_deleted",html:(0,p.default)("Exclude deleted")},{mode:"not_showing_deleted",html:(0,p.default)("Include deleted")}]}),$("#toggle-hidden").modeButton({initialMode:e.initialModeHidden,modes:[{mode:"showing_hidden",html:(0,p.default)("Exclude hidden")},{mode:"not_showing_hidden",html:(0,p.default)("Include hidden")}]}),$("#switch").click(function(){var e=Galaxy.currHistoryPanel||window.top.Galaxy&&window.top.Galaxy.currHistoryPanel?window.top.Galaxy.currHistoryPanel:null;e?e.switchToHistory("${ history[ 'id' ] }"):window.location="${ switch_to_url }"}),e.hasMasthead&&$("#center").addClass("flex-vertical-container");var t=e.userIsOwner?C.default.HistoryViewEdit:S.HistoryView,i=new y.default.History(e.historyJSON);$("#import").click(function(){(0,H.default)(i,{useImport:!0,allDatasets:"showing_deleted"===$("#toggle-deleted").modeButton("getMode").mode}).done(function(){window===window.parent?window.location=Galaxy.root:Galaxy.currHistoryPanel&&Galaxy.currHistoryPanel.loadCurrentHistory()})});var s=new t({el:$("#history-"+e.historyJSON.id),className:t.prototype.className+" wide",$scrollContainer:e.hasMasthead?function(){return this.$el.parent()}:void 0,model:i,show_deleted:e.showDeletedJson,show_hidden:e.showHiddenJson,purgeAllowed:e.allow_user_dataset_purge});s.trigger("loading"),i.fetchContents({silent:!0}).fail(function(){alert("Galaxy history failed to load")}).done(function(){s.trigger("loading-done"),s.render()}),$("#toggle-deleted").on("click",function(){s.toggleShowDeleted()}),$("#toggle-hidden").on("click",function(){s.toggleShowHidden()})}Object.defineProperty(e,"__esModule",{value:!0}),e.historyEntry=f;var m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(t),p=g(i),v=g(s),y=g(n),w=g(o),_=g(l),I=g(r),x=g(a),b=g(d),P=g(c),C=g(h),H=g(u),M=v.default.ModelListPanel,S=M.extend({_logNamespace:"history",HDAViewClass:_.default.HDAListItemView,HDCAViewClass:I.default.HDCAListItemView,collectionClass:w.default.HistoryContents,modelCollectionKey:"contents",tagName:"div",className:M.prototype.className+" history-panel",emptyMsg:(0,p.default)("This history is empty"),noneFoundMsg:(0,p.default)("No matching datasets found"),searchPlaceholder:(0,p.default)("search datasets"),initialize:function(e){M.prototype.initialize.call(this,e),this.linkTarget=e.linkTarget||"_blank"},_createDefaultCollection:function(){return new this.collectionClass([],{history:this.model})},freeModel:function(){return M.prototype.freeModel.call(this),this.model&&this.model.stopPolling(),this},_setUpListeners:function(){M.prototype._setUpListeners.call(this),this.on({error:function(e,t,i,s,n){this.errorHandler(e,t,i,s,n)},"views:ready view:attached view:removed":function(e){this._renderSelectButton()},"view:attached":function(e){this.scrollTo(0)}})},loadHistory:function(e,t,i){var s=this;return i=m.extend(i||{silent:!0}),this.info("loadHistory:",e,t,i),this.setModel(new y.default.History({id:e})),i.silent=!0,this.trigger("loading"),this.model.fetchWithContents(t,i).always(function(){s.render(),s.trigger("loading-done")})},refreshContents:function(e){return this.model?this.model.refresh(e):$.when()},_setUpCollectionListeners:function(){return M.prototype._setUpCollectionListeners.call(this),this.listenTo(this.collection,{"fetching-more":function(){this._toggleContentsLoadingIndicator(!0),this.$emptyMessage().hide()},"fetching-more-done":function(){this._toggleContentsLoadingIndicator(!1)}})},_showLoadingIndicator:function(e,t,i){var s=$('<div class="loading-indicator"/>');this.$el.html(s.text(e).slideDown(m.isUndefined(t)?this.fxSpeed:t))},_hideLoadingIndicator:function(e){this.$(".loading-indicator").slideUp(m.isUndefined(e)?this.fxSpeed+200:e,function(){$(this).remove()})},_buildNewRender:function(){var e=M.prototype._buildNewRender.call(this);return this._renderSelectButton(e),e},_renderSelectButton:function(e){if(e=e||this.$el,!this.multiselectActions().length)return null;if(!this.views.length)return this.hideSelectors(),e.find(".controls .actions .show-selectors-btn").remove(),null;var t=e.find(".controls .actions .show-selectors-btn");return t.length?t:(0,b.default)({title:(0,p.default)("Operations on multiple datasets"),classes:"show-selectors-btn",faIcon:"fa-check-square-o",tooltipConfig:{placement:"top"}}).prependTo(e.find(".controls .actions"))},_renderEmptyMessage:function(e){var t=this.$emptyMessage(e);return this.model.get("contents_active").active<=0?t.empty().append(this.emptyMsg).show():this.searchFor&&this.model.contents.haveSearchDetails()&&!this.views.length?t.empty().append(this.noneFoundMsg).show():(t.hide(),$())},$scrollContainer:function(e){return this.$list(e)},_toggleContentsLoadingIndicator:function(e){e?this.$list().html('<div class="contents-loading-indicator"><span class="fa fa-2x fa-spinner fa-spin"/></div>'):this.$list().find(".contents-loading-indicator").remove()},renderItems:function(e){e=e||this.$el;var t=this.$list(e);$(".tooltip").remove(),t.empty(),this.views=[];var i=this._filterCollection();return i.length?(this._renderPagination(e),this.views=this._renderSomeItems(i,t)):e.find("> .controls .list-pagination").empty(),this._renderEmptyMessage(e).toggle(!i.length),this.trigger("views:ready",this.views),this.views},_renderPagination:function(e){var t=e.find("> .controls .list-pagination");return this.searchFor||!this.model.contents.shouldPaginate()?t.empty():(t.html(this.templates.pagination({current:this.model.contents.currentPage+1,last:this.model.contents.getLastPage()+1},this)),t.find("select.pages").tooltip(),t)},_renderSomeItems:function(e,t){var i=this,s=[];return t.append(e.map(function(e){var t=i._createItemView(e);return s.push(t),i._renderItemView$el(t)})),s},_filterItem:function(e){var t=this.model.contents;return(t.includeHidden||!e.hidden())&&(t.includeDeleted||!e.isDeletedOrPurged())&&M.prototype._filterItem.call(this,e)},_getItemViewClass:function(e){var t=e.get("history_content_type");switch(t){case"dataset":return this.HDAViewClass;case"dataset_collection":return this.HDCAViewClass}throw new TypeError("Unknown history_content_type: "+t)},_getItemViewOptions:function(e){var t=M.prototype._getItemViewOptions.call(this,e);return m.extend(t,{linkTarget:this.linkTarget,expanded:this.model.contents.storage.isExpanded(e.id),hasUser:this.model.ownedByCurrUser()})},_setUpItemViewListeners:function(e){var t=this;return M.prototype._setUpItemViewListeners.call(t,e),t.listenTo(e,{expanded:function(e){t.model.contents.storage.addExpanded(e.model)},collapsed:function(e){t.model.contents.storage.removeExpanded(e.model)}})},collapseAll:function(){this.model.contents.storage.clearExpanded(),M.prototype.collapseAll.call(this)},getSelectedModels:function(){var e=M.prototype.getSelectedModels.call(this);return e.historyId=this.collection.historyId,e},events:m.extend(m.clone(M.prototype.events),{"click .show-selectors-btn":"toggleSelectors","click > .controls .prev":"_clickPrevPage","click > .controls .next":"_clickNextPage","change > .controls .pages":"_changePageSelect","click .messages [class$=message]":"clearMessages"}),_clickPrevPage:function(e){this.model.stopPolling(),this.model.contents.fetchPrevPage()},_clickNextPage:function(e){this.model.stopPolling(),this.model.contents.fetchNextPage()},_changePageSelect:function(e){this.model.stopPolling();var t=$(e.currentTarget).val();this.model.contents.fetchPage(t)},toggleShowDeleted:function(e,t){e=void 0!==e?e:!this.model.contents.includeDeleted;var i=this.model.contents;return i.setIncludeDeleted(e,t),this.trigger("show-deleted",e),i.fetchCurrentPage({renderAll:!0}),e},toggleShowHidden:function(e,t,i){e=void 0!==e?e:!this.model.contents.includeHidden;var s=this.model.contents;return s.setIncludeHidden(e,i),this.trigger("show-hidden",e),s.fetchCurrentPage({renderAll:!0}),e},_firstSearch:function(e){var t=this;this.log("onFirstSearch",e),this.model.contents.haveSearchDetails()?this.searchItems(e):(this.$("> .controls .search-input").searchInput("toggle-loading"),this.searchFor=e,this.model.contents.progressivelyFetchDetails({silent:!0}).progress(function(e,i,s){t.renderItems(),t.trigger("search:loading-progress",i,s)}).always(function(){t.$el.find("> .controls .search-input").searchInput("toggle-loading")}).done(function(){t.searchItems(e,"force")}))},clearSearch:function(e){var t=this;return this.searchFor?(this.searchFor="",this.trigger("search:clear",this),this.$("> .controls .search-query").val(""),this.model.contents.fetchCurrentPage({silent:!0}).done(function(){t.renderItems()}),this):this},errorHandler:function(e,t,i){if(!t||0!==t.status||0!==t.readyState){if(this.error(e,t,i),m.isString(e)&&m.isString(t)){var s=e,n=t;return x.default.errorModal(s,n,i)}return t&&502===t.status?x.default.badGatewayErrorModal():x.default.ajaxErrorModal(e,t,i)}},clearMessages:function(e){return(m.isUndefined(e)?this.$messages().children('[class$="message"]'):$(e.currentTarget)).fadeOut(this.fxSpeed,function(){$(this).remove()}),this},scrollToHid:function(e){return this.scrollToItem(m.first(this.viewsWhereModel({hid:e})))},ordinalIndicator:function(e){var t=""+e;switch(t.charAt(t.length-1)){case"1":return t+"st";case"2":return t+"nd";case"3":return t+"rd";default:return t+"th"}},toString:function(){return"HistoryView("+(this.model?this.model.get("name"):"")+")"}});S.prototype.templates=function(){var e=P.default.wrapTemplate(['<div class="controls">','<div class="title">','<div class="name"><%- history.name %></div>',"</div>",'<div class="subtitle"></div>','<div class="history-size"><%- history.nice_size %></div>','<div class="actions"></div>','<div class="messages">',"<% if( history.deleted && history.purged ){ %>",'<div class="deleted-msg warningmessagesmall">',(0,p.default)("This history has been purged and deleted"),"</div>","<% } else if( history.deleted ){ %>",'<div class="deleted-msg warningmessagesmall">',(0,p.default)("This history has been deleted"),"</div>","<% } else if( history.purged ){ %>",'<div class="deleted-msg warningmessagesmall">',(0,p.default)("This history has been purged"),"</div>","<% } %>","<% if( history.message ){ %>",'<div class="<%= history.message.level || "info" %>messagesmall">',"<%= history.message.text %>","</div>","<% } %>","</div>",'<div class="tags-display"></div>','<div class="annotation-display"></div>','<div class="search">','<div class="search-input"></div>',"</div>",'<div class="list-actions">','<div class="btn-group">','<button class="select-all btn btn-secondary"','data-mode="select">',(0,p.default)("All"),"</button>",'<button class="deselect-all btn btn-secondary"','data-mode="select">',(0,p.default)("None"),"</button>","</div>",'<div class="list-action-menu btn-group">',"</div>","</div>",'<div class="list-pagination form-inline"></div>',"</div>"],"history"),t=P.default.wrapTemplate(['<button class="prev" <%- pages.current === 1 ? "disabled" : "" %>>previous</button>','<select class="pages form-control" ','title="',(0,p.default)("Click to open and select a page. Begin typing a page number to select it"),'">',"<% _.range( 1, pages.last + 1 ).forEach( function( i ){ %>",'<option value="<%- i - 1 %>" <%- i === pages.current ? "selected" : "" %>>',"<%- view.ordinalIndicator( i ) %> of <%- pages.last %> pages","</option>","<% }); %>","</select>",'<button class="next" <%- pages.current === pages.last ? "disabled" : "" %>>next</button>'],"pages");return m.extend(m.clone(M.prototype.templates),{el:function(){return'<div>\n            <div class="controls"></div>\n            <ul class="list-items"></ul>\n            <div class="empty-message infomessagesmall"></div>\',\n        </div>'},controls:e,pagination:t})}(),e.default={HistoryView:S,historyEntry:f}});