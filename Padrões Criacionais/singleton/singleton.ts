class Logger {
    private static instance: Logger
    private logs: string[]

    private constructor() {
        this.logs = []
    }
    
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger()
        }
        return Logger.instance
    }
    public addInstance(message: string): void {
        this.logs.push(message)
    }
    public printInstance():void {
        console.log(this.logs)
    }
}

const logger1 = Logger.getInstance()
logger1.addInstance("Log 1")

const logger2 = Logger.getInstance()
logger2.addInstance("Log 2")

logger1.printInstance()//Output: ['Log 1','Log 2']
logger2.printInstance()//Output: ['log 1','Log 2']
