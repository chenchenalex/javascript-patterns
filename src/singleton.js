class loggerService {
  constructor() {
    this.logs = [];
  }

  createLog(message) {
    this.logs.push(`${message}: ${new Date()}`);
  }

  deleteLog(index) {
    this.logs.splice(index, 0);
  }
}

//❌ this will create a different instance each time with different log pool
const badLogService = new loggerService();

function getLoggerService() {
  let instance;
  if (!instance) {
    instance = new loggerService();
  } else {
    return instance;
  }
}

// ✅ always refer to one instance in memory shared by everyone
const goodLogService = getLoggerService();
