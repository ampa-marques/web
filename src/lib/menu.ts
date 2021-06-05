import menu from "../../meta/menu.yml";

export type MenuContent = {
  readonly slug: string;
  readonly name: string;
};

export function getMenu() {
  return menu.menu as MenuContent[]; 
}
