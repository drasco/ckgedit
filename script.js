/*
 * Customized by Misato Takahashi <misato@takahashi.name>
 *  - fix if Html document has "<!DOCTYPE>" then parse error.
 *  - fix if Attribute name includes "-" then parse error
 *  - fix if Unmatch case start tag and end tag then parse error
 *  - add function "getElementById"
 * 
 * Customised by drasco https://github.com/drasco
 *  - Bring over doku wiki <code> and htmlok support from ckgedit
 *  - Removed Misatos HTMLtoXML and toDOM, as not needed
 *
 *  HTML Parser By John Resig (ejohn.org)
 *  Original code by Erik Arvidsson, Mozilla Public License
 *  http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * // Use like so:
 * HTMLParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * // or to get an XML string:
 * HTMLtoXML(htmlString);
 *
 * // or to get an XML DOM Document
 * var dom = HTMLtoDOM(htmlString);
 *
 * dom.getElementById('id');
 * dom.getElementsByTagName('name');
 *
 * // or to inject into an existing document/DOM node
 * HTMLtoDOM(htmlString, document);
 * HTMLtoDOM(htmlString, document.body);
 *
 */

(function(){

	// Regular Expressions for parsing tags and attributes
	var startTag = /^<(\w+)((?:\s+[\w\-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
		endTag = /^<\/(\w+)[^>]*>/,
		attr = /(\w+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
		
	// Empty Elements - HTML 4.01
	var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");

	// Block Elements - HTML 4.01
	var block = makeMap("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul");

	// Inline Elements - HTML 4.01
	var inline = makeMap("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

	// Attributes that have their values filled in disabled="disabled"
	var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

	// Special Elements (can contain anything)
	var special = makeMap("script,style");
	

	var HTMLParser = this.HTMLParser = function( html, handler ) {
		var index, chars, match, stack = [], last = html;
		html = html.replace(/~~OPEN_HTML_BLOCK~~/gm , '~~START_HTML_BLOCK~~') ;
		html = html.replace(/~~END_HTML_BLOCK~~/gm , '~~CLOSE_HTML_BLOCK~~') ;
	   if(html.match(/~~START_HTML_BLOCK~~/gm) ){            //adopted [\s\S] from Goyvaerts, Reg. Exp. Cookbook (O'Reilly)
			if(!JSINFO['htmlok']) {
			   html = html.replace(/~~START_HTML_BLOCK~~|~~CLOSE_HTML_BLOCK~~/gm,"");
			  } 
	  
		   html = html.replace(/(<p.*?>)*\s*~~START_HTML_BLOCK~~\s*(<\/p>)*([\s\S]+)~~CLOSE_HTML_BLOCK~~\s*(<\/p>)*/gm, function(match,p,p1,text,p2) {       
		   text = text.replace(/<\/?div.*?>/gm,"");
		   text = text.replace(/<code>/gm,"");             
		   text = text.replace(/<\/code>/gm,"");             
		   text = text.replace(/</gm,"&lt;");
		   text = text.replace(/<\//gm,"&gt;");
		   return  "~~START_HTML_BLOCK~~\n\n" +   text  + "\n\n~~CLOSE_HTML_BLOCK~~\n\n";
	   }); 
	  }
	  /* remove dwfck note superscripts from inside links */
	  html = html.replace(/(<sup\s+class=\"dwfcknote fckgL\d+\"\>fckgL\d+\s*\<\/sup\>)\<\/a\>/gm, function(match,sup,a) {
		   return( '</a>' +sup);   
	   }
	 );

	 	  stack.last = function(){
			return this[ this.length - 1 ];
		};

		while ( html ) {
			chars = true;

			// Make sure we're not in a script or style element
			if ( !stack.last() || !special[ stack.last() ] ) {
				// Doctype
				if ( html.toLowerCase().indexOf('<!doctype') == 0 ) {
					index = html.indexOf('>');
					if (index >= 0) {
						if ( handler.comment )
							handler.comment( html.substring( 2, index ) );
						html = html.substring( index + 1 );
						chars = false;
					}
  				} else 
				// Comment
				if ( html.indexOf("<!--") == 0 ) {
					index = html.indexOf("-->");
	
					if ( index >= 0 ) {
						if ( handler.comment )
							handler.comment( html.substring( 4, index ) );
						html = html.substring( index + 3 );
						chars = false;
					}
	
				// end tag
				} else if ( html.indexOf("</") == 0 ) {
					match = html.match( endTag );
	
					if ( match ) {
						html = html.substring( match[0].length );
						match[0].replace( endTag, parseEndTag );
						chars = false;
					}
	
				// start tag
				} else if ( html.indexOf("<") == 0 ) {
					match = html.match( startTag );
	
					if ( match ) {
						html = html.substring( match[0].length );
						match[0].replace( startTag, parseStartTag );
						chars = false;
					}
				}

				if ( chars ) {
					index = html.indexOf("<");
					
					var text = index < 0 ? html : html.substring( 0, index );
					html = index < 0 ? "" : html.substring( index );
					
					if ( handler.chars )
						handler.chars( text );
				}

			} else {
				html = html.replace(new RegExp("(.*)<\/" + stack.last() + "[^>]*>", "i"), function(all, text){
					text = text.replace(/<!--(.*?)-->/g, "$1")
						.replace(/<!\[CDATA\[(.*?)]]>/g, "$1");

					if ( handler.chars )
						handler.chars( text );

					return "";
				});

				parseEndTag( "", stack.last() );
			}

			if ( html == last )
				throw "Parse Error: " + html;
			last = html;
		}
		
		// Clean up any remaining tags
		parseEndTag();

		function parseStartTag( tag, tagName, rest, unary ) {
			tagName = tagName.toLowerCase();
			if ( block[ tagName ] ) {
				while ( stack.last() && inline[ stack.last() ] ) {
					parseEndTag( "", stack.last() );
				}
			}

			if ( closeSelf[ tagName ] && stack.last() == tagName ) {
				parseEndTag( "", tagName );
			}

			unary = empty[ tagName ] || !!unary;

			if ( !unary )
				stack.push( tagName );
			
			if ( handler.start ) {
				var attrs = [];
	
				rest.replace(attr, function(match, name) {
					var value = arguments[2] ? arguments[2] :
						arguments[3] ? arguments[3] :
						arguments[4] ? arguments[4] :
						fillAttrs[name] ? name : "";
					
					attrs.push({
						name: name,
						value: value,
						escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
					});
				});
	
				if ( handler.start )
					handler.start( tagName, attrs, unary );
			}
		}

		function parseEndTag( tag, tagName ) {
			// If no tag name is provided, clean shop
			if ( !tagName )
				var pos = 0;

			// Find the closest opened tag of the same type
			else
				tagName = tagName.toLowerCase();
				for ( var pos = stack.length - 1; pos >= 0; pos-- )
					if ( stack[ pos ] == tagName )
						break;
			
			if ( pos >= 0 ) {
				// Close all the open elements, up the stack
				for ( var i = stack.length - 1; i >= pos; i-- )
					if ( handler.end )
						handler.end( stack[ i ] );
				
				// Remove the open elements from the stack
				stack.length = pos;
			}
		}
	};
	

	function makeMap(str){
		var obj = {}, items = str.split(",");
		for ( var i = 0; i < items.length; i++ )
			obj[ items[i] ] = true;
		return obj;
	}
})();


function HTMLParser_test_result(results) {

var test_str = "";
for ( i=0; i < results.length; i++) {
   var character = results.charAt(i);
   if(results.charCodeAt(i) == 10)
         character ='\\n';
   if(results.charCodeAt(i) == 32)  
         character ='SP';
   var entry =  character + ' ';
    
  test_str += entry;  
  if(results.charCodeAt(i) == 10) {
       test_str += "\n";
   }
}

if(!confirm(test_str)) return false;
return true;

}

function hide_backup_msg() {
  document.getElementById("backup_msg").style.display="none";
  return false;
}

function show_backup_msg(msg) {
  document.getElementById("backup_msg").style.display="block";
  document.getElementById("backup_msg_area").innerHTML = "Backed up to: " + msg;
  
  return false;
}

  // legacy functions 
 function remove_draft(){
 }

function dwedit_draft_delete() {
}
  // legacy functions  end
  
  function setEdHeight(h) {  
        h = parseInt(h);        
        document.cookie = 'ckgEdht=' + h +';expires="";path=' +JSINFO['doku_base'];
   }

  function ckgd_setImgPaste(which) {        
      var state = JSINFO['ckgEdPaste'] ? JSINFO['ckgEdPaste']  : "";
      if(state == 'on')  {
            which = 'off'  
      }
      else which = 'on';      
      JSINFO['ckgEdPaste'] = which;   
       document.cookie = 'ckgEdPaste=' + which +';expires="Thu, 18 Dec 2575 12:00:00 UTC";path=' +JSINFO['doku_base'];
      alert(LANG.plugins.ckgedit.ckg_paste_restart + ' ' + LANG.plugins.ckgedit[which]);    
   }

  function GetE(e) {
       return  document.getElementById(e);
  }
var dokuBase = location.host + DOKU_BASE;

 if(window.getSelection != undefined) {   
    var doku_ckg_getSelection = window.getSelection;
    window.getSelection = function(ta) {
        if(!ta) ta = GetE("wiki__text");       
        return doku_ckg_getSelection(ta);
    };
 }
 
 function ckgedit_seteditor_priority(m,client,dw_val_obj) {
       var which = {'Y': 'Dokuwiki', 'N': 'CKEditor'};

       if (typeof m === "undefined") {  // Safari
               if(dw_val_obj[0].checked) {
                   m= dw_val_obj[0].value;
               }
              else if(dw_val_obj[1].checked) {
                           m = dw_val_obj[1].value;
              }
       }
        var params = "dw_val=" +  m;   params += '&call=cked_selector';    params += "&dwp_client=" + client;
        jQuery.post( DOKU_BASE + 'lib/exe/ajax.php', params,
                function (data) {  
                    if(data == 'done') { 
                        if(!m)
                             alert(LANG.plugins.ckgedit.dwp_not_sel); 
                          else 
                             alert(LANG.plugins.ckgedit.dwp_updated + which[m]); 
                    }
                      else  {
                          alert(LANG.plugins.ckgedit.dwp_save_err + data); 
                      }   
                    },
                'html'
            );     
 }
 
 /* gets both size and filetime: "size||filetime" */
 function ckged_get_unlink_size(id) {
                var params = 'call=cked_deletedsize';    params += "&cked_delid=" + id;
                jQuery.post( DOKU_BASE + 'lib/exe/ajax.php', params,   
                function (data) {  
                    if(data) { 
                     JSINFO['ckg_del_sz'] = data;
                      //console.log(data);
                    }
                      else  {
                    //      alert(LANG.plugins.ckgedit.dwp_save_err + data); 
                      }   
                    },
                'html'
            );    
       
 }
 
 function ckged_setmedia(id,del, refresh_cb) {
	 
             var params = 'call=cked_upload';    params += "&ckedupl_id=" + id;
             if(del)  params += "&ckedupl_del=D&delsize="+JSINFO['ckg_del_sz'];
                jQuery.post( DOKU_BASE + 'lib/exe/ajax.php', params,   
                function (data) {  
                    if(data) { 
                      if(refresh_cb) {
                           refresh_cb.postMessage(JSINFO['doku_url'], JSINFO['doku_url']);
                      }
                      console.log(data);
                    }
                      else  {
                    //      alert(LANG.plugins.ckgedit.dwp_save_err + data); 
                      }   
                    },
                'html'
            );    
 }
 jQuery(document).ready(function() {
     if(JSINFO['hide_captcha_error'] =='hide') {
         jQuery("div.error").hide();
     }   
 });    

 
jQuery(document).ready(function(){

    jQuery( "#editor_height" ).keydown(function(event) { 
          if ( event.which == 13 ) {
           event.preventDefault();
        }
    });

    $dokuWiki = jQuery('.dokuwiki');
     jQuery('.editbutton_table button').click(function() {
           var f = this.form;
           jQuery('<input />').attr('type','hidden').attr('name','mode').attr('value','dwiki').appendTo(jQuery(f));
            jQuery('<input />').attr('type','hidden').attr('name','fck_preview_mode').attr('value','nil').appendTo(jQuery(f));
    });  
  
    if(typeof(JSINFO['dbl_click_auth'] !== 'undefined') && JSINFO['dbl_click_auth'] == "") return;  
    if(!JSINFO['ckg_dbl_click']) return;
   
    /**
     * If one or more edit section buttons exist?
     * This makes sure this feature is enabled only on the edit page and for users with page edit rights.
     */
    if (jQuery('.editbutton_section', $dokuWiki).length > 0) {

        // register double click event for all headings and section divs
        jQuery('[class^="sectionedit"], div[class^="level"]', $dokuWiki).dblclick(function(){
            // find the closest edit button form to the element double clicked (downwards) and submit the form
            var f =  jQuery(this).nextAll('.editbutton_section:eq(0)').children('form:eq(0)');
            //alert(jQuery(f).hasClass('button'));            
            jQuery('<input />').attr('type','hidden').attr('name','mode').attr('value','dwiki').appendTo(jQuery(f));
            jQuery('<input />').attr('type','hidden').attr('name','fck_preview_mode').attr('value','nil').appendTo(jQuery(f));
            f.submit();
        })
    }
    
   if(JSINFO['ckg_template'].match(/bootstrap/) && jQuery('div.editButtons').length>0) {       
      // var n=jQuery('div.editButtons input').length;
       jQuery( "div.editButtons input").each(function( index ) {
           if(jQuery(this).hasClass('btn-success')) {
               jQuery(this).removeClass('btn-success')
           }
           if(jQuery(this).hasClass('btn-danger')) {
               jQuery(this).removeClass('btn-danger');
           }
           
     });

   }

});
 
function ckg_edit_mediaman_insert(edid, id, opts, dw_align) {
    var link, width, s, align;

    //parse option string
    var options = opts.substring(1).split('&');

    //get width and link options
    link = 'detail';
    for (var i in options) {
        var opt = options[i];
         if (opt.match(/^\d+$/)) {   
            width = opt;
        } else  if (opt.match(/^\w+$/)) {   
            link = opt;
        }
    }

    //get alignment option
    switch (dw_align) {
    case '2':
        align = 'medialeft';
        break;
    case '3':
        align = 'mediacenter';
        break;
    case '4':
        align = 'mediaright';
        break;
    default:
        align = '';
        break;
    }

    var funcNum = CKEDITOR.instances.wiki__text._.filebrowserFn;
    var fileUrl = DOKU_BASE + 'lib/exe/fetch.php?media=' + id;
    CKEDITOR.tools.callFunction(funcNum, fileUrl, function() {
        var dialog = this.getDialog();
        if ( dialog.getName() == "image" ) {
            if (align != null) {
                dialog.getContentElement("info", "cmbAlign").setValue(align);
            }
            if (link != null) {
                dialog.getContentElement("info", "cmbLinkType").setValue(link);
            }
            if (width != null) {
                dialog.getContentElement("info", "txtWidth").setValue(width);
                dialog.dontResetSize = true;
            }
        }
    });
}

function ckg_edit_mediaman_insertlink(edid, id, opts, dw_align) {
    var funcNum = CKEDITOR.instances.wiki__text._.filebrowserFn;
    CKEDITOR.tools.callFunction(funcNum, id, function() {
        var dialog = this.getDialog();
        if (dialog.getName() == "link") {
            dialog.getContentElement('info', 'media').setValue(id);
        }
    });
}

function getCookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}
