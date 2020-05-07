import type ItemColor = 'blue' | 'green' | 'gray';

import interface Item {
  id?: number;
  name?: string;
  price?: number;
  currency?: string;
  colors?: ItemColor[];
  picture?: string;
}