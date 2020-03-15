import { ComponentNode } from '@wesib/generic';
import { DefaultInAspects, inputFromControl } from '@wesib/generic/input';
import { ProduceStyle, Theme } from '@wesib/generic/styp';
import { Component, ComponentContext } from '@wesib/wesib';
import { afterAll, ValueSync } from 'fun-events';
import { InCssClasses, inCssInfo, inGroup, InStyledElement, inText, InValidation, requirePresent } from 'input-aspects';
import { StypProperties, stypRules, StypRules } from 'style-producer';
import { AppFeature, Examples__NS, InputStyle, ThemeSettings } from '../common';
import { greetFieldStyle, GreetingOutComponent } from './greeting-out.component';

@Component(
    ['greeting', Examples__NS],
    {
      feature: {
        needs: [
          GreetingOutComponent,
          AppFeature,
        ],
      },
    },
)
export class GreetingComponent {

  constructor(private readonly _context: ComponentContext) {
    _context.whenOn(supply => {

      const node = _context.get(ComponentNode);
      const group = inGroup<GreetData>({ name: '' });

      afterAll({
        name: node.select('input', { all: true, deep: true }).first(),
        aspects: _context.get(DefaultInAspects),
      }).tillOff(supply).consume(
          ({ name: [nameNode], aspects: [aspects] }) => {

            const name = nameNode && inText(nameNode.element)
                .convert(aspects, InStyledElement.to(nameNode.element))
                .setup(InValidation, validation => validation.by(requirePresent))
                .setup(InCssClasses, classes => classes.add(inCssInfo()));

            group.controls.set('name', name);

            return name && inputFromControl(_context, name);
          },
      );

      const output = node.select(GreetingOutComponent, { deep: true }).first().tillOff(supply);
      const sync = new ValueSync<string | null>('');

      sync.sync(output, o => o?.attribute('name'));
      sync.sync(
          'in',
          group.controls.read(),
          controls => controls?.get('name'),
      );

      supply.whenOff(reason => {
        sync.done(reason);
        group.done(reason);
        group.controls.clear();
      });
    });
  }

  @ProduceStyle()
  style(): StypRules {
    return this._context.get(Theme).style(GreetingStyle);
  }

}

interface GreetData {
  name: string;
}

const Greeting__qualifier = 'bex:greeting';

function GreetingStyle(theme: Theme): StypRules {

  const settings = theme.ref(ThemeSettings).read();
  const { root: { rules } } = theme;
  const label = rules.add(
      [{ u: [':', 'host'], $: Greeting__qualifier }, { e: 'label', $: Greeting__qualifier }],
      settings.keepThru(greetLabelStyle),
  );

  return stypRules(
      theme.style(InputStyle),
      label,
      label.rules.add(
          { e: 'input', $: Greeting__qualifier },
          settings.keepThru(greetFieldStyle),
      ),
  );
}

function greetLabelStyle(
    {
      $fontSize,
    }: ThemeSettings,
): StypProperties {
  return {
    display: 'block',
    margin: 0,
    padding: `${$fontSize.div(2)}`,
  };
}
