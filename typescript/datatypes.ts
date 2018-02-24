var userName: string;
var age: number;
var isMarried: boolean;
var friends: Array<string>;
var strengths: Object;

var message: any;

enum STATUS {
  OK = 1000,
  WARN = 200,
  ERROR
}

var processingStatus: STATUS;

processingStatus = STATUS.ERROR;
processingStatus = 100;
