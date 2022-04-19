import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-maze';

  public field: number[][] = [
    [1, 1, 1, 1, 1],
    [1, 2, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ];

  private y = 1;
  private x = 1;


  public move(isX: boolean, isInverted: boolean) {


    if (!isX) { //up
      if (isInverted) {
        if (this.field[this.y - 1][this.x] == 0) {
          this.field[this.y][this.x] = 0;
          this.y -= 1;
          this.field[this.y][this.x] = 2;

        }
        console.log('up')

      } else { //down
        if (this.field[this.y + 1][this.x] == 0) {
          this.field[this.y][this.x] = 0;
          this.y += 1;
          this.field[this.y][this.x] = 2;
        }
        console.log('down')

      }
    } else { //left
      if (isInverted) {
        if (this.field[this.y][this.x - 1] == 0) {
          this.field[this.y][this.x] = 0;
          this.x -= 1;
          this.field[this.y][this.x] = 2;
        }
        console.log('left')

      } else { //right
        if (this.field[this.y][this.x + 1] == 0) {
          this.field[this.y][this.x] = 0;
          this.x += 1;
          this.field[this.y][this.x] = 2;
        }
        console.log('right')

      }
    }
    /*

    */
  }
}
