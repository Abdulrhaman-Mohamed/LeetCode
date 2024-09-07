type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private events = {}
    subscribe(eventName: string, callback: Callback): Subscription {
        if (this.events[eventName]) this.events[eventName] = [...this.events[eventName], callback]
        else this.events[eventName] = [callback]      
        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(fn => fn !=callback)
            }
        };
    }

    emit(eventName: string, args: any[] = []): any[] {
        const getEvent = this.events[eventName];
        if(getEvent)return getEvent.map(fn=>fn(...args))
        return []
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */