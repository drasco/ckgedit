function parse_wikitext(z){if(ckgedit_dwedit_reject){var f=GetE("ebut_cancel");f.click();return true}var x=getComplexTables();function n(Q,R,L){var O=new Array();for(var N=R;N<Q.length;N++){for(var M=0;M<Q[N].length;M++){if(Q[N][M].rowspan>0){var P=Q[N][M].text;O.push({row:N,column:M,spans:Q[N][M].rowspan,text:P});if(!L){break}}}}return O}function B(P,L,N,O,i){var M=O[P][L].colspan?O[P][L].colspan:0;O[P][L].rowspan=0;for(I=0;I<N-1;I++){O[++P].splice(L,0,{type:"td",rowspan:0,colspan:M,prev_colspan:M,text:" ::: "})}}function w(Q){var N=n(Q,0,true);var L=N.length;if(!L){return false}var R=N[0].row;var M=N[0].column;B(R,M,N[0].spans,Q);L--;for(var P=0;P<L;P++){R++;var O=n(Q,R,false);if(O.length){B(O[0].row,O[0].column,O[0].spans,Q)}}return true}function m(O){if(!x){return}for(var M=0;M<O.length;M++){if(!w(O)){break}}q+="\n";for(var M=0;M<O.length;M++){q+="\n";for(var L=0;L<O[M].length;L++){var N=O[M][L].type=="td"?"|":"^";q+=N;var Q=O[M][L].align?O[M][L].align:false;if(Q=="center"||Q=="right"){q+="  "}q+=O[M][L].text;if(Q=="center"||Q=="left"){q+="  "}if(O[M][L].colspan){for(var P=0;P<O[M][L].colspan-1;P++){q+=N}}}q+="|"}}window.dwfckTextChanged=false;if(z!="bakup"){draft_delete()}var t="\nL_BR_K  \n";var C={b:"**",i:"//",em:"//",u:"__",br:t,strike:"<del>",del:"<del>",s:"<del>",p:"\n\n",a:"[[",img:"{{",strong:"**",h1:"\n====== ",h2:"\n===== ",h3:"\n==== ",h4:"\n=== ",h5:"\n== ",td:"|",th:"^",tr:" ",table:"\n\n",ol:"  - ",ul:"  * ",li:"",code:"''",pre:"\n<",hr:"\n\n----\n\n",sub:"<sub>",font:"\n",sup:"<sup>",div:"\n\n",span:"\n",dl:"\n",dd:"\n",dt:"\n"};var o={del:"</del>",s:"</del>",strike:"</del>",p:" ",br:" ",a:"]]",img:"}}",h1:" ======\n",h2:" =====\n",h3:" ====\n",h4:" ===\n",h5:" ==\n",td:" ",th:" ",tr:"|\n",ol:" ",ul:" ",li:"\n",pre:"\n</",sub:"</sub>",sup:"</sup> ",div:"\n\n",p:"\n\n",font:"\n\n</font> ",span:" "};C.temp_u="CKGE_TMP_u";C.temp_strong="CKGE_TMP_strong";C.temp_em="CKGE_TMP_em";C.temp_i="CKGE_TMP_i";C.temp_b="CKGE_TMP_b";C.temp_del="CKGE_TMP_del";C.temp_strike="CKGE_TMP_strike";C.temp_code="CKGE_TMP_code";C.temp_sup="CKGE_TMP_sup";C.temp_csup="CKGE_TMP_csup";C.temp_sub="CKGE_TMP_sub";C.temp_csub="CKGE_TMP_csub";C.temp_del="CKGE_TMP_del";C.temp_cdel="CKGE_TMP_cdel";C.temp_strike="CKGE_TMP_del";C.temp_cstrike="CKGE_TMP_cdel";C.temp_s="CKGE_TMP_del";C.temp_cs="CKGE_TMP_cdel";var l={CKGE_TMP_b:"**",CKGE_TMP_strong:"**",CKGE_TMP_em:"//",CKGE_TMP_u:"__",CKGE_TMP_sup:"<sup>",CKGE_TMP_sub:"<sub>",CKGE_TMP_csub:"</sub>",CKGE_TMP_csup:"</sup>",CKGE_TMP_del:"<del>",CKGE_TMP_strike:"<del>",CKGE_TMP_code:"''"};C.blank="";C.fn_start="((";C.fn_end="))";C.row_span=":::";C.p_insert="_PARA__TABLE_INS_";C.format_space="_FORMAT_SPACE_";C.pre_td="<";var s={strong:true,b:true,i:true,em:true,u:true,del:true,strike:true,code:true,sup:true,sub:true,s:true};var q="";var K=false;var r=false;var b=false;var H=false;var h=false;var F=false;var J=false;var G=false;var g=false;var E=false;var y;var c=new Array();var v=new Array();var e=false;var d=C.p_insert;var D="(br|co|coMULTI|es|kw|me|nu|re|st|sy)[0-9]";String.prototype.splice=function(i,M,L){return(this.slice(0,i)+L+this.slice(i+Math.abs(M)))};String.frasl=new RegExp("⁄|&frasl;|&#8260;|&#x2044;","g");D=new RegExp(D);HTMLParser(CKEDITOR.instances.wiki__text.getData(),{attribute:"",link_title:"",link_class:"",image_link_type:"",td_align:"",in_td:false,td_colspan:0,td_rowspan:0,rowspan_col:0,last_column:-1,row:0,col:0,td_no:0,tr_no:0,current_row:false,in_table:false,in_multi_plugin:false,is_rowspan:false,list_level:0,prev_list_level:-1,list_started:false,xcl_markup:false,in_link:false,link_formats:new Array(),last_tag:"",code_type:false,in_endnotes:false,is_smiley:false,geshi:false,downloadable_code:false,export_code:false,code_snippet:false,downloadable_file:"",external_mime:false,in_header:false,curid:false,format_in_list:false,prev_li:new Array(),link_only:false,in_font:false,interwiki:false,bottom_url:false,font_family:"inherit",font_size:"inherit",font_weight:"inherit",font_color:"inherit",font_bgcolor:"inherit",font_style:"inherit",is_mediafile:false,end_nested:false,backup:function(N,M){var P=q.lastIndexOf(N);var L=q.indexOf(M,P);if(P==-1||L==-1){return}if(N.length+L==L){var O=q.substring(0,P);var i=q.substring(L);q=O+i;return true}return false},is_iwiki:function(M,O){var N=M.match(/iw_(\w+)/);var i=O.split(/\//);var L=i[i.length-1];L=L.replace(String.frasl,"/");this.attr=N[1]+">"+L;this.interwiki=true},start:function(an,U,ae){if(C[an]){if(s[an]&&this.in_link){this.link_formats.push(an);return}if(s[an]&&this.in_font){q+=" ";var aj="temp_"+an;q+=C[aj];q+=" ";return}else{if(an=="acronym"){return}}if(s[an]&&this.in_endnotes){if(an=="sup"){return}}if(an=="ol"||an=="ul"){this.prev_list_level=this.list_level;this.list_level++;if(this.list_level==1){this.list_started=false}if(this.list_started){this.prev_li.push(C.li)}C.li=C[an];return}else{if(!this.list_level){C.li="";this.prev_li=new Array()}}this.is_mediafile=false;if(an=="img"){var am="?";var L;var N;var ao=false;var ac="";var X="";var ad=false;this.is_smiley=false;this.in_link=false}if(an=="a"){var ab=true;var av="";this.xcl_markup=false;this.in_link=true;this.link_pos=q.length;this.link_formats=new Array();this.footnote=false;var V=false;this.id="";this.external_mime=false;var au=false;this.export_code=false;this.code_snippet=false;this.downloadable_file="";var Z=false;this.link_only=false;save_url="";this.interwiki=false;this.bottom_url=false;this.link_title=false;var ah="";var Y=""}if(an=="p"){this.in_link=false;if(this.in_table){an="p_insert";H=true}}if(an=="table"){this.td_no=0;this.tr_no=0;this.in_table=true;this.is_rowspan=false;this.row=-1;this.rows=new Array();y=this.rows;this.table_start=q.length}else{if(an=="tr"){this.tr_no++;this.td_no=0;this.col=-1;this.row++;this.rows[this.row]=new Array();this.current_row=this.rows[this.row]}else{if(an=="td"||an=="th"){this.td_no++;this.col++;this.current_row[this.col]={type:an,rowspan:0,colspan:0,text:""};this.cell_start=q.length;this.current_cell=this.current_row[this.col];if(this.td_rowspan&&this.rowspan_col==this.td_no&&this.td_no!=this.last_column){this.is_rowspan=true;this.td_rowspan--}else{this.is_rowspan=false}}}}var M;this.attr=false;this.format_tag=false;if(s[an]){this.format_tag=true}var W=false;for(var ar=0;ar<U.length;ar++){if(an=="td"||an=="th"){if(U[ar].name=="colspan"){this.current_row[this.col].colspan=U[ar].value}if(U[ar].name=="class"){if((M=U[ar].value.match(/(left|center|right)/))){this.current_row[this.col].align=M[1]}}if(U[ar].name=="rowspan"){this.current_row[this.col].rowspan=U[ar].value}}if(U[ar].escaped=="u"&&an=="em"){an="u";this.attr="u";break}if(an=="div"){if(U[ar].name=="class"&&U[ar].value=="footnotes"){an="blank";this.in_endnotes=true}break}if(an=="dl"&&U[ar].name=="class"&&U[ar].value=="file"){this.downloadable_code=true;b=true;return}if(an=="span"&&U[ar].name=="class"){if(U[ar].value=="np_break"){return}}if(an=="span"&&U[ar].name=="class"){if(U[ar].value=="curid"){this.curid=true;return}if(U[ar].value=="multi_p_open"){this.in_multi_plugin=true;J=true;return}if(U[ar].value=="multi_p_close"){this.in_multi_plugin=false;return}if(U[ar].value.match(D)){an="blank";this.geshi=true;break}}if(an=="span"&&!ckgedit_xcl_styles){if(U[ar].name=="style"){if(!this.in_font){q+="__STYLE__"}this.in_font=true;M=U[ar].value.match(/font-family:\s*([\w\-\s,]+);?/);if(M){this.font_family=M[1]}M=U[ar].value.match(/font-size:\s*(.*)/);if(M){M[1]=M[1].replace(/;/,"");this.font_size=M[1]}M=U[ar].value.match(/font-weight:\s*(\w+);?/);if(M){this.font_weight=M[1]}M=U[ar].value.match(/.*?color:\s*(.*)/);if(M){M[1]=M[1].replace(/;/,"");if(M[0].match(/background/)){this.font_bgcolor=M[1]}else{this.font_color=M[1]}}}}if(an=="td"||an=="th"){if(an=="td"){q=q.replace(/\^$/,"|")}this.in_td=true;if(U[ar].name=="align"){this.td_align=U[ar].escaped}else{if(U[ar].name=="class"){M=U[ar].value.match(/\s*(\w+)align/);if(M){this.td_align=M[1]}}else{if(U[ar].name=="colspan"){h=true;this.td_colspan=U[ar].escaped}else{if(U[ar].name=="rowspan"){this.td_rowspan=U[ar].escaped-1;this.rowspan_col=this.td_no}}}}H=true}if(an=="a"){if(U[ar].name=="title"){this.link_title=U[ar].escaped;if(Y){ah=U[ar].escaped}else{this.link_title=this.link_title.replace(/\s+.*$/,"")}}else{if(U[ar].name=="class"){if(U[ar].value.match(/fn_top/)){this.footnote=true}else{if(U[ar].value.match(/fn_bot/)){V=true}else{if(U[ar].value.match(/mf_(png|gif|jpg|jpeg)/i)){this.link_only=true}}}this.link_class=U[ar].escaped;au=this.link_class.match(/mediafile/)}else{if(U[ar].name=="id"){this.id=U[ar].value}else{if(U[ar].name=="type"){av=U[ar].value}else{if(U[ar].name=="href"&&!this.code_type){var T=U[ar].escaped.match(/https*:\/\//)?true:false;if(T){save_url=U[ar].escaped}if(U[ar].escaped.match(/\/lib\/exe\/detail.php/)){this.image_link_type="detail"}else{if(U[ar].escaped.match(/exe\/fetch.php/)){this.image_link_type="direct"}}if(this.link_class&&this.link_class.match(/media/)&&!this.link_title){var ag=U[ar].escaped.match(/media=(.*)/);if(ag){this.link_title=ag[1]}}var al=U[ar].escaped.match(/fetch\.php.*?media=.*?\.(png|gif|jpg|jpeg)$/i);if(al){al=al[1]}if(U[ar].escaped.match(/^https*:/)){this.attr=U[ar].escaped;ab=false}if(U[ar].escaped.match(/^ftp:/)){this.attr=U[ar].escaped;ab=false}else{if(U[ar].escaped.match(/do=export_code/)){this.export_code=true}else{if(U[ar].escaped.match(/^nntp:/)){this.attr=U[ar].escaped;ab=false}else{if(U[ar].escaped.match(/^mailto:/)){this.attr=U[ar].escaped.replace(/mailto:/,"");ab=false}else{if(U[ar].escaped.match(/^file:/)){var O=U[ar].value.replace(/file:[\/]+/,"");O=O.replace(/[\/]/g,"\\");O="\\\\"+O;this.attr=O;ab=false}else{if(T&&!al&&(M=U[ar].escaped.match(/fetch\.php(.*)/))){if(M[1].match(/media=/)){S=M[1].split(/=/);this.attr=S[1]}else{M[1]=M[1].replace(/^\//,"");this.attr=M[1]}ab=false;this.attr=decodeURIComponent?decodeURIComponent(this.attr):unescape(this.attr);if(!this.attr.match(/^:/)){this.attr=":"+this.attr}this.external_mime=true}else{ab=false;M=U[ar].escaped.match(/doku.php\?id=(.*)/);if(!M){M=U[ar].escaped.match(/doku.php\/(.*)/)}if(M){if(!M[1].match(/\?/)&&M[1].match(/&amp;/)){Z=true;M[1]=M[1].replace(/&amp;/,"?")}}if(M&&M[1]){if(!M[1].match(/^:/)){this.attr=":"+M[1]}else{this.attr=M[1]}if(this.attr.match(/\.\w+$/)){if(av&&av=="other_mime"){this.external_mime=true}else{for(var ap=ar+1;ap<U.length;ap++){if(U[ap].value.match(/other_mime/)){this.external_mime=true}break}}}}else{M=U[ar].value.match(/\\\\/);if(M){this.attr=U[ar].escaped;ab=false}}}}}}}}if(this.link_class=="media"){if(U[ar].value.match(/http:/)){ab=false}}if(!this.attr&&this.link_title){if(M=this.link_class.match(/media(.*)/)){this.link_title=decodeURIComponent(safe_convert(this.link_title));this.attr=this.link_title;var aq=M[1].split(/_/);if(aq&&aq[1]){al=aq[1]}else{if(aq){al=aq[0]}else{al="mf"}}if(!this.attr.match(/^:/)&&!this.attr.match(/^https?\:/)){this.attr=":"+this.attr.replace(/^\s+/,"")}this.external_mime=true;ab=false}}if(this.attr.match&&this.attr.match(/%[a-fA-F0-9]{2}/)&&(M=this.attr.match(/userfiles\/file\/(.*)/))){M[1]=M[1].replace(/\//g,":");if(!M[1].match(/^:/)){M[1]=":"+M[1]}this.attr=decodeURIComponent?decodeURIComponent(M[1]):unescape(M[1]);this.attr=decodeURIComponent?decodeURIComponent(this.attr):unescape(this.attr);this.external_mime=true}if(this.link_title&&this.link_title.match(/Snippet/)){this.code_snippet=true}if(U[ar].value.match(/^#/)&&this.link_class.match(/wikilink/)){this.attr=U[ar].value;this.link_title=false}if(this.link_class.match(/wikilink/)&&this.link_title){this.external_mime=false;if(!this.attr){this.attr=this.link_title}if(!this.attr.match(/^:/)){this.attr=":"+this.attr}if(this.attr.match(/\?.*?=/)){var S=this.attr.split(/\?/);S[0]=S[0].replace(/\//g,":");this.attr=S[0]+"?"+S[1]}else{this.attr=this.attr.replace(/\//g,":")}if(!Z&&U[ar].name=="href"){if(!this.attr.match(/\?.*?=/)&&!U[ar].value.match(/doku.php/)){var at=U[ar].value.match(/(\?.*)$/);if(at&&at[1]){this.attr+=at[1]}}}}else{if(this.link_class.match(/mediafile/)&&this.link_title&&!this.attr){this.attr=this.link_title;this.external_mime=true;if(!this.attr.match(/^:/)){this.attr=":"+this.attr}}else{if(this.link_class.match(/interwiki/)){Y=this.link_class}}}if(this.link_class=="urlextern"){this.attr=save_url;this.external_mime=false}if(this.in_endnotes){if(this.link_title){this.bottom_url=this.link_title}else{if(this.attr){this.bottom_url=this.attr}}}this.link_title="";this.link_class=""}}}}}}if(Y&&ah){this.is_iwiki(Y,ah);Y="";ah=""}if(an=="sup"){if(U[ar].name=="class"){M=U[ar].value.split(/\s+/);if(M[0]=="dwfcknote"){this.attr=M[0];an="blank";if(oDokuWiki_FCKEditorInstance.oinsertHtmlCodeObj.notes[M[1]]){W="(("+oDokuWiki_FCKEditorInstance.oinsertHtmlCodeObj.notes[M[1]]+"))"}break}}}if(an=="pre"){if(U[ar].name=="class"){var S=U[ar].escaped.split(/\s+/);if(S.length>1){this.attr=U[ar].value;this.code_type=S[0]}else{this.attr=U[ar].escaped;this.code_type=this.attr}if(this.downloadable_code){this.attr=this.attr.replace(/\s*code\s*/,"");this.code_type="file"}r=true;if(this.in_table){an="pre_td"}break}}else{if(an=="img"){if(U[ar].name=="alt"){X=U[ar].value}if(U[ar].name=="type"){this.image_link_type=U[ar].value}if(U[ar].name=="src"){var af="";if(M=U[ar].escaped.match(/fetch\.php.*?(media=.*)/)){var S=M[1].split("=");af=S[1];if(M=U[ar].escaped.match(/(media.*)/)){var S=M[1].split("=");var Q=S[1];af=decodeURIComponent?decodeURIComponent(Q):unescape(Q)}if(!af.match(/https?:/)&&!af.match(/^:/)){af=":"+af}}else{if(U[ar].escaped.match(/https?:\/\//)){af=U[ar].escaped;af=af.replace(/\?.*?$/,"")}else{if(M=U[ar].escaped.match(/\/_media\/(.*)/)){var S=M[1].split(/\?/);af=S[0];af=af.replace(/\//g,":");if(!af.match(/^:/)){af=":"+af}}else{if(M=U[ar].escaped.match(/\/lib\/exe\/fetch.php\/(.*)/)){var S=M[1].split(/\?/);af=S[0];if(!af.match(/^:/)){af=":"+af}}else{M=U[ar].escaped.match(/^.*?\/userfiles\/image\/(.*)/);if(!M){var P=doku_base+"data/media/";P=P.replace(/([\/\\])/g,"\\$1");P="^.*?"+P+"(.*)";P=new RegExp(P);M=U[ar].escaped.match(P)}if(M&&M[1]){af=M[1].replace(/\//g,":");af=":"+af}else{af=decodeURIComponent?decodeURIComponent(U[ar].escaped):unescape(U[ar].escaped);if(af.search(/data:image.*?;base64/)>-1){ad=true}}if(af&&af.match(/lib\/images\/smileys/)){this.is_smiley=true}}}}}this.attr=af;if(this.attr&&this.attr.match&&this.attr.match(/%[a-fA-F0-9]{2}/)){this.attr=decodeURIComponent?decodeURIComponent(this.attr):unescape(this.attr);this.attr=decodeURIComponent?decodeURIComponent(this.attr):unescape(this.attr)}}else{if(U[ar].name=="width"&&!ao){L=U[ar].value}else{if(U[ar].name=="height"&&!ao){N=U[ar].value}else{if(U[ar].name=="style"){var R=U[ar].escaped.match(/width:\s*(\d+)/);if(R){L=R[1];var R=U[ar].escaped.match(/height:\s*(\d+)/);if(R){N=R[1]}}}else{if(U[ar].name=="align"||U[ar].name=="class"){if(U[ar].escaped.match(/(center|middle)/)){ac="center"}else{if(U[ar].escaped.match(/right/)){ac="right"}else{if(U[ar].escaped.match(/left/)){ac="left"}else{ac=""}}}}}}}}}}}if(this.is_smiley){if(X){q+=X+" ";X=""}this.is_smiley=false;return}if(this.link_only){an="img"}if(an=="br"){if(this.in_multi_plugin){q+="\n";return}if(!this.code_type){K=true}else{if(this.code_type){q+="\n";return}}if(this.in_table){q+=d;return}if(this.list_started){q+="_LIST_EOFL_"}else{q+="\\\\  ";return}}else{if(an.match(/^h(\d+|r)/)){var aa=q.length;if(an.match(/h(\d+)/)){this.in_header=true}if(aa){if(q.charCodeAt(aa-1)==32){q=q.replace(/\x20+$/,"")}}}else{if(this.last_col_pipes){if(s[an]){q+=C[an]}an="blank"}else{if(W){q+=W;return}}}}if(an=="b"||an=="i"&&this.list_level){if(q.match(/(\/\/|\*)(\x20)+/)){q=q.replace(/(\/\/|\*)(\x20+)\-/,"$1\n$2-")}}if(an=="li"&&this.list_level){if(this.list_level==1&!this.list_started){q+="\n";this.list_started=true}q=q.replace(/[\x20]+$/,"");for(var ak=0;ak<this.list_level;ak++){if(q.match(/_FORMAT_SPACE_\s*$/)){q=q.replace(/_FORMAT_SPACE_\s*$/,"\n")}if(this.list_level>1){q+="  "}}if(this.prev_list_level>0&&C.li==C.ol){this.prev_list_level=-1}}if(an=="a"&&ab){this.xcl_markup=true;return}else{if(an=="a"&&(this.export_code||this.code_snippet)){return}else{if(an=="a"&&this.footnote){an="fn_start"}else{if(an=="a"&&V){c.push(this.id)}else{if(an=="a"&&this.external_mime){if(this.in_endnotes){this.link_class="media";return}if(au&&au=="mediafile"){q+=C.img;q+=this.attr+"|";this.is_mediafile=true}return}else{if(this.in_font){return}}}}}}if(this.in_endnotes&&an=="a"){return}if(this.code_type&&an=="span"){an="blank"}q+=C[an];if(an=="td"||an=="th"||(this.last_col_pipes&&this.td_align=="center")){if(this.is_rowspan){q+=C.row_span+" | ";this.is_rowspan=false}if(this.td_align=="center"||this.td_align=="right"){q+="  "}}else{if(an=="a"&&this.attr){this.attr=this.attr.replace(/%7c/,"%257c");q+=this.attr+"|"}else{if(an=="img"){var ai=this.image_link_type;this.image_link_type="";if(this.link_only){ai="link_only"}if(!ai||ad){ai="nolink"}else{if(ai=="detail"){ai=""}}if(ai=="link_only"){am="?linkonly"}else{if(ai){am+=ai+"&"}}if(L&&N){am+=L+"x"+N}else{if(L){am+=L}else{if(!ai){am=""}}}if(ac&&ac!="left"){q+="  "}this.attr+=am;if(ac=="center"||ac=="left"){this.attr+="  "}q+=this.attr+"}}";this.attr="src"}else{if(an=="pre"||an=="pre_td"){if(this.downloadable_file){this.attr+=" "+this.downloadable_file}if(!this.attr){this.attr="code"}q+=this.attr+">";this.downloadable_file="";this.downloadable_code=false}}}}}},end:function(aa){if(s[aa]&&this.in_font){q+=" ";if(aa=="sup"||aa=="sub"||aa=="del"||aa=="strike"||aa=="s"){var Z="temp_c"+aa}else{var Z="temp_"+aa}q+=C[Z];q+=" ";return}if(this.in_endnotes&&aa=="a"){return}if(this.link_only){this.link_only=false;return}if(!C[aa]){return}if(aa=="sup"&&this.attr=="dwfcknote"){return}if(this.is_smiley){this.is_smiley=false;if(aa!="li"){return}}if(aa=="span"&&this.in_font&&!ckgedit_xcl_styles){aa="font";var V="<font "+this.font_size+"/"+this.font_family+";;"+this.font_color+";;"+this.font_bgcolor+">\n\n";var R=q.lastIndexOf("__STYLE__");q=q.splice(R,9,V);this.in_font=false}if(aa=="span"&&this.curid){this.curid=false;return}if(aa=="dl"&&this.downloadable_code){this.downloadable_code=false;return}if(x&&(aa=="td"||aa=="th")){this.current_cell.text=q.substring(this.cell_start);this.current_cell.text=this.current_cell.text.replace(/:::/gm,"");this.current_cell.text=this.current_cell.text.replace(/^[\s\|\^]+/,"")}if(aa=="a"&&(this.export_code||this.code_snippet)){this.export_code=false;this.code_snippet=false;return}if(this.code_type&&aa=="span"){aa="blank"}var X=aa;if(this.footnote){aa="fn_end";this.footnote=false}else{if(aa=="a"&&this.xcl_markup){this.xcl_markup=false;return}else{if(aa=="table"){this.in_table=false;if(x){q=q.substring(0,this.table_start);m(this.rows)}}}}if(aa=="p"&&this.in_table){aa="p_insert";H=true}if(this.geshi){this.geshi=false;return}if(aa=="code"&&!this.list_started){if(q.match(/''\s*$/m)){q=q.replace(/''\s*$/,"\n");return}}else{if(aa=="a"&&this.attr=="src"){if(this.backup("[[","{")){return}}}if(this.end_nested){this.end_nested=false;return}if(aa=="ol"||aa=="ul"){this.list_level--;if(!this.list_level){this.format_in_list=false}if(this.prev_li.length){C.li=this.prev_li.pop();this.end_nested=true;return}aa="\n\n"}else{if(aa=="a"&&this.external_mime){this.external_mime=false;if(this.is_mediafile){aa="}} "}else{return}}else{if(aa=="pre"){aa=o[aa];if(this.code_type){aa+=this.code_type+">"}else{var M=q.lastIndexOf("code");var O=q.lastIndexOf("file");if(O>M){this.code_type="file"}else{this.code_type="code"}aa+=this.code_type+">"}this.code_type=false}else{if(o[aa]){aa=o[aa]}else{if(this.attr=="u"&&aa=="em"){aa="u"}else{if(aa=="acronym"){}else{aa=C[aa]}}}}}}if(X=="tr"){if(this.last_col_pipes){aa="\n";this.last_col_pipes=""}if(this.td_rowspan&&this.rowspan_col==this.td_no+1){this.is_rowspan=false;this.last_column=this.td_no;this.td_rowspan--;aa="|"+C.row_span+"|\n"}}else{if(X=="td"||X=="th"){this.last_col_pipes="";this.in_td=false}else{if(X.match(/h\d+/)){this.in_header=false}}}if(C.li){if(q.match(/\n$/)&&!this.list_level){aa=""}}if(this.in_link&&s[X]&&this.link_formats.length){return}if(this.in_endnotes&&X=="sup"){return}q+=aa;if(s[X]){if(this.list_level){this.format_in_list=true;g=true}q+=C.format_space;F=C.format_space}this.last_tag=X;if(this.td_colspan&&!x){if(this.td_align=="center"){q+=" "}var N="|";if(X=="th"){N="^"}var Q=N;for(var S=1;S<this.td_colspan;S++){Q+=N}this.last_col_pipes=Q;q+=Q;this.td_colspan=false}else{if(this.td_align=="center"){q+=" ";this.td_align=""}}if(X=="a"&&this.link_formats.length){var Y=q.substring(this.link_pos);var T=q.substring(0,this.link_pos);var L="";var W="";for(var S=0;S<this.link_formats.length;S++){var P=C[this.link_formats[S]];var U=o[this.link_formats[S]]?o[this.link_formats[S]]:P;L+=C[this.link_formats[S]];W=U+W}T+=L;Y+=W;q=T+Y;this.link_formats=new Array();this.in_link=false}else{if(X=="a"){this.link_formats=new Array();this.in_link=false}}},chars:function(O){O=O.replace(/\t/g,"    ");if(O.match(/~~START_HTML_BLOCK~~/)){O=O.replace(/~~START_HTML_BLOCK~~\n*/,"~~START_HTML_BLOCK~~\n<code>\n")}if(O.match(/~~CLOSE_HTML_BLOCK~~/)){O=O.replace(/~~CLOSE_HTML_BLOCK~~\n*/gm,"\n</code>\n\n~~CLOSE_HTML_BLOCK~~\n\n")}if(this.interwiki){O=O.replace(String.frasl,"/")}if(this.interwiki&&q.match(/>\w+\s*\|$/)){this.interwiki=false;if(this.attr){q+=O}else{q=q.replace(/>\w+\s*\|$/,">"+O)}return}if(this.in_multi_plugin){O=O.replace("&lt; ","&lt;")}O=O.replace(/&#39;/g,"'");O=O.replace(/^(&gt;)+/,function(Q,P){return(Q.replace(/(&gt;)/g,"__QUOTE__"))});q=q.replace(/([\/\*_])_FORMAT_SPACE_([\/\*_]{2})_FORMAT_SPACE_$/,"$1$2");if(O.match(/^&\w+;/)){q=q.replace(/_FORMAT_SPACE_\s*$/,"")}if(this.link_only){if(O){replacement="|"+O+"}} ";q=q.replace(/\}\}\s*$/,replacement)}return}if(!this.code_type){if(!this.last_col_pipes){O=O.replace(/\x20{6,}/,"   ");O=O.replace(/^(&nbsp;)+\s*$/,"_FCKG_BLANK_TD_");O=O.replace(/(&nbsp;)+/," ")}if(this.format_tag){if(!this.list_started||this.in_table){O=O.replace(/^\s+/,"@@_SP_@@")}}else{if(this.last_tag=="a"){O=O.replace(/^\s{2,}/," ")}else{O=O.replace(/^\s+/,"")}}if(O.match(/nowiki&gt;/)){G=true}if(this.format_in_list){O=O.replace(/^[\n\s]+$/g,"");if(O.match(/\n{2,}\s{1,}/)){O=O.replace(/\n{2,}/,"\n")}}if(this.in_td&&!O){O="_FCKG_BLANK_TD_";this.in_td=false}}else{O=O.replace(/&lt;\s/g,"<");O=O.replace(/\s&gt;/g,">");var i=O.match(/^\s*geshi:\s+(.*)$/m);if(i){q=q.replace(/<(code|file)>\s*$/,"<$1 "+i[1]+">");O=O.replace(i[0],"")}}if(this.attr&&this.attr=="dwfcknote"){if(O.match(/fckgL\d+/)){return}if(O.match(/^[\-,:;!_]/)){q+=O}else{q+=" "+O}return}if(this.downloadable_code&&(this.export_code||this.code_snippet)){this.downloadable_file=O;return}if(this.last_tag=="a"&&O.match(/^[\.,;\:\!]/)){q=q.replace(/\s$/,"")}if(this.in_header){O=O.replace(/---/g,"&mdash;");O=O.replace(/--/g,"&ndash;")}if(this.list_started){q=q.replace(/_LIST_EOFL_\s*L_BR_K\s*$/,"_LIST_EOFL_")}if(!this.code_type){if(!q.match(/\[\[\\\\.*?\|$/)&&!O.match(/\w:(\\(\w?))+/)){if(!O.match(/\\\\[\w\.\-\_]+\\[\w\.\-\_]+/)){O=O.replace(/([\\])/g,"%%$1%%")}O=O.replace(/([\*])/g,"_CKG_ASTERISK_")}}if(this.in_endnotes&&c.length){if(O.match(/\w/)&&!O.match(/^\s*\d\)\s*$/)){O=O.replace(/\)\s*$/,"_FN_PAREN_C_");var L=c.length-1;if(this.bottom_url){if(this.link_class&&this.link_class=="media"){O="{{"+this.bottom_url+"|"+O+"}}"}else{O="[["+this.bottom_url+"|"+O+"]]"}}if(v[c[L]]){O=O.replace("(","L_PARgr");O=O.replace(")","R_PARgr");v[c[L]]+=" "+O}else{O=O.replace("(","L_PARgr");O=O.replace(")","R_PARgr");v[c[L]]=O}}this.bottom_url=false;return}if(O&&O.length){q+=O}q=q.replace(/(&\w+;)\s*([\*\/_]{2})_FORMAT_SPACE_(\w+)/,"$1$2$3");if(this.list_level&&this.list_level>1){q=q.replace(/(\[\[.*?\]\])([ ]+[\*\-].*)$/," $1\n$2")}try{var N=new RegExp("([*/_]{2,})_FORMAT_SPACE_([*/_]{2,})("+RegExp.escape(O)+")$");if(q.match(N)){q=q.replace(N,"$1$2$3")}}catch(M){}if(!e){if(O.match(/&lt;/)){e=true}}},comment:function(i){},dbg:function(L,i){if(L.replace){L=L.replace(/^\s+/g,"");L=L.replace(/^\n$/g,"");if(!L){return}}if(i){i="<b>"+i+"</b>\n"}HTMLParser_DEBUG+=i+L+"\n__________\n"}});q=q.replace(/(\[\[\\\\)(.*?)\]\]/gm,function(i,M,L){L=L.replace(/\\/g,"_SMB_");return M+L+"]]"});q=q.replace(/%%\\%%/g,"_ESC_BKSLASH_");q=q.replace(/%*\\%*([^\w]{1})%*\\%*/g,"$1");q=q.replace(/_SMB_/g,"\\");q=q.replace(/(CKGE_TMP_\w+)/gm,function(L,i){if(l[i]){return l[i]}return L});if(z=="test"){if(!HTMLParser_test_result(q)){return}}q=q.replace(/\{ \{ rss&gt;Feed:/mg,"{{rss&gt;http://");q=q.replace(/~ ~ (NOCACHE|NOTOC)~ ~/mg,"~~$1~~");q=q.replace(/>.*?oIWIKIo(.*?)cIWIKIc/mg,">$1");if(F){if(h){q=q.replace(/\s*([\|\^]+)((\W\W_FORMAT_SPACE_)+)/gm,function(i,L,M){M=M.replace(/_FORMAT_SPACE_/g,"");return(M+L)})}q=q.replace(/&quot;/g,'"');var j=new RegExp(F+"([\\-]{2,})","g");q=q.replace(j," $1");var j=new RegExp("(\\w|\\d)(\\*\\*|\\/\\/|\\'\\'|__|</del>)"+F+"(\\w|\\d)","g");q=q.replace(j,"$1$2$3");var j=new RegExp(F+"@@_SP_@@","g");q=q.replace(j," ");q=q.replace(/([\*\/_]{2})@@_SP_@@(&\w+;)/g,"$1 $2");q=q.replace(/\n@@_SP_@@\n/g,"");q=q.replace(/@@_SP_@@\n/g,"");q=q.replace(/@@_SP_@@/g," ");var j=new RegExp(F+"([^\\)\\]\\}\\{\\-\\.,;:\\!?\"\x94\x92\u201D\u2019'])","g");q=q.replace(j," $1");j=new RegExp(F,"g");q=q.replace(j,"");if(g){q=q.replace(/(\s+[\-\*_]\s*)([\*\/_\']{2})(.*?)(\2)([^\n]*)\n+/gm,function(M,i,O,P,L,N){return(i+O+P+L+N+"\n")})}}var p="\\\\";if(K){q=q.replace(/(L_BR_K)+/g,p);q=q.replace(/L_BR_K/gm,p);q=q.replace(/(\\\\)\s+/gm,"$1 \n")}if(r){q=q.replace(/\s+<\/(code|file)>/g,"\n</$1>");if(b){q=q.replace(/\s+;/mg,";");q=q.replace(/&lt;\s+/mg,"<");q=q.replace(/\s+&gt;/mg,">")}}if(H){q+="\n"+p+"\n";var j=new RegExp(d,"g");q=q.replace(j," "+p+" ");q=q.replace(/(\||\^)[ ]+(\||\^)\s$/g,"$1\n");q=q.replace(/(\||\^)[ ]+(\||\^)/g,"$1")}q=q.replace(/_FCKG_BLANK_TD_/g," ");if(e){q=q.replace(/\/\/&lt;\/\/\s*/g,"&lt;")}if(c.length){q=q.replace(/<sup>\(\(\){2,}\s*<\/sup>/g,"");q=q.replace(/\(\(+(\d+)\)\)+/,"(($1))");for(var I in v){var a=I.match(/_(\d+)/);var k=new RegExp("(<sup>)*[(]+"+a[1]+"[)]+(</sup>)*");v[I]=v[I].replace(/(\d+)_FN_PAREN_C_/,"");q=q.replace(k,"(("+v[I].replace(/_FN_PAREN_C_/g,") ")+"))")}q=q.replace(/<sup><\/sup>/g,"");q=q.replace(/((<sup>\(\(\d+\)\)\)?<\/sup>))/mg,function(i){if(!i.match(/p>\(\(\d+/)){return""}return i})}q=q.replace(/(={3,}.*?)(\{\{.*?\}\})(.*?={3,})/g,"$1$3\n\n$2");q=q.replace(/(<sup>)*\s*\[\[\s*\]\]\s*(<\/sup>)*\n*/g,"");q=q.replace(/<sup>\s*\(\(\d+\)\)\s*<\/sup>/mg,"");if(J){q=q.replace(/<\s+/g,"<");q=q.replace(/&lt;\s+/g,"<")}if(G){var u="%";var j=new RegExp("(["+u+"])","g");q=q.replace(/(&lt;nowiki&gt;)(.*?)(&lt;\/nowiki&gt;)/mg,function(L,N,i,M){i=i.replace(/%%(.)%%/mg,"NOWIKI_$1_");return N+i.replace(j,"NOWIKI_$1_")+M})}q=q.replace(/__SWF__(\s*)\[*/g,"{{$1");q=q.replace(/\|.*?\]*(\s*)__FWS__/g,"$1}}");q=q.replace(/(\s*)__FWS__/g,"$1}}");q=q.replace(/\n{3,}/g,"\n\n");q=q.replace(/_LIST_EOFL_/gm," "+p+" ");if(x){if(q.indexOf("~~COMPLEX_TABLES~~")==-1){q+="~~COMPLEX_TABLES~~\n"}}else{q=q.replace(/~~COMPLEX_TABLES~~/gm,"")}q=q.replace(/_CKG_ASTERISK_/gm,"*");q=q.replace(/_ESC_BKSLASH_/g,"\\");if(z=="test"){if(HTMLParser_test_result(q)){alert(q)}return}var A=GetE("dw__editform");A.elements.fck_wikitext.value=q;if(z=="bakup"){return}if(z){var f=GetE(z);f.click();return true}}jQuery(document).ready(function(){jQuery("#ebut_test").mousedown(function(){parse_wikitext("test")});jQuery("#ebtn__delete").click(function(){return confirm(JSINFO.confirm_delete)});jQuery("#ebtn__delete").mouseup(function(){draft_delete()});jQuery("#ebtn__dwedit").click(function(){setDWEditCookie(2,this);parse_wikitext("edbtn__save");this.form.submit()});jQuery("#ckgedit_draft_btn").click(function(){ckgedit_get_draft()});jQuery("#backup_button").click(function(){renewLock(true)});jQuery("#backup_button").click(function(){renewLock(true)});jQuery("#revert_to_prev_btn").click(function(){revert_to_prev()});jQuery("#no_styling_btn").click(function(){this.form.styling.value="no_styles";this.form.prefix.value="";this.form.suffix.value="";this.form.rev.value=""});jQuery("#ebut_cancel").mouseup(function(){draft_delete()});jQuery("#save_button").mousedown(function(){parse_wikitext("edbtn__save")})});