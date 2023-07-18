# 팩토리얼
# 84%
# 5! = 5 * 4 * 3 * 2 * 1 = 120 
# 제한사항
# i! ≤ n
# 0 < n ≤ 3,628,800
#전략 = factorial 메서드는 있지만 직접 구현해보기 / 
#     = answer로 +1씩 증가시켜 횟수로 이용 | facValue로 실제 factory 로직 계산
def solution(n) :
    answer = 1 # +1증가용
    facValue = 1 # factory 계산용
    while facValue <= n :
        answer += 1
        facValue = facValue * answer
    return answer-1


print(solution(3628800)) #10
print(solution(7)) #3