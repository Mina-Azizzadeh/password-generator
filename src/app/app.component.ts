import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public length = 0
  public useLetter = false
  public useNumber = false
  public useSymbol = false
  public password = ''

  onChangeLetter() {
    this.useLetter = !this.useLetter
  }
  onChangeNumber() {
    this.useNumber = !this.useNumber
  }
  onChangeSymbol() {
    this.useSymbol = !this.useSymbol
  }
  onClickGenerate() {
    let letter = 'qwertyuiopasdfghjklzxcvbnm'
    let number = '1234567890'
    let symbol = '!@#$%^&*'

    let validChars = ''
    if (this.useLetter) {
      validChars += letter
    }
    if (this.useNumber) {
      validChars += number
    }
    if (this.useSymbol) {
      validChars += symbol
    }

    let generatorPassword = ''
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatorPassword += validChars[index]
    }
    this.password = generatorPassword
  }
}
