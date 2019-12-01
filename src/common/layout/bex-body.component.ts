import { importNodeContent, Navigation, pageLoadParam, ProduceStyle, Theme } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext } from '@wesib/wesib';
import { eventSupply } from 'fun-events';
import { StypProperties, stypRoot } from 'style-producer';
import { ThemeSettings } from '../theme';

@Component('bex-body')
export class BexBodyComponent {

  private readonly _theme: Theme;

  constructor(context: ComponentContext) {
    this._theme = context.get(Theme);

    const document = context.get(BootstrapWindow).document;
    const navigation = context.get(Navigation);

    context.whenOn(() => {

      const element: Element = context.element;
      const supply = eventSupply(() => element.innerHTML = '');
      const range = document.createRange();

      range.selectNodeContents(element);

      navigation.read.once(page => {
        page.put(
            pageLoadParam,
            {
              fragment: { tag: element.tagName },
              receiver: {
                supply,
                receive(_ctx, response) {
                  console.log(response);
                  if (response.ok) {
                    range.deleteContents();

                    const target = document.createDocumentFragment();
                    const { fragment } = response;

                    if (fragment) {
                      importNodeContent(fragment, target);
                      range.insertNode(target);
                    }
                  } else if (response.ok === false) {
                    range.deleteContents();
                    range.insertNode(document.createTextNode(`Error. ${response.error}`));
                  } else {
                    range.deleteContents();
                    range.insertNode(document.createTextNode('Loading...'));
                  }
                },
              },
            },
        );

        return supply;
      });

      context.whenOff(() => supply.off());
    });
  }

  @ProduceStyle()
  style() {

    const settings = this._theme.ref(ThemeSettings).read.keep;
    const root = stypRoot(settings.thru(bexBodyStyle));

    return root.rules;
  }

}

function bexBodyStyle(
    {
      $fontSize,
    }: ThemeSettings,
): StypProperties {
  return {
    padding: 0,
    margin: `0 0 0 ${$fontSize.div(2)}`,
  };
}
