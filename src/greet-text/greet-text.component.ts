import { AttributeChanged, ComponentContext, WesComponent } from '@wesib/wesib';

@WesComponent('greet-text')
export class GreetTextComponent {

  constructor(private readonly _context: ComponentContext) {
  }

  @AttributeChanged()
  name(newValue: string) {
    this._context.element.innerText = `Hello, ${newValue}!`;
  }

}
