# Basic

My very first Angular app.

### Components

Angular is a UI framework that creates complex user interfaces by creating components. Components are the building blocks of an Angular Project.
When first initalizing an Angular app with `ng new file-name`, we get by default only one component, the app component. We can see it is passed to the DOM by checking the index.html page.
There, the element <app-root> is not a standard HTML tag, but is is where angular does its magic.
This is also thre reason why, if we start the development server using `ng serve`, we don't see "Loading..." on the screen, but the placeholder that angular comes with, which is the app.component.html .

### How can we make a new component?

There are two ways for this:

1. Using the Angular CLI, which is the recommended and more efficient way.
2. Creating and setting up the files ourselves. This is not ideal as it is prone to error. However, it is good to use it a couple of times so we better understand what is happening there!
   This is what will be used right now, and we will switch to the CLI shortly.

In the src/app directory, we can create a new directory with a name of our choice(ex: server). In there, we add a server.component.ts file.( \* the name can be whatever we want but is good practice to have the same name as the component. \*\* the module.ts file is necessary because it tells Angular what kind of logic will be there)

In there, we write

import { Component } from "@angular/core";

@Component({
selector:"app-server",
templateUrl:"./server.component.html",
styleUrls:[],

})

export class ServerComponent {
}

The server.component.html file is another file that we need to add ourselves where we will add the html from this component

After we have to go to the app.module.ts file and add these new file, to register in the list of components that can be rendered to the screen!

@NgModule({
declarations: [
AppComponent,
`ServerComponent`
],
...
})

Well, this was a lot of work and we did not even start working on our logic. This is not something we want.

### Angular CLI

#### ng generate component servers

or `ng g c servers` as a shortcut. After we run this in the root directory of our project, we get a new folder that comes preconfigured with everything we need to get started! On top of that, all the other files are updated accordingly.

### Styling

We can style components by connecting an external CSS file and handle all the styling for that component there.

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

