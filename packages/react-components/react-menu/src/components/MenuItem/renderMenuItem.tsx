/** @jsxRuntime classic */
/** @jsx createElement */

import { createElement } from '@fluentui/react-jsx-runtime';
import { getSlotsNext } from '@fluentui/react-utilities';
import type { MenuItemSlots, MenuItemState } from './MenuItem.types';

/**
 * Function that renders the final JSX of the component
 */
export const renderMenuItem_unstable = (state: MenuItemState) => {
  const { slots, slotProps } = getSlotsNext<MenuItemSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.checkmark && <slots.checkmark {...slotProps.checkmark} />}
      {slots.icon && <slots.icon {...slotProps.icon} />}
      {slots.content && <slots.content {...slotProps.content} />}
      {slots.secondaryContent && <slots.secondaryContent {...slotProps.secondaryContent} />}
      {slots.submenuIndicator && <slots.submenuIndicator {...slotProps.submenuIndicator} />}
    </slots.root>
  );
};
