# lv0

# 모스부호 

# 입출력 예
# letter	result
".... . .-.. .-.. ---"	"hello"
".--. -.-- - .... --- -."	"python"
# 1 ≤ n ≤ 100

morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
def solution(letter) :
    words = letter.split()
    spell =""
    for word in words :
        spell += morse[word]
    return spell

#--다른사람풀이--

# python에서의 join은 기준을 앞에 설정함. split은 자바스크립트와 동일. 리스트 컴프리헨션이라는 파이썬 문법으로 [morse[i] for i in letter.split(' ')]이게 가능함
def solution(letter):
    morse = {"위랑 동일"}
    return "".join([morse[i] for i in letter.split(' ')])

print(solution(".... . .-.. .-.. ---"))
print(solution(".--. -.-- - .... --- -."))