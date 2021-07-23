const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};

console.log(statuses.inProgress);

enum StatusEnum {
  NotStarted = "notStarted",  //  Use = instead of :
  InProgress = "inProgress",
  Done = "done",
}

interface Tack {
  id: string;
  status: StatusEnum; //  Provide only Enum
}
let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

notStartedStatus = StatusEnum.Done;

console.log(StatusEnum.InProgress); //  Enum used as a Value