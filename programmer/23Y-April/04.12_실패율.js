//실패율
// N	stages	                    result
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
// 4	[4,4,4,4,4]             	[4,1,2,3]

/* <전략>
person = sta.length//도전자 수
sta[i]//i단계 실패자
//삽질 1 정렬화 시켜서 1부터 splice로 계쏙person 삭제해가면 personlength나오겠지 
//reduce로 1몇개인지 셀수있음 sta.sort((a,b)=>a-b).reduce((누적갯수, 비교문자) => cnt + (element === 1 ? 1 : 0), 누적갯수초기값세팅);
sta[i]/person-전단계실패자수 //i단계 실패율
fail[] = 실패율 //변수 선언 후 fail배열에 넣기
sort() = 내림차순 정렬
indexOf() = 해당 값에 대한 index값으로 해당 실패율에 대한 스테이지값 가져오기 
</전략> */
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
function solution(n, sta) {

    ///분자만들기
    let fail_num_arr = [];//<==이게 분자값들의 배열
    for (let i = 1; i <= n; i++) { //stage에서 n+1이상은 요소들은 뺴야됨
        sta.sort((a, b) => a - b);//정렬시켜서 차례대로 확인
        fail_num_arr.push(sta.reduce((cnt, element) => cnt + (element === i ? 1 : 0), 0));
        //여기까지 1에서 탈락자 2에서 탈락자 나옴, 대신 1에서 탈락자는 index=0부터
        // 총합은 8. 어떻게 하면 1/8 > 3/7로 분모를 줄여갈가?                  //n은 5니까 fail_person을 5만큼 잘라야됨, 단 총 비교인원은 8명명
    }//fail_num_arr = [1,3,2,1,0,1]

    ///분수만들기
    let fail_frac_arr = [];//<==이게 분수가  들어있는 배열
    let fail_frac_arr_copy = [] //<==분수의 랭킹
    let fail_frac;
    //총인원 n+1까지 8, 5
    let all_sum = sta.length;//<==이게 총인원
    for (let j = 0; j < n; j++) {

        fail_frac = fail_num_arr[j] / all_sum
        all_sum -= fail_num_arr[j]
        fail_frac_arr.push(fail_frac)//[ 0.125, 0.42857142857142855, 0.5, 0.5, 0 ]/ [0, 0, 0, 1 ]
        fail_frac_arr_copy.push({ stage: j + 1, failRate: fail_frac })//[ 0.5, 0.5, 0.42857142857142855, 0.125, 0 ] / [ 1, 0, 0, 0 ]
    }
    // fail_frac_arr_copy.sort((a,b)=>b-a ); //<== 이게바로 분수의 순위

    // // /// 마지막 순위값과 위치값 매칭
    //이거 삽질임 절대 안됌
    // let answer = []
    // for(let i=0; i<n; i++){
    //       answer.push(fail_frac_arr.indexOf(fail_frac_arr_copy[i])+1)

    // }
    fail_frac_arr_copy.sort((a, b) => {
        if (a.failRate !== b.failRate) {
            return b.failRate - a.failRate;
        } else {
            return a.stage - b.stage;
        }
    });

    let answer = fail_frac_arr_copy.map((el) => el.stage);
    return answer;
}




console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
console.log(solution(4, [4, 4, 4, 4, 4]))