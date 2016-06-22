var EventEmitter = require('events').EventEmitter;

function Dog(name) {
	this.name = name;
}

Dog.prototype = Object.create(EventEmitter.prototype);
Dog.prototype.constructor = Dog;

var wc = new Dog('旺财');

wc.on('bark', function(){
	console.log(this.name + '：汪汪');
});

setTimeout(function(){
	wc.emit('bark');
}, 1000);