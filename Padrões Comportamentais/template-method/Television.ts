abstract class Television{

    abstract inches: string;

    powerOn(){
        return 'Powering on...';
    }

    powerOff(){
        return 'Powering off...';
    }

    specificPowerOn(){
        return '';
    }
    channelUp(){
        return 'Channel Up...';
    }

    channelDown(){
        return 'Channel Down...'
    }
}

class Samsung extends Television{
        inches = '48 inches';
        specificPowerOn(){
            return 'Welcome to the Samsung world';
        }
    }

class LG extends Television{
        inches = '28 inches';
        specificPowerOn(){
            return 'Welcome to the LG world';
        }
    }

const tv = new Samsung();

console.log(tv.specificPowerOn());
console.log(tv.channelUp());
console.log(tv.inches);


