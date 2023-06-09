

### canOverrideDefaultCapacity

```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

For this user story I thought that we could have a defaultCapacity value (e.g. for each continent, airport type, etc) that we would want to overwrite sometimes (perhaps when creating a collection of airports all in a different continent to the default). After clarification this turns out not to be the case. All airports can have the same default capacity. The phrase 'default airport capacity [...] can be overridden ' was not intended to imply that we would want to modify the default value, but rather that each airport capacity would start out with a default value and then we can change each airport capacity separately.

Below are my thoughts when I saw the problem for the first time:

Could be each airport has a defaultCapacity, which can be overwritten.
Could also be that each airport has a capacity, all airports have the same  defaultCapacity and capacity can be set (overridding the defaultCapacity);


| Objects | Properties | Messages | Return Values |
|---|---|---|---|
| airport | defaultCapacity @Int | overrideDefaultCapacity(@Int) | @Void |