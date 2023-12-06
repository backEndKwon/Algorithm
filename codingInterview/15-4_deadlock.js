/* 
15-4

교착상태 없는 클래스:
교착상태에 빠지지 않는 경우에만 lock을 제공해주는 클래스 설계

*/

/* 
로직
최종 클래스 명 : NonBlockingClass
구조는 isLocked : boolean, waitingList : array
클래스 내 메서드 : 
acquireLock => 락 거는용 -> 제한 시간내에 락을 못얻으면 타임아웃 발생
releaseLock => 락 푸는용
performTask => 특정작업 수행용 -> 작업 끝나면 락 해제, 큐의 다음 작업 실행
*/

class NonBlockingClass {
  constructor() {
    this.isLocked = false;
    this.waitingList = [];
  }

  async acquireLock(timeout = 5000, retryInterval = 100) {
    const startTime = Date.now(); //현재 바로 시작
    const tryAcquireLock = async () => {
      if (!this.isLocked) {
        //락 이 안되어 있다면?
        this.isLocked = true;
        return;
      } else {
        // 만약 queue에 요청 들어왔다면
        await new Promise((resolve) => setTimeout(resolve, retryInterval));
        if (Date.now() - startTime >= timeout) {
          throw new Error("락 승인 타임 아웃");
        }

        //재시도
        await tryAcquireLock();
      }
    };

    //재시도
    await tryAcquireLock();
  }

  //releaseLock 메서드
  releaseLock() {
    this.isLocked = false;
    //queue에 리스트 확인
    if (this.waitingList.length > 0) {
      const nextInQueue = this.waitingList.shift();
      nextInQueue();
    }
  }

  async performTask(task, timeout = 5000) {
    await this.acquireLock(timeout);
    try {
      await task();
    } finally {
      this.releaseLock();
    }
  }
}

const nonBlockingClass = new NonBlockingClass()
async function exampleTask(){
    console.log("task start")
    await new Promise(resolve => setTimeout(resolve,2000))
    console.log("task complete")
}

nonBlockingClass.performTask(exampleTask)
nonBlockingClass.performTask(exampleTask)