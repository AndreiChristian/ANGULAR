# Property and Event Binding

As the app we are working on grows, we will fast reach a point where one single HTML file or Angular Component is too small. It is good pratice to split our code, but once the code lives in different components, we have to connect them together.In order to so, we can create our own properties and events, creating custom properties and events.

### Custom Property Binding

Often, we want to have a component that takes care of displaying some content, such as a name and a description and we want the parent component to pass the info and loop through the content.

`posts = [{name:...,description:....}]`

`<h1> I am the parent component</h1>`
`<child-component *ngFor=" let post of posts "></child-component>`

And afterwards use the properties of "post" to display a nice card.
However, the child component has no idea about post and we have to make some data binding

`<child-component *ngFor=" let post of posts " [element]=post  ></child-component>`

This is passing some data to the child component. However, we must the child to expect it. In then child-component.ts file, we must add:
`@Input() element:{....}`

- Input must be imported: `import { Input } from '@angular/core';`
- The name we give to the variable doesnot matter but it must be the same in both the tags and in the .ts file

### Custom Properties Alias

If we want to communicate the information between the parent and child using a different name,
we can do so using an alias.

`<child-component *ngFor=" let post of posts " [onePost]=post  ></child-component>`
`@Input("onePost") element:{....}`
