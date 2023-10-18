#k의 개수
#i부터 j까지 등장 하는 수중 k의 등장 횟수

#전략 : 등장하는 숫자 배열에 때려넣고 분리시켜서 include로 확인
def solution(i,j,k):
    answer=0
    for num in range(i,j+1):
        for num2 in str(num) :
            if num2 in str(k):
                answer += 1
    return answer

#다른사람 풀이
def solution(i, j, k):
    return sum([ str(i).count(str(k)) for i in range(i,j+1)])

# range(i,j+1) => i부터 j까지 반복하는 iterator 생성
#str(i) => 숫자 i를 문자열로 변환
#.count(str(k)) => .앞의 문자열에서 k가 등장하는 횟수를 세어줌
# sum([])배열안의 모든 요소를 더함


print(solution(1,13,1))
print(solution(10,50,5))
print(solution(3,10,2))