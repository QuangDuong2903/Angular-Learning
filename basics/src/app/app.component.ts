import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-root',
  // template: `<p>Hello world</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: []
})
export class AppComponent {
  name = 'quang duong'
  imgURL = 'https://picsum.photos/id/237/500/500'
  images = [
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/337/500/500',
    'https://picsum.photos/id/437/500/500'
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 40.3
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }
  blueClass = false
  fontSize = 24

  count = 0

  getName() { return this.name }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(event: string) {
    console.log(event)
  }

}