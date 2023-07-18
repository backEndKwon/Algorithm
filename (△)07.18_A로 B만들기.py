#A로 B만들기
#before의 순서를 바꾸어(차례대로 아님) after를 만들 수 있으면 1을, 만들 수 없으면 0
#before	after	result
# "olleh"	"hello"	1
# "allpe"	"apple"	0

#정렬 메서드 말고 직접 구현해보기

def solution(before, after) :
    beforeSort = sorted(before)
    afterSort = sorted(after)
    if(beforeSort == afterSort) :
        return 1
    else : 
        return 0
#######--------------------#######
def solution(before, after) :
    beforeSort = sort(list(before))# js의 ...before같이 바꿔주는 기능 list()
    afterSort = sort(list(after))
    if(beforeSort == afterSort) :
        return 1
    else : 
        return 0
        
def sort(arr): #오른차순
    for i in range(len(arr)): # i는 0부터 len(arr)-1까지 자동 업
        min_idx = i #앞값이 뒷값보다 클경우 자리 변경을 위한 = 인덱스 최솟값 0부터 설정
        for j in range(i+1,len(arr)):#j는 1부터 len(arr)-1까지 
            if(arr[j]<arr[min_idx]):
                min_idx = j
        arr[i],arr[min_idx] = arr[min_idx],arr[i] #앞값이 뒷값작으면 자리 안바뀜
    return arr

print(sort([4,1,3,2,7])) # [1,2,3,4,7]
print(solution("allpe","apple"))