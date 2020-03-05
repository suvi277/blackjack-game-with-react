(this["webpackJsonpblackjack-game-with-react"]=this["webpackJsonpblackjack-game-with-react"]||[]).push([[0],{45:function(e,a,t){e.exports=t(79)},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),i=t(9),u=t(13),o=t(12),s=t(24),d=t(34),m=t(7),p=t(3),b={player:{cards:[],count:0,wallet:100,bet:0},originalDeck:[],dealer:{cards:[],count:0},deck:[],playerFinished:!1,isDeckLoaded:!1,isPlaying:!1};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"REQUEST_CARDS":return Object(p.a)({},e,{originalDeck:a.data,deck:a.data,isDeckLoaded:!0});case"PLACE_BET":return Object(p.a)({},e,{player:Object(p.a)({},e.player,{wallet:e.player.wallet-a.betValue,bet:a.betValue})});case"CARDS_DRAWN":return Object(p.a)({},e,{player:Object(p.a)({},e.player,{cards:a.player.cards,count:a.player.count}),dealer:Object(p.a)({},e.dealer,{cards:a.dealer.cards,count:a.dealer.count}),deck:a.deck,isPlaying:!0,playerFinished:!1});case"ADD_CARD":return Object(p.a)({},e,{player:Object(p.a)({},e.player,{cards:a.player.cards,count:a.player.count}),deck:a.deck,playerFinished:!1});case"NEXT_ROUND":return Object(p.a)({},e,{player:{cards:[],count:0,wallet:e.player.wallet,bet:0},dealer:{cards:[],count:0},deck:e.originalDeck,playerFinished:!1,isPlaying:!1});default:return e}}var E=function(e){return Object(o.c)({router:Object(u.b)(e),game:y})},f=m.a(),g=[d.a,Object(s.a)(f)],v=o.d.apply(void 0,[o.a.apply(void 0,g)].concat([])),h=Object(o.e)(E(f),{},v),k=t(5),D=t(36),N=(t(55),function(e){return r.a.createElement("div",{className:"start-center"},r.a.createElement("h1",null,"Black Jack"),r.a.createElement(D.a,{className:"button primary-button",to:"/game"},"New Game"))}),O=function(){return r.a.createElement(N,null)},w=t(37),j=t(38),C=t(43),B=t(39),A=t(44),R=(t(56),function(e){var a=e.amount,t=e.placeBet,c=e.bet,l=e.showField,i=Object(n.useRef)(null);return r.a.createElement("div",{className:"betting-input"},!l&&r.a.createElement("input",{type:"number",min:c,ref:i}),!l&&r.a.createElement("button",{className:"button secondary-button",onClick:function(){t(Number(i.current.value))}},"Place Bet"),r.a.createElement("div",{className:"badge"},"Wallet : ",r.a.createElement("strong",null,"$",a)),c>0&&r.a.createElement("div",{className:"badge"},"Bet : ",r.a.createElement("strong",null,"$",c)))}),P=(t(57),function(e){var a=e.startDeal,t=e.addCard,n=e.clickStay,c=e.nextRound,l=e.isNextRoundBtnEnabled,i=e.isDealBtnEnabled,u=e.isDrawCardBtnEnabled,o=e.isStayBtnEnabled;return r.a.createElement("div",{className:"action-list"},r.a.createElement("ul",null,r.a.createElement("li",{className:i?"active":"disabled"},r.a.createElement("button",{className:"button secondary-button",onClick:a},"DEAL")),r.a.createElement("li",{className:u?"active":"disabled"},r.a.createElement("button",{className:"button secondary-button",onClick:t},"ADD CARD")),r.a.createElement("li",{className:o?"active":"disabled"},r.a.createElement("button",{className:"button secondary-button",onClick:n},"STAY")),r.a.createElement("li",{className:l?"active":"disabled"},r.a.createElement("button",{className:"button secondary-button",onClick:c},"CONTINUE GAME"))))});P.defaultProps={isDealBtnEnabled:!1,isDrawCardBtnEnabled:!1,isStayBtnEnabled:!1,isNextRoundBtnEnabled:!1};var T=P,S=t(21),x=t.n(S),_=t(40),L=t(41),F=t.n(L),G=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},I=t(42),U="PLAYER",Y="DEALER",W="NOT_FINISHED",H=function(e){return e.player.cards.length>0},J=function(e){return K(e)!==W},M=function(e){return Object.keys(e).reduce((function(a,t){var n=e[t].value;return"JACK"===n||"QUEEN"===n||"KING"===n?a+10:"ACE"===n?a+11<=21?a+11:a+1:a+Number(n)}),0)},K=function(e){var a=M(e.player.cards);if(a>21)return Y;if(!e.playerFinished)return W;var t=M(e.dealer.cards);return a>t||t>21?U:Y},Q=function(e){return!H(e)&&e.player.bet>=5},V=function(e){return H(e)&&!J(e)&&2===e.dealer.cards.length},X=function(e){return H(e)&&!J(e)},$=function(e){return J(e)},q=function(e,a,t){for(var n=Object(p.a)({},a),r=1;r<=t;r++){var c=e.pop();n.cards.push(c)}return n.count=M(n.cards),n},z=function(){return function(e,a){var t,n,r,c=a().game.deck;t=q(c,a().game.player,2),n=q(c,a().game.dealer,2),e({type:"CARDS_DRAWN",player:(r={player:t,dealer:n,deck:c}).player,dealer:r.dealer,deck:r.deck})}},Z=function(){return function(e,a){var t,n,r=a().game.deck;t=q(r,a().game.player,1),e({type:"ADD_CARD",player:(n={player:t,deck:r}).player,deck:n.deck})}},ee=function e(a,t,n){var r=M(a.cards),c=M(t.cards);return c<17&&c<r?e(a,Object(p.a)({},t,{cards:[].concat(Object(I.a)(t.cards),[n[0]])}),n.slice(1)):{newPlayer:function(e,a,t){return a>21||a<e?Object(p.a)({},t,{wallet:t.wallet+2*t.bet}):e>21||e<a?Object(p.a)({},t,{wallet:t.wallet}):e===a?Object(p.a)({},t,{wallet:t.wallet+t.bet}):void 0}(r,c,a),dealer:t,deck:n,playerFinished:!0}},ae=Object(i.c)((function(e){return{isDealBtnEnabled:Q(e.game),isDrawCardBtnEnabled:V(e.game),isStayBtnEnabled:X(e.game),isNextRoundBtnEnabled:$(e.game)}}),(function(e){return{addCard:function(){return e(Z())},startDeal:function(){return e(z())},clickStay:function(){return e((function(e,a){var t=a().game,n=t.deck,r=t.player,c=t.dealer;e((ee(r,c,n),{type:"CLICK_STAY"}))}))},nextRound:function(){return e({type:"NEXT_ROUND"})}}}))(T),te=function(e){function a(){return Object(w.a)(this,a),Object(C.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(A.a)(a,e),Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.shuffleCards()}},{key:"render",value:function(){return r.a.createElement("div",{className:"box-section"},r.a.createElement(R,{amount:this.props.player.wallet,bet:this.props.player.bet,placeBet:this.props.placeBet,showField:this.props.isPlaying}),r.a.createElement(ae,null))}}]),a}(n.Component),ne=Object(i.c)((function(e){return{player:e.game.player,dealer:e.game.dealer,isDeckLoaded:e.game.isDeckLoaded,isPlaying:e.game.isPlaying}}),(function(e){return{shuffleCards:function(){return e(function(){var e=Object(_.a)(x.a.mark((function e(a){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("https://deckofcardsapi.com/api/deck/new/draw/?count=52").then((function(e){var t=G(e.data.cards);a({type:"REQUEST_CARDS",data:t})}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())},placeBet:function(a){return e(function(e){return{type:"PLACE_BET",betValue:e}}(a))},startDeal:function(){return e(z())},addCard:function(){return e(Z())}}}))(te),re=(t(76),Object(i.c)((function(e){return{isPlaying:e.game.isPlaying,readyToDeal:e.game.player.bet>=5,winner:K(e.game)}}))((function(e){var a=e.readyToDeal,t=e.winner,n=e.isPlaying;return r.a.createElement("div",{className:"alert-section"},!a&&t===W&&r.a.createElement("h1",null,"Place Bet to begin play "),a&&!n&&r.a.createElement("h1",null,"Great, now click on Deal button to draw cards"),n&&t===W&&r.a.createElement("h1",null,"Yell, Game is on"),t===Y&&r.a.createElement("h1",null,"Game Over! Dealer Won"),t===U&&r.a.createElement("h1",null,"Congratulations! You Won"))}))),ce=(t(77),function(e){return r.a.createElement("div",{className:"box-section card-display"},r.a.createElement("div",{className:"label"},e.cardDisplay+" "+e.cardTotal),r.a.createElement("ul",null,e.cards.map((function(e,a){return r.a.createElement("img",{key:a,src:e.images.png,height:"200",alt:e.code})}))))}),le=Object(i.c)((function(e){return{isPlaying:e.game.isPlaying,dealer:e.game.dealer,player:e.game.player}}))((function(e){return r.a.createElement("div",null,e.isPlaying&&r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(ce,{cardDisplay:"Your Hand:",cardTotal:e.player.count,cards:e.player.cards})),r.a.createElement("div",{className:"col-6"},"This is not working, currently in progress",r.a.createElement(ce,{cardDisplay:"Computer Hand:",cardTotal:e.player.count,cards:e.player.cards}))),r.a.createElement(ce,{cardDisplay:"Dealer Hand:",cardTotal:e.dealer.count,cards:e.dealer.cards})))})),ie=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(re,null),r.a.createElement(ne,null),r.a.createElement(le,null))))},ue=function(){return r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",component:O}),r.a.createElement(k.a,{exact:!0,path:"/game",component:ie}))};t(78);l.a.render(r.a.createElement(i.a,{store:h},r.a.createElement(u.a,{history:f},r.a.createElement(ue,null))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.bae2acc4.chunk.js.map