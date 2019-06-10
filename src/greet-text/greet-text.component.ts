import { ComponentNode, ComponentTreeSupport, ProduceStyle, Theme } from '@wesib/generic';
import { Component, ComponentContext, Feature } from '@wesib/wesib';
import { ValueSync } from 'fun-events';
import { StypRules } from 'style-producer';
import { AppFeature, InputStyle } from '../common';
import { GreetOutComponent } from './greet-out.component';

@Component('greet-text')
@Feature({
  needs: [
    GreetOutComponent,
    ComponentTreeSupport,
    AppFeature,
  ]
})
export class GreetTextComponent {

  @ProduceStyle()
  get style(): StypRules {
    return this._context.get(Theme).style(InputStyle);
  }

  constructor(private readonly _context: ComponentContext) {

    const value = new ValueSync<String | null>(null);
    const node = _context.get(ComponentNode);
    const input = node.select('input', { all: true }).first;
    const output = node.select('greet-out').first;

    value.sync('in', input, i => i && i.property<string>('value'));
    value.sync(output, o => o && o.attribute('name'));

    _context.on('input')(event => value.it = (event.target as HTMLInputElement).value);
  }

}
