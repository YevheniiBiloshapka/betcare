var startSeqs={},startNum=0;$.fn.playSpin=function(t){if(this.length){if($(this).is(":animated"))return;startSeqs["mainSeq"+ ++startNum]={},$(this).attr("data-playslot",startNum);var n=this.length,i=0;void 0===t&&(t=new Object);var e=[];void 0!==t.endNum&&(e=$.isArray(t.endNum)?t.endNum:[t.endNum]);for(var o=0;o<this.length;o++)void 0===e[o]&&e.push(0);return startSeqs["mainSeq"+startNum].totalSpinning=n,this.each(function(){t.endNum=e[i],startSeqs["mainSeq"+startNum]["subSeq"+ ++i]={},startSeqs["mainSeq"+startNum]["subSeq"+i].spinning=!0,new slotMachine(this,t,{total:n,mainSeq:startNum,subSeq:i})})}},$.fn.stopSpin=function(){if(this.length){if(!$(this).is(":animated"))return;$(this)[0].hasAttribute("data-playslot")&&$.each(startSeqs["mainSeq"+$(this).attr("data-playslot")],function(t,n){n.spinning=!1})}};var slotMachine=function(t,n,i){var e=this;e.$el=$(t),e.defaultOptions={easing:"swing",time:3e3,loops:6,manualStop:!1,useStopTime:!1,stopTime:5e3,stopSeq:"random",endNum:0,onEnd:$.noop,onFinish:$.noop},e.spinSpeed=0,e.loopCount=0,e.init=function(){e.options=$.extend({},e.defaultOptions,n),e.setup(),e.startSpin()},e.setup=function(){var t=e.$el.find("li").first();e.liHeight=t.innerHeight(),e.liCount=e.$el.children().length,e.listHeight=e.liHeight*e.liCount,e.spinSpeed=e.options.time/e.options.loops,t.clone().appendTo(e.$el),"leftToRight"==e.options.stopSeq?1!=i.subSeq&&(e.options.manualStop=!0):"rightToLeft"==e.options.stopSeq&&i.total!=i.subSeq&&(e.options.manualStop=!0)},e.startSpin=function(){e.$el.css("top",-e.listHeight).animate({top:"0px"},e.spinSpeed,"linear",function(){e.lowerSpeed()})},e.lowerSpeed=function(){e.loopCount++,e.loopCount<e.options.loops||e.options.manualStop&&startSeqs["mainSeq"+i.mainSeq]["subSeq"+i.subSeq].spinning?e.startSpin():e.endSpin()},e.endSpin=function(){0==e.options.endNum&&(e.options.endNum=e.randomRange(1,e.liCount)),(e.options.endNum<0||e.options.endNum>e.liCount)&&(e.options.endNum=1);var t=-(e.liHeight*e.options.endNum-e.liHeight),n=1.5*e.spinSpeed*e.liCount/e.options.endNum;e.options.useStopTime&&(n=e.options.stopTime),e.$el.css("top",-e.listHeight).animate({top:t},parseInt(n),e.options.easing,function(){if(e.$el.find("li").last().remove(),e.endAnimation(e.options.endNum),$.isFunction(e.options.onEnd)&&e.options.onEnd(e.options.endNum),0==startSeqs["mainSeq"+i.mainSeq].totalSpinning){var t="";$.each(startSeqs["mainSeq"+i.mainSeq],function(n,i){"object"==typeof i&&(t+=i.endNum.toString())}),$.isFunction(e.options.onFinish)&&e.options.onFinish(t)}})},e.endAnimation=function(t){"leftToRight"==e.options.stopSeq&&i.total!=i.subSeq?startSeqs["mainSeq"+i.mainSeq]["subSeq"+(i.subSeq+1)].spinning=!1:"rightToLeft"==e.options.stopSeq&&1!=i.subSeq&&(startSeqs["mainSeq"+i.mainSeq]["subSeq"+(i.subSeq-1)].spinning=!1),startSeqs["mainSeq"+i.mainSeq].totalSpinning--,startSeqs["mainSeq"+i.mainSeq]["subSeq"+i.subSeq].endNum=t},e.randomRange=function(t,n){return Math.floor(Math.random()*(1+n-t))+t},this.init()};