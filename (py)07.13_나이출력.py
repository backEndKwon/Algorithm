# lv0

# 나이 출력

# 제한사항
# 0 < age ≤ 120
# 나이는 태어난 연도에 1살이며 1년마다 1씩 증가합니다.
#2022 기준
# 입출력 예
# age	result
# 40	1983
# 23	2000
#python으로 함수 선언 = def, {} 대신 :, 

def solution(age) :
    answer = 2022 +1 - age
    return answer
print(solution(40))
print(solution(23))