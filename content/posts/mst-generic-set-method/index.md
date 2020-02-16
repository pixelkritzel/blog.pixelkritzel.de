---
title: "Using a generic and typesafe set method with mobx-state-tree in TypeScript"
date: 2020-01-04
draft: false
---

Managing state in a JavaScript or a React.js application is complex problem. My personal preferred solution is [mobx-state-tree](https://mobx-state-tree.js.org/) which is build on the also great [MobX](https://mobx.js.org/). One of my favourite features is the necessity to call an explicit action to change a value. For the most part this action is bound to the model. It looks like this:

<!--more-->

```typescript
const model = types.model({
  name: types.string
}).actions(self => ({
  setName(name: string) {
    self.name = name;
  }
});
```

It's typesafe and it's a nice way to create domain specific actions. But it can become cumbersome if you have a lot of different fields which are independently of each other. You could create a set method for every field, but ... no.

So after failing to find some way by myself I asked in the [mobx-state-tree spectrum chat](https://spectrum.chat/mobx-state-tree/general/generic-set-action-in-typescript~2ea997e4-db75-4908-9119-677285a1ebe1) and we managed to find a solution together:

```typescript
import { cast, SnapshotIn, types } from 'mobx-state-tree';

const model = types
  .model("model", {
    text: types.string,
    number: types.number,
    bool: types.boolean,
    optional: types.optional(types.string, "default"),
    complex: types.maybe(
      types.model({
        prop: types.string
      })
    )
  })
  .actions(self => ({
    set<
      K extends keyof SnapshotIn<typeof self>,
      T extends SnapshotIn<typeof self>
    >(key: K, value: T[K]) {
      self[key] = cast(value);
    }
  }));
```

This is just great because it's typesafe. You can check the [sandbox with example code here](https://codesandbox.io/s/nifty-night-uwh5l). But also because this was an awesome online colaboration experience.

Thanks to [ingowonner](https://spectrum.chat/users/ingowonner?tab=posts) for trying again and again and providing the final touch by using the `cast` function.
