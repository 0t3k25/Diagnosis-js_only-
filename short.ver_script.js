'use strict';
//診断開始の質問および返答
if(window.confirm('診断を始めますか？')){    
    window.alert('help:yesまたはnoで答えてください');
} else {
    window.alert('カエレ！');
}
//質問内容
const que = [{toi:'おっぱい好きですか？'},{toi:'同性が好きですか？'},];
//打ちミスの注意喚起
const warning = [{note:'yesかnoで答えてください'},{note:'文字は読めますか？'},
{note:'診断する価値ないですね'}];
//質問文
for(let i=0 ; i < que.length ; i++ ){
    const ans = window.prompt(que[i].toi);
    if(ans ==="yes"){
        window.alert('最高か？')
    } else if(ans ==='no'){
        window.alert('変態')
    } else {
        window.alert(warning[i].note);
    }}
