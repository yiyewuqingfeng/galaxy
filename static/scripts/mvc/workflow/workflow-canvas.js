<<<<<<< HEAD
define([],function(){function a(a,b,c){this.app=a,this.cv=b,this.cc=this.cv.find("#canvas-container"),this.overview=c,this.oc=c.find("#overview-canvas"),this.ov=c.find("#overview-viewport"),this.init_drag()}function b(a){this.panel=a}return $.extend(a.prototype,{init_drag:function(){var a=this,c=function(b,c){b=Math.min(b,a.cv.width()/2),b=Math.max(b,-a.cc.width()+a.cv.width()/2),c=Math.min(c,a.cv.height()/2),c=Math.max(c,-a.cc.height()+a.cv.height()/2),a.cc.css({left:b,top:c}),a.cv.css({"background-position-x":b,"background-position-y":c}),a.update_viewport_overlay()};this.cc.each(function(){this.scroll_panel=new b(this)});var d,e;this.cv.bind("dragstart",function(){var b=$(this).offset(),c=a.cc.position();e=c.top-b.top,d=c.left-b.left}).bind("drag",function(a,b){c(b.offsetX+d,b.offsetY+e)}).bind("dragend",function(){a.app.workflow.fit_canvas_to_nodes(),a.draw_overview()}),this.overview.click(function(b){if(a.overview.hasClass("blockaclick"))a.overview.removeClass("blockaclick");else{var d=a.cc.width(),e=a.cc.height(),f=a.oc.width(),g=a.oc.height(),h=b.pageX-a.oc.offset().left-a.ov.width()/2,i=b.pageY-a.oc.offset().top-a.ov.height()/2;c(-(h/f*d),-(i/g*e)),a.app.workflow.fit_canvas_to_nodes(),a.draw_overview()}}),this.ov.bind("drag",function(b,d){var e=a.cc.width(),f=a.cc.height(),g=a.oc.width(),h=a.oc.height(),i=d.offsetX-a.overview.offset().left,j=d.offsetY-a.overview.offset().top;c(-(i/g*e),-(j/h*f))}).bind("dragend",function(){a.overview.addClass("blockaclick"),a.app.workflow.fit_canvas_to_nodes(),a.draw_overview()}),$("#overview-border").bind("drag",function(b,c){var d=$(this).offsetParent(),e=d.offset(),f=Math.max(d.width()-(c.offsetX-e.left),d.height()-(c.offsetY-e.top));$(this).css({width:f,height:f}),a.draw_overview()}),$("#overview-border div").bind("drag",function(){})},update_viewport_overlay:function(){var a=this.cc,b=this.cv,c=this.oc,d=this.ov,e=a.width(),f=a.height(),g=c.width(),h=c.height(),i=a.position();d.css({left:-(i.left/e*g),top:-(i.top/f*h),width:b.width()/e*g-2,height:b.height()/f*h-2})},draw_overview:function(){var a,b,c,d,e=$("#overview-canvas"),f=e.parent().parent().width(),g=e.get(0).getContext("2d"),h=$("#canvas-container").width(),i=$("#canvas-container").height(),j=this.cv.width(),k=this.cv.height();h<j&&i<k?(c=h/j*f,d=(f-c)/2,a=i/k*f,b=(f-a)/2):h<i?(b=0,a=f,c=Math.ceil(a*h/i),d=(f-c)/2):(c=f,d=0,a=Math.ceil(c*i/h),b=(f-a)/2),e.parent().css({left:d,top:b,width:c,height:a}),e.attr("width",c),e.attr("height",a),$.each(this.app.workflow.nodes,function(b,d){g.fillStyle="#D2C099",g.strokeStyle="#D8B365",g.lineWidth=1;var e=$(d.element),f=e.position(),j=f.left/h*c,k=f.top/i*a,l=e.width()/h*c,m=e.height()/i*a;d.tool_errors?(g.fillStyle="#FFCCCC",g.strokeStyle="#AA6666"):void 0!==d.workflow_outputs&&d.workflow_outputs.length>0&&(g.fillStyle="#E8A92D",g.strokeStyle="#E8A92D"),g.fillRect(j,k,l,m),g.strokeRect(j,k,l,m)}),this.update_viewport_overlay()}}),$.extend(b.prototype,{test:function(a,b){clearTimeout(this.timeout);var c=a.pageX,d=a.pageY,e=$(this.panel),f=e.position(),g=e.width(),h=e.height(),i=e.parent(),j=i.width(),k=i.height(),l=i.offset(),m=l.left,n=l.top,o=m+i.width(),p=n+i.height(),q=-(g-j/2),r=-(h-k/2),s=j/2,t=k/2,u=!1,v=5,w=23;if(c-v<m){if(f.left<s){var x=Math.min(w,s-f.left);e.css("left",f.left+x),u=!0}}else if(c+v>o){if(f.left>q){var x=Math.min(w,f.left-q);e.css("left",f.left-x),u=!0}}else if(d-v<n){if(f.top<t){var x=Math.min(w,t-f.top);e.css("top",f.top+x),u=!0}}else if(d+v>p&&f.top>r){var x=Math.min(w,f.top-q);e.css("top",f.top-x+"px"),u=!0}if(u){b();var e=this;this.timeout=setTimeout(function(){e.test(a,b)},50)}},stop:function(a,b){clearTimeout(this.timeout)}}),a});
=======
define([],function(){function a(a,b,c){this.app=a,this.cv=b,this.cc=this.cv.find("#canvas-container"),this.overview=c,this.oc=c.find("#overview-canvas"),this.ov=c.find("#overview-viewport"),this.init_drag()}function b(a){this.panel=a}return $.extend(a.prototype,{init_drag:function(){var a=this,c=function(b,c){b=Math.min(b,a.cv.width()/2),b=Math.max(b,-a.cc.width()+a.cv.width()/2),c=Math.min(c,a.cv.height()/2),c=Math.max(c,-a.cc.height()+a.cv.height()/2),a.cc.css({left:b,top:c}),a.cv.css({"background-position-x":b,"background-position-y":c}),a.update_viewport_overlay()};this.cc.each(function(){this.scroll_panel=new b(this)});var d,e;this.cv.bind("dragstart",function(){var b=$(this).offset(),c=a.cc.position();e=c.top-b.top,d=c.left-b.left}).bind("drag",function(a,b){c(b.offsetX+d,b.offsetY+e)}).bind("dragend",function(){a.app.workflow.fit_canvas_to_nodes(),a.draw_overview()}),this.overview.click(function(b){if(a.overview.hasClass("blockaclick"))a.overview.removeClass("blockaclick");else{var d=a.cc.width(),e=a.cc.height(),f=a.oc.width(),g=a.oc.height(),h=b.pageX-a.oc.offset().left-a.ov.width()/2,i=b.pageY-a.oc.offset().top-a.ov.height()/2;c(-(h/f*d),-(i/g*e)),a.app.workflow.fit_canvas_to_nodes(),a.draw_overview()}}),this.ov.bind("drag",function(b,d){var e=a.cc.width(),f=a.cc.height(),g=a.oc.width(),h=a.oc.height(),i=d.offsetX-a.overview.offset().left,j=d.offsetY-a.overview.offset().top;c(-(i/g*e),-(j/h*f))}).bind("dragend",function(){a.overview.addClass("blockaclick"),a.app.workflow.fit_canvas_to_nodes(),a.draw_overview()}),$("#overview-border").bind("drag",function(b,c){var d=$(this).offsetParent(),e=d.offset(),f=Math.max(d.width()-(c.offsetX-e.left),d.height()-(c.offsetY-e.top));$(this).css({width:f,height:f}),a.draw_overview()}),$("#overview-border div").bind("drag",function(){})},update_viewport_overlay:function(){var a=this.cc,b=this.cv,c=this.oc,d=this.ov,e=a.width(),f=a.height(),g=c.width(),h=c.height(),i=a.position();d.css({left:-(i.left/e*g),top:-(i.top/f*h),width:b.width()/e*g-2,height:b.height()/f*h-2})},draw_overview:function(){var a,b,c,d,e=$("#overview-canvas"),f=e.parent().parent().width(),g=e.get(0).getContext("2d"),h=$("#canvas-container").width(),i=$("#canvas-container").height(),j=this.cv.width(),k=this.cv.height();h<j&&i<k?(c=h/j*f,d=(f-c)/2,a=i/k*f,b=(f-a)/2):h<i?(b=0,a=f,c=Math.ceil(a*h/i),d=(f-c)/2):(c=f,d=0,a=Math.ceil(c*i/h),b=(f-a)/2),e.parent().css({left:d,top:b,width:c,height:a}),e.attr("width",c),e.attr("height",a),$.each(this.app.workflow.nodes,function(b,d){g.fillStyle="#D2C099",g.strokeStyle="#D8B365",g.lineWidth=1;var e=$(d.element),f=e.position(),j=f.left/h*c,k=f.top/i*a,l=e.width()/h*c,m=e.height()/i*a;d.errors?(g.fillStyle="#FFCCCC",g.strokeStyle="#AA6666"):void 0!==d.workflow_outputs&&d.workflow_outputs.length>0&&(g.fillStyle="#E8A92D",g.strokeStyle="#E8A92D"),g.fillRect(j,k,l,m),g.strokeRect(j,k,l,m)}),this.update_viewport_overlay()}}),$.extend(b.prototype,{test:function(a,b){clearTimeout(this.timeout);var c=a.pageX,d=a.pageY,e=$(this.panel),f=e.position(),g=e.width(),h=e.height(),i=e.parent(),j=i.width(),k=i.height(),l=i.offset(),m=l.left,n=l.top,o=m+i.width(),p=n+i.height(),q=-(g-j/2),r=-(h-k/2),s=j/2,t=k/2,u=!1,v=5,w=23;if(c-v<m){if(f.left<s){var x=Math.min(w,s-f.left);e.css("left",f.left+x),u=!0}}else if(c+v>o){if(f.left>q){var x=Math.min(w,f.left-q);e.css("left",f.left-x),u=!0}}else if(d-v<n){if(f.top<t){var x=Math.min(w,t-f.top);e.css("top",f.top+x),u=!0}}else if(d+v>p&&f.top>r){var x=Math.min(w,f.top-q);e.css("top",f.top-x+"px"),u=!0}if(u){b();var e=this;this.timeout=setTimeout(function(){e.test(a,b)},50)}},stop:function(a,b){clearTimeout(this.timeout)}}),a});
>>>>>>> 602712a... Rename error identifier to indicate generic step related error
//# sourceMappingURL=../../../maps/mvc/workflow/workflow-canvas.js.map