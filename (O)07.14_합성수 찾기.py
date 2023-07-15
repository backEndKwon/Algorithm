# lv0

# 합성수 찾기

# 제한사항
# 1 ≤ n ≤ 100


def solution(n):
    answer = 0
    for i in range(1, n+1) :
        if(isComposite(i)) :
            answer += 1
    return answer

#약수 확인

def isComposite(x):
    count =0
    for i in range(1, x+1):
        if(x%i==0) :
            count += 1
    if(count>=3):
        return True

print(solution(10))
print(solution(15))