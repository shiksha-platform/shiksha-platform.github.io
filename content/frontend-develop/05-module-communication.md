---
title: "Inter Module communication"
metaTitle: "Inter Module communication"
metaDescription: ""
---

As a developer, i am developing a module that wants to communicate with other modules. This describes uses for event bus messaging between modules

## EventBus
```@shiksha/common-lib``` provides ```EventBus``` that is used to communicate and event that happened. Any other module can subscribes to the event channel and act on event that has happened.

## Publish an Event
\\ A component A in a module M1 publishes event E
```
\\ -- componentA.js
import {eventBus} from '@shiksha/common-lib';
...
let eventData = ...
eventBus.publish(
              "[channel]" , 
              {
                eventType:"[eventtype]", 
                data: eventData 
              });
...

```
## Subscribes to an Event
\\ A component B in module M2 wants to act on an event that is published to a channel 
```
\\ -- componentB.js
import {eventBus} from '@shiksha/common-lib';
...
\\ grab subscription 
\\ so that it can be released after component no more wants to listen to the events in the channel
const subscription = eventBus.subscribe("[channel]", (data, envelop)=>{
      console.log(envelop);
      if(data.eventType="[eventtype]"){
        // act on event wiith data.
        ...
      }
    });
...

// unscubscribe when componentB is destroyed/removed
eventBus.unsubscribe(subscription);
```