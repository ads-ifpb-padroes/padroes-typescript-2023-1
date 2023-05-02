abstract class Television{

    abstract properties: any;

    powerOn(){
        return 'Powering on...';
    }

    powerOff(){
        return 'Powering off...';
    }

    channelUp(){
        return 'Channel Up...';
    }

    channelDown(){
        return 'Channel Down...'
    }
}

class Samsung extends Television{
    properties = {
        width: '48in',
        height: '48in'
    }
}

class LG extends Television{
    properties = {
        width: '28in',
        height: '28in'
    }
}

const tv = new Samsung();

console.log(tv.powerOn());
console.log(tv.channelUp());
console.log(tv.properties.width);


