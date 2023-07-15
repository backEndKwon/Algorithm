# lv0

# 짝수의 합

# 제한사항
# 0 < n ≤ 1000 

def solution(n) :
    answer = 0
    for i in range(1, n+1) :
        if i%2 == 0 :
            answer += i
        i += 1
    return answer  
#다른 사람 풀이#
### range에 시작숫자, 끝숫자(미만), 증가 폭 으로 설정 가능 
def solution(n):
    answer = 0
    for i in range(2, n+1, 2):
        answer += i
    return answer
        
print(solution(10))
print(solution(4))