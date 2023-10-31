/* stringbuilder class 구현 */

class StringBuilder{
    constructor(){
        this.buffer = [];
    }

    append(str){
        this.buffer.push(str);
    }
    toString(){
        return this.buffer.join('');
    }
}

/* 사용예시 */
const sb = new StringBuilder();
sb.append('hello ');
sb.append('world');
sb.append('!');
console.log(sb.toString())