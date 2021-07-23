const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};

console.log(statuses.inProgress);

enum Status {
  NotStarted = "notStarted",  //  Use = instead of :
  InProgress = "inProgress",
  Done = "done",
}

let notStartedStatus: Status = Status.NotStarted;

notStartedStatus = Status.Done;

console.log(Status.InProgress); //  Enum used as a Value